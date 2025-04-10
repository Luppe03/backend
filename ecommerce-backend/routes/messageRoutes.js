const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required: name, email, and message.' });
    }

    res.status(200).json({ message: 'Message received successfully!' });
});

module.exports = router;
