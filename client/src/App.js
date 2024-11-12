// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import ResumeTemplate from './components/ResumeTemplate';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ResumeForm />} />
          <Route path="/preview" element={<ResumePreview />} />
          <Route path="/template" element={<ResumeTemplate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
