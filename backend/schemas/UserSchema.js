const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// passport-local-mongoose adds username/password fields and authentication methods
UserSchema.plugin(passportLocalMongoose);

module.exports = { UserSchema };
