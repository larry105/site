import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <span>ICT Desktop Support & Service Delivery</span>
          <div className="progress"><div className="progress-bar" style={{ width: '100%' }}></div></div>
        </div>
        <div className="skill">
          <span>Customer Service</span>
          <div className="progress"><div className="progress-bar" style={{ width: '60%' }}></div></div>
        </div>
        <div className="skill">
          <span>Collaboration & Influence</span>
          <div className="progress"><div className="progress-bar" style={{ width: '60%' }}></div></div>
        </div>
        <div className="skill">
          <span>Communication</span>
          <div className="progress"><div className="progress-bar" style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span>Innovative & Diverse Thinking</span>
          <div className="progress"><div className="progress-bar" style={{ width: '60%' }}></div></div>
        </div>
        <div className="skill">
          <span>Problem Solving & Critical Thinking</span>
          <div className="progress"><div className="progress-bar" style={{ width: '70%' }}></div></div>
        </div>
        <div className="skill">
          <span>Results Driven</span>
          <div className="progress"><div className="progress-bar" style={{ width: '70%' }}></div></div>
        </div>
        <div className="skill">
          <span>Software Knowledge & Application</span>
          <div className="progress"><div className="progress-bar" style={{ width: '70%' }}></div></div>
        </div>
        <div className="skill">
          <span>Adaptable</span>
          <div className="progress"><div className="progress-bar" style={{ width: '70%' }}></div></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
