

const express = require('express');
const jwtMiddleware = require('./routes/jwt'); // JWT middleware
const bookRoutes = require('./routes/bookRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = 3000; // API Gateway port

app.use(express.json()); // Middleware to parse JSON requests

// Use the routes for each service
app.use('/api/book', bookRoutes); // All routes related to books
app.use('/api/customer', customerRoutes); // All routes related to customers
app.use('/api/order', orderRoutes); // All routes related to orders

// Start the API Gateway
app.listen(port, () => {
    console.log(`API Gateway running at http://localhost:${port}`);
});
