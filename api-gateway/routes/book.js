const express = require('express');
const axios = require('axios');
const router = express.Router();

// Example route to get book by ID
router.get('/:bookId', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:8001/api/book/${req.params.bookId}`);
        res.json(response.data); // Forward response from Book service
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book data', error: error.message });
    }
});

// Example route to get all books for a customer (if such an endpoint exists in your Book Service)
router.get('/customer/:customerId', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:8001/api/book/customer/${req.params.customerId}`);
        res.json(response.data); // Forward books response from Book service
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books for customer', error: error.message });
    }
});

module.exports = router;