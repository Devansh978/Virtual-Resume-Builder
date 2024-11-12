// src/components/ResumeForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkillSuggestions from './SkillSuggestions';
import ATSOptimizationTips from './ATSOptimizationTips';
import ResumeTemplate from './ResumeTemplate';
import { jsPDF } from 'jspdf';
import './ResumeForm.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    education: '',
    summary: '',
  });

  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Load saved draft from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('resumeDraft');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage as draft
  const saveAsDraft = () => {
    localStorage.setItem('resumeDraft', JSON.stringify(formData));
    alert('Draft saved successfully!');
  };

  // Handle input changes and validations
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Show suggested skills based on input
    if (name === 'skills') {
      setSuggestedSkills(SkillSuggestions(value));
    }
  };

  // Simple validation checks
  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!formData.email.match(emailPattern)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.match(phonePattern)) {
      newErrors.phone = 'Phone number should be 10 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Preview the resume
  const handlePreview = () => {
    if (validateForm()) {
      navigate('/preview', { state: formData });
    } else {
      alert('Please correct the errors before previewing.');
    }
  };

  // Export to PDF functionality
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Summary: ${formData.summary}`, 10, 50);
    doc.text(`Skills: ${formData.skills}`, 10, 60);
    doc.text(`Experience: ${formData.experience}`, 10, 70);
    doc.text(`Education: ${formData.education}`, 10, 80);
    doc.save('resume.pdf');
  };

  return (
    <div className="resume-form-container">
      <form className="resume-form">
        <h2>Create Your ATS-Optimized Resume</h2>

        {/* Personal Information */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}

        {/* Professional Summary */}
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={handleChange}
          className="textarea-field"
        />

        {/* Skills Section */}
        <textarea
          name="skills"
          placeholder="Skills (comma-separated)"
          value={formData.skills}
          onChange={handleChange}
          className="textarea-field"
        />
        {suggestedSkills.length > 0 && (
          <div className="suggestions">
            <h4>Suggested Skills:</h4>
            <ul>
              {suggestedSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Experience Section */}
        <textarea
          name="experience"
          placeholder="Work Experience"
          value={formData.experience}
          onChange={handleChange}
          className="textarea-field"
        />

        {/* Education Section */}
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="textarea-field"
        />

        {/* Action Buttons */}
        <button type="button" className="preview-button" onClick={handlePreview}>
          Preview Full Screen
        </button>
        <button type="button" className="draft-button" onClick={saveAsDraft}>
          Save as Draft
        </button>
        <button type="button" className="export-button" onClick={exportToPDF}>
          Export to PDF
        </button>
      </form>

      {/* ATS Optimization Tips */}
      <ATSOptimizationTips />

      {/* Real-time Resume Template Preview */}
      <div className="live-preview">
        <h3>Live Resume Preview</h3>
        <ResumeTemplate resumeData={formData} />
      </div>
    </div>
  );
};

export default ResumeForm;
