import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/mobile.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
    </React.StrictMode>
);