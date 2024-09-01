const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Define the user schema with fields and validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes whitespace from both ends of a string
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // Converts the email to lowercase
    unique: true, // Ensures no two users have the same email
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0, // Default age is 0 if not provided
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7, // Password must be at least 7 characters long
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password must be stronger");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// This method runs automatically when converting a user document to JSON, e.g., when sending a user object as a response
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  // Remove sensitive data before returning the user object
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// Generate an authentication token for the user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  // Add the token to the user's tokens array and save the user
  user.tokens = user.tokens.concat({ token }); // Add the new token || ({token : token})
  await user.save();

  return token;
};

// Find a user by their email and password for login purposes
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email }); // Find the user by email

  if (!user) {
    throw new Error("Unable to login"); // No user found with this email
  }

  const isMatch = await bcrypt.compare(password, user.password); // Compare the provided password with the stored hashed password

  if (!isMatch) {
    throw new Error("Unable to login"); // Password doesn't match
  }

  return user;
};

// Middleware to hash the password before saving the user document if the password field is modified
userSchema.pre("save", async function (next) {
  // 'this' refers to the current document being saved
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8); // Hash the password with a salt factor of 8
  }

  next(); // Continue with the save operation
});

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
