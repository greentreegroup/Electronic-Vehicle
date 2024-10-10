import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // For hamburger menu
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // For search bar

  /* Dropdown for account menu */
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowBrandDropdown(false);
  };

  /* Dropdown for brands menu */
  const toggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
    setShowDropdown(false);
  }

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

  const handleUserAccountClick = () => {
    Cookies.get('id') == undefined ? setShowSignIn(true) : window.location.replace('/userProfile/'.concat(Cookies.get('id'))); 
    setShowSignUp(false);
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
    <div className="full-sidebar">
      <div className="sidebar">
        <div className="logo-div">
          <p>EVrabbit </p>
        </div>
        <div className="search-container">
        <input
            type="text"
            placeholder="🔍 Search for a product..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        </div>
        <div className="auth-links">
          <div className="account-dropdown">
            <button onClick={toggleDropdown} className="nav-link account-button">
              Account
            </button>
            {showDropdown && (
              <ul className="sidebar-dropdown-menu">
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
                  <button onClick={handleUserAccountClick} className="nav-link">
                    User Profile
                  </button>
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
          <li className="nav-item">
            <Link to="/Timeline" className="nav-link">
              Timeline
            </Link>
          </li>
        </ul>

        {/* Drop down menu for showing popular brands */}
        <div className="auth-links">
          <div className="brand-dropdown">
            <button onClick={toggleBrandDropdown} className="nav-link brand-button">
              Brands
            </button>
            {showBrandDropdown && (
              <ul className="sidebar-dropdown-menu">
                <li>
                  <button className="nav-link">
                    Aion
                  </button>
                </li>
                <li>
                  <button className="nav-link">
                    Baojun
                  </button>
                </li>
                <li>
                  <button className="nav-link">
                    BYD
                  </button>
                </li>
                <li>
                  <button className="nav-link">
                    Tesla
                  </button>
                </li>
                <li>
                  <button className="nav-link">
                    Wuling
                  </button>
                </li>
                <li>
                  <button className="nav-link">
                    All brands
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
