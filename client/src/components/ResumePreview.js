import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResumePreview.css';

const ResumePreview = () => {
  const { state: formData } = useLocation();

  return (
    <div className="resume-preview">
      <h2>{formData.name}</h2>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <h3>Summary</h3>
      <p>{formData.summary}</p>
      <h3>Skills</h3>
      <p>{formData.skills}</p>
      <h3>Experience</h3>
      <p>{formData.experience}</p>
      <h3>Education</h3>
      <p>{formData.education}</p>
    </div>
  );
};

export default ResumePreview;
