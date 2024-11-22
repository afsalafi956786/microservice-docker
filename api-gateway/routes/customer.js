const express = require('express');
const axios = require('axios');
const router = express.Router();

// Example route to get customer by ID
router.get('/:customerId', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:8002/api/customer/${req.params.customerId}`);
        res.json(response.data); // Forward response from Customer service
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer data', error: error.message });
    }
});

module.exports = router;