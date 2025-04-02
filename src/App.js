import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import Events from './Components/Events';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/events">Upcoming Events</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}
