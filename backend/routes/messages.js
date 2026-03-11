const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Note: In production, add authentication middleware here

// GET /api/messages - Get all messages (admin)
router.get('/', messageController.getAllMessages);

// GET /api/messages/:id - Get single message
router.get('/:id', messageController.getMessage);

// PATCH /api/messages/:id/read - Mark message as read
router.patch('/:id/read', messageController.markAsRead);

// DELETE /api/messages/:id - Delete message
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
