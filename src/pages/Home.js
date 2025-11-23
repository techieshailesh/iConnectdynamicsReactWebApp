import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to iConnect Dynamics</h1>
          <p>Transforming Business Through Technology Innovation</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Team</h3>
            <p>Highly skilled professionals with years of experience in IT solutions.</p>
          </div>
          <div className="feature-card">
            <h3>Innovation</h3>
            <p>Cutting-edge technology and modern development practices.</p>
          </div>
          <div className="feature-card">
            <h3>Support</h3>
            <p>24/7 customer support to ensure your success.</p>
          </div>
          <div className="feature-card">
            <h3>Reliability</h3>
            <p>Trusted by businesses worldwide for dependable solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
