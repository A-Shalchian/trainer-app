const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

// Register a new user
router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "Email is already in use!" });
    }

    const user = new User({ name, email, password });
    await user.save();
    const token = await user.generateAuthToken(); // Ensure generateAuthToken method exists on your User model
    res.status(201).send({ user, token });
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(400).send(e);
  }
});

// User login
router.post("/users/login", async (req, res) => {
  try {
    // Find user by credentials (email and password)
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    // Generate new authentication token
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(400).send({ error: "Login failed!" });
  }
});

// User logout (from current session)
router.post("/users/logout", auth, async (req, res) => {
  try {
    // Filter out the token being used in the current session
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).send({ error: "Logout failed!" });
  }
});

// User logout from all sessions
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    // Clear all tokens, effectively logging out from all sessions
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).send({ error: "Logout from all sessions failed!" });
  }
});

// Get the logged-in user's profile
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// Update the logged-in user's profile
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];

  // Validate if the requested updates are allowed
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    // Apply the updates to the user object
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });

    // Save the updated user object
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send();
  }
});

// Delete the logged-in user's profile
router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.deleteOne();
    res
      .status(200)
      .send({ message: "User deleted successfully", user: req.user });
  } catch (error) {
    res.status(500).send({ error: "Failed to delete user" });
  }
});

module.exports = router;
