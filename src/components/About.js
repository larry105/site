import React from 'react';
import './About.css';
import larryImage from './img/larry.png';  

const About = () => {
  return (
    <section className="about-section" id="about">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
          I'm Larry Nalawaku, IT specialist with expertise in Desktop Support, Database Support, Network Support and Development. 
          With over 4 years of experience in the IT field, 
          I take pride in the innovative solutions I've delivered and the impactful results I've achieved.
          </p>
        </div>
        <div className="about-image">
          <img src={larryImage} alt="About Larry Nalawaku" />
        </div>
      </div>
    </section>
  );
};

export default About;
