import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for detecting page changes
import './Sidebar.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // For hamburger menu
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // For search bar

  const dropdownRef = useRef(null); // Create a reference for the dropdown
  const location = useLocation(); // To detect route changes

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Close dropdown on route change
  useEffect(() => {
    setShowDropdown(false); // Close the dropdown when page changes
  }, [location]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowDropdown(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowDropdown(false);
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="sidebar">
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`sidebar-nav ${showMobileMenu ? 'mobile-show' : 'mobile-hide'}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/PartsAccessories" className="nav-link">
            Parts
          </Link>
        </li>
        {/*<li className="nav-item">
          <Link to="/listings" className="nav-link">
            Listings
          </Link>
        </li>
        {/*<li className="nav-item">
          <Link to="/track-record" className="nav-link">
            Track Record
          </Link>
        </li>*/}
        <li className="nav-item">
          <Link to="/HelpCenter2" className="nav-link">
            Help Center
          </Link>

        </li>
       
        <li className="nav-item">
          <Link to="/Research" className="nav-link">
            Research & Insights
          </Link>
          
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact Us
          </Link>
        
          
        </li>
        <li className="nav-item">
          <Link to="/AboutUs" className="nav-link">
            About Us
          </Link>
        
          
        </li>
      </ul>

      {/* Search Bar */}
      <div className="search-container">
      <input
          type="text"
          placeholder="🔍 Search for a product..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      <div className="auth-links" ref={dropdownRef}>
        <div className="account-dropdown">
          <button onClick={toggleDropdown} className="nav-link account-button">
            Account
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <button onClick={handleSignInClick} className="nav-link">
                  Sign In
                </button>
              </li>
              <li>
                <button onClick={handleSignUpClick} className="nav-link">
                  Sign Up
                </button>
              </li>
              <li>
                <Link to={`/userProfile/${Cookies.get('id')}`} className="nav-link">
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

      {showSignIn && <SignInForm onClose={closeForms} />}
      {showSignUp && <SignUpForm onClose={closeForms} />}
    </div>
  );
};

export default Sidebar;
