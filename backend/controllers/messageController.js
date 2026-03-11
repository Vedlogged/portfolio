const Contact = require('../models/Contact');

// Get all messages
exports.getAllMessages = async (req, res) => {
  try {
    const { read, page = 1, limit = 20 } = req.query;
    const filter = read !== undefined ? { read: read === 'true' } : {};
    
    const messages = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    
    const total = await Contact.countDocuments(filter);
    
    res.json({
      success: true,
      count: messages.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: messages
    });
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

// Get single message
exports.getMessage = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Get message error:', error);
    res.status(500).json({ error: 'Failed to fetch message' });
  }
};

// Mark message as read
exports.markAsRead = async (req, res) => {
  try {
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Mark as read error:', error);
    res.status(500).json({ error: 'Failed to update message' });
  }
};

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    console.error('Delete message error:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};
