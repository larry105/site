import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Lae & Highlands region office set up</h3>
          <p>Installed desktop software applications. Connected all computers to the LAN.</p>
        </div>
        <div className="project">
          <h3>Backup & Sorting Script</h3>
          <p>Wrote a python script that automates backup, deletes duplicates & suspiscious files. Optimized our file server</p>
        </div>
        <div className="project">
          <h3>Sorting Script</h3>
          <p>Wrote another python script that assists HR sort applicants' CVs</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
