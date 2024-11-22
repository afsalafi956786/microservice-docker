const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Use environment variable for security

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from the "Authorization" header

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey); // Verify the JWT
        req.user = decoded; // Attach user info to the request
        next(); // Continue to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = verifyToken;
