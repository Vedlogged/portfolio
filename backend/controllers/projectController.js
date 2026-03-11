const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== 'all' ? { category } : {};
    
    const projects = await Project.find(filter)
      .sort({ order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Get featured projects
exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ order: 1 })
      .limit(6);
    
    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Get featured projects error:', error);
    res.status(500).json({ error: 'Failed to fetch featured projects' });
  }
};

// Get single project
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};
