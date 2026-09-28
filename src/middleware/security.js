const helmet = require("helmet");

const securityMiddleware = helmet();

module.exports = securityMiddleware;
const securityHeaders = (req, res, next) => {
    res.set({
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
    });

    next();
};

module.exports = securityHeaders;