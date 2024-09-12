// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';

const Sidebar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        {/* Your existing navigation items */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/PartsAccessories" className="nav-link">
            Parts & Accessories
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
      <div className="auth-links">
        <button onClick={handleSignInClick} className="nav-link">
          Sign In
        </button>
        <button onClick={handleSignUpClick} className="nav-link">
          Sign Up
        </button>
      </div>
      {showSignIn && <SignInForm onClose={closeForms} />}
      {showSignUp && <SignUpForm onClose={closeForms} />}
    </div>
  );
};

export default Sidebar;
