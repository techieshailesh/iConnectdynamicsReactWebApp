import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Logo />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/it-services" className="nav-link">
              IT Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/insights" className="nav-link">
              Insights
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/connect" className="nav-link">
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
