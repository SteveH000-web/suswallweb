import React from 'react';
import Draftbusters from './Project/Draftbuster';
import { BrowserRouter as  Router, Route, Link, Routes } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="page">
        <h1>Projects</h1>
        <p>This is where you can find information and links to all ongoing projects</p>
        <p>Example:</p>
            <li><Link to="/draftbuster">Draftbusters</Link></li>
            
        <Routes>
            <Route path="/draftbuster" element={<Draftbusters />} />
        </Routes>
    </div> 
  );
};

export default Projects;
