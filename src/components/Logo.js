import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <img
        src="/CompanyLogo.png"
        alt="iConnect Dynamics Logo"
        className="logo-image"
      />
      <span className="logo-text">iConnect Dynamics</span>
    </div>
  );
}

export default Logo;
