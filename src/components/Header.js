import React from 'react';
import './Header.css';
import resume from '../assets/resume.pdf'


const Header = () => {

  const openResume = () => {
    const pdfUrl = resume;
    window.open(pdfUrl, '_blank');
  };
  
  return (
    <header className="header" id="header">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Larry Nalawaku</h1>
        <h2>IT Support, Database Support, Dev</h2>
        <div className="buttons">
          <button onClick={openResume}>Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
