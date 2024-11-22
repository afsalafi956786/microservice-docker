
const express = require('express');
const Customer = require('../models/customerModel'); // Customer model to interact with the database
const router = express.Router();


// Route to get customer by ID
router.get('/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer); // Send customer data back
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer data', error: error.message });
    }
});