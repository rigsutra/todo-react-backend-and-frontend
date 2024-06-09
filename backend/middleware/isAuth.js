const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    // Get token from Authorization header or cookies
    const authHeader = req.headers.authorization;
    const token = (authHeader && authHeader.split(" ")[1]) || req.cookies.token;

    // If no token is found, return 401 Unauthorized
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    try {
      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next(); // Proceed to the next middleware or route handler
    } catch (err) {
      // If token verification fails, return 401 Unauthorized
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
  } catch (err) {
    // If there is an error in the middleware, return 401 Unauthorized
    return res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
