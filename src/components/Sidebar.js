import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';

const Sidebar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setMenuOpen(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    // Handle profile logic here
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/listings" className="nav-link">
            Listings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/track-record" className="nav-link">
            Track Record
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/HelpCenter2" className="nav-link">
            Help Center
          </Link>
        </li>
      </ul>
      <div className={`auth-menu ${menuOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu} className="menu-icon">
          {/* Replace with your preferred menu icon */}
          ☰
        </button>
        <ul className="menu-dropdown">
          <li className="menu-item" onClick={handleSignInClick}>
            Sign In
          </li>
          <li className="menu-item" onClick={handleSignUpClick}>
            Sign Up
          </li>
          <li className="menu-item" onClick={handleProfileClick}>
            Profile
          </li>
        </ul>
      </div>
      {showSignIn && <SignInForm onClose={closeForms} />}
      {showSignUp && <SignUpForm onClose={closeForms} />}
    </div>
  );
};

export default Sidebar;
