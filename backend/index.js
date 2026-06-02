require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// 1. Trust Proxy: Crucial for Render to allow secure cross-origin cookies
app.set("trust proxy", 1);

// 2. CORS Configuration: Whitelisting your specific live URLs
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://zerodha-frontend-ahcq.onrender.com",
  "https://zerodha-dashboard-jb24.onrender.com"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. Session Configuration: Dynamic security for live vs local testing
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      // true for HTTPS (Render), false for HTTP (localhost)
      secure: process.env.NODE_ENV === "production", 
      // 'none' allows cross-site cookies, 'lax' is for localhost
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Authentication Routes
app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required" });
    }

    const existingUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    const user = new UserModel({ username, email });
    await UserModel.register(user, password);

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: err.message || "Signup failed" });
  }
});

app.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: info?.message || "Invalid credentials" });
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error("LogIn error:", err);
        return res.status(500).json({ error: err.message });
      }
      res.json({ 
        message: "Logged in successfully", 
        user: { 
          id: user._id, 
          username: user.username, 
          email: user.email 
        } 
      });
    });
  })(req, res, next);
});

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Logged out successfully" });
  });
});

app.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
      },
    });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Holdings Routes
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({}).sort({ _id: -1 });
  res.json(allOrders);
});

app.post("/updateHolding", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    let holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const oldQty = holding.qty || 0;
        const oldAvg = holding.avg || 0;
        const newQty = oldQty + Number(qty);
        const newAvg = (oldAvg * oldQty + Number(price) * Number(qty)) / newQty;

        holding.qty = newQty;
        holding.avg = newAvg;
        holding.price = Number(price);
        await holding.save();
        return res.json(holding);
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
        });
        await newHolding.save();
        return res.json(newHolding);
      }
    } else if (mode === "SELL") {
      if (!holding) {
        return res.status(400).json({ error: "Holding not found" });
      }

      const sellQty = Number(qty);
      if (holding.qty < sellQty) {
        return res.status(400).json({ error: "Insufficient quantity to sell" });
      }

      const remainingQty = holding.qty - sellQty;
      if (remainingQty === 0) {
        await HoldingsModel.deleteOne({ name });
        return res.json({ message: "Holding removed" });
      } else {
        holding.qty = remainingQty;
        holding.price = Number(price);
        await holding.save();
        return res.json(holding);
      }
    } else {
      return res.status(400).json({ error: "Invalid mode" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}!`);
  mongoose.connect(uri).then(() => {
    console.log("MongoDB connected!");
  }).catch((err) => {
    console.error("MongoDB connection error:", err);
  });
});