const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Middleware function to authenticate user
const auth = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header, removing the "Bearer " prefix
    const token = req.header("Authorization").replace("Bearer ", "");

    // Verify the token using the JWT_SECRET to get the decoded payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user associated with the token and ensure the token is still valid
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    // If no user is found, throw an error to trigger the catch block
    if (!user) {
      throw new Error();
    }

    // Attach the token and user to the request object for use in route handlers
    req.token = token;
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (e) {
    // If authentication fails, send a 401 Unauthorized response
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
