const express = require('express');
const axios = require('axios');
const router = express.Router();

// Example route to create a new order
router.post('/', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:8003/api/order', req.body);
        res.json(response.data); // Forward response from Order service
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
});

module.exports = router;