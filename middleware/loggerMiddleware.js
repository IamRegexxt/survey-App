// middleware/loggerMiddleware.js
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the stack
  };
  
  module.exports = loggerMiddleware;