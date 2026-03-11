const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  longDescription: {
    type: String,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    enum: ['web', 'cybersecurity', 'ai', 'other'],
    default: 'other'
  },
  githubUrl: {
    type: String,
    trim: true
  },
  liveUrl: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'planned'],
    default: 'completed'
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

projectSchema.index({ category: 1, order: 1 });

module.exports = mongoose.model('Project', projectSchema);
