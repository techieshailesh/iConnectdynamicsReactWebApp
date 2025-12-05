import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>iConnect Dynamics</h3>
          <p>Empowering businesses with innovative IT solutions.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/it-services">IT Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/connect">Connect</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: admin@iconnectdynamics.com</p>
          <p>Phone: +1 (970) 469-0840</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} iConnect Dynamics. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
