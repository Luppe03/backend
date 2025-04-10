// routes/messageRoutes.js
const express = require('express');
const { sendMessage } = require('../controllers/messageController');

const router = express.Router();

// Skicka meddelande
router.post('/', sendMessage);

module.exports = router;
