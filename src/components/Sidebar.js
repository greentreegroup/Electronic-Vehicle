import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="sidebar">
      {/* Hamburger icon visible on mobile */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Sidebar navigation, toggle visibility on mobile */}
      <ul className={`sidebar-nav ${showMobileMenu ? 'mobile-show' : 'mobile-hide'}`}>
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

      <div className="auth-links">
        <div className="account-dropdown">
          <button onClick={toggleDropdown} className="nav-link account-button">
            Account
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                {/* Link to Sign In page */}
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
              <li>
                {/* Link to Sign Up page */}
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  User Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
