import React, { useState } from "react";
import "./Signup.css";

// Dynamic URLs: Uses Render environment variables if live, falls back to localhost for local testing
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/login" : "/signup";
      const payload = isLogin
        ? { username: formData.username, password: formData.password }
        : {
            username: formData.username,
            password: formData.password,
            email: formData.email,
          };

      console.log("Sending request to:", `${BACKEND_URL}${endpoint}`);
      console.log("Payload:", payload);

      const response = await fetch(`${BACKEND_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        setError(data.error || "An error occurred");
        setLoading(false);
        return;
      }

      // Success - store user info and redirect to dashboard
      localStorage.setItem("user", JSON.stringify(data.user));
      setFormData({ username: "", password: "", email: "" });
      
      // Dynamic Redirect using DASHBOARD_URL
      setTimeout(() => {
        window.location.href = DASHBOARD_URL;
      }, 500);
    } catch (err) {
      console.error("Error details:", err);
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to server. Please ensure the backend is running."
          : err.message || "An error occurred"
      );
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2 className="signup-title">Zerodha</h2>
          <p className="signup-subtitle">
            {isLogin ? "Welcome back to trading" : "Join India's biggest stock broker"}
          </p>
        </div>

        <div className="tabs">
          <button
            className={`tab-button ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              setFormData({ username: "", password: "", email: "" });
              setError("");
            }}
          >
            Login
          </button>
          <button
            className={`tab-button ${!isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(false);
              setFormData({ username: "", password: "", email: "" });
              setError("");
            }}
          >
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                {isLogin ? "Logging in..." : "Signing up..."}
              </>
            ) : isLogin ? (
              "Login"
            ) : (
              "Signup"
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p className="text-muted">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="toggle-btn"
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({ username: "", password: "", email: "" });
                setError("");
              }}
              disabled={loading}
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;