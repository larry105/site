import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
      <h2>Contact</h2>
      <p>Feel free to reach out to me via email or phone.</p>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email:</h3>
          <p>lknalawaku@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone:</h3>
          <p>+675 7939 1391 || +675 8301 7042</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
