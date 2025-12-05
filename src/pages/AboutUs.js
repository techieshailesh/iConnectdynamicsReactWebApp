import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Discover our story and mission</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p style={{ textAlign: 'justify' }}>
            iConnect Dynamics was founded with a vision to deliver innovative IT solutions
            that transform businesses. By uniting deep expertise in AWS/Azure cloud technologies with advanced Agentic AI engineering, we cultivate an environment where people, technology, and creativity converge to build transformative digital experiences. We are committed to pushing boundaries, embracing new possibilities, and delivering intelligent solutions that shape the future of enterprise technology.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p style={{ textAlign: 'justify' }}>
            At Iconnect Dynamics, our mission is to empower businesses through cutting-edge technology, intelligent cloud solutions, and exceptional service—enabling them to innovate, grow, and succeed in the digital era. Our mission is to empower organizations with advanced cloud and AI-driven solutions that fuel innovation, accelerate growth, and ensure success in a rapidly evolving digital world.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Innovation:</strong> We continuously push the boundaries of technology</li>
            <li><strong>Excellence:</strong> We deliver high-quality solutions every time</li>
            <li><strong>Integrity:</strong> We build trust through transparent partnerships</li>
            <li><strong>Collaboration:</strong> We work closely with our clients to achieve their goals</li>
            <li><strong>Sustainability:</strong> We create solutions that benefit both business and society</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Why Partner With Us</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Expertise</h3>
              <p>Industry-leading professionals with deep technical knowledge</p>
            </div>
            <div className="reason-card">
              <h3>Proven Track Record</h3>
              <p>Successfully delivered projects across various industries</p>
            </div>
            <div className="reason-card">
              <h3>Client-Centric</h3>
              <p>Your success is our success, and we're committed to it</p>
            </div>
            <div className="reason-card">
              <h3>Continuous Support</h3>
              <p>Ongoing maintenance and support to keep your systems running smoothly</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
