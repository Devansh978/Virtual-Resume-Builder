const Resume = require('../models/Resume');

exports.createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.json(savedResume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
