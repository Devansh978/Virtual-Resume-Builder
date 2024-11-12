// src/components/PDFDownload.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const PDFDownload = () => {
  const location = useLocation();
  const formData = location.state || {};
  const ref = useRef();

  return (
    <div className="pdf-container" ref={ref}>
      <h2>{formData.name}</h2>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <h3>Skills</h3>
      <p>{formData.skills}</p>
      <h3>Experience</h3>
      <p>{formData.experience}</p>
      <h3>Education</h3>
      <p>{formData.education}</p>

      <ReactToPdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf}>Download PDF</button>
        )}
      </ReactToPdf>
    </div>
  );
};

export default PDFDownload;
