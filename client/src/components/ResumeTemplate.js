// src/components/ResumeTemplate.js
import React from 'react';
import './ResumePreview.css';

const ResumeTemplate = ({ resumeData }) => {
  const { name, email, phone, skills = '', experience, education, summary } = resumeData;

  // Convert skills to an array and remove empty spaces
  const skillsArray = typeof skills === 'string' ? skills.split(',').map(skill => skill.trim()) : [];

  return (
    <div className="resume-preview">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>

      {summary && (
        <div className="section">
          <h3>Professional Summary</h3>
          <p>{summary}</p>
        </div>
      )}

      {skillsArray.length > 0 && (
        <div className="section">
          <h3>Skills</h3>
          <ul className="skills">
            {skillsArray.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </ul>
        </div>
      )}

      {experience && (
        <div className="section">
          <h3>Work Experience</h3>
          <p>{experience}</p>
        </div>
      )}

      {education && (
        <div className="section">
          <h3>Education</h3>
          <p>{education}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeTemplate;
