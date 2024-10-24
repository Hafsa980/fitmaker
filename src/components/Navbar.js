import React from 'react';
import './Navbar.css';
import './HeroSection.js'
import './Services.js'
import Logo from '../images/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="FitMaker Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="./HeroSection.js">Home</a></li>
        <li><a href="./Services.js">Programs</a></li>
        <li><a href="#">Coaching</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
