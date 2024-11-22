const express = require('express');
const Book = require('../models/bookModel'); // Book model to interact with the book database
const router = express.Router();

// Route to get books for a specific customer
router.get('/customer/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        const books = await Book.find({ customerId }); // Fetch books for the given customer
        if (!books) {
            return res.status(404).json({ message: 'No books found for this customer' });
        }
        res.json(books); // Send books data back
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
});

module.exports = router;