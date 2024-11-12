const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  education: Array,
  experience: Array,
  skills: Array,
  projects: Array,
  template: String,
});

module.exports = mongoose.model('Resume', resumeSchema);
