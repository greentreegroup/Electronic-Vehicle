import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Dealer from './Dealer.js';
import Cookies from 'js-cookie';
import Cart from "./CarSearchCartCompts/ShoppingCartPage";
import ResearchPage from './ResearchPage.js';
import ShoppingCartHeader from "./CarSearchCartCompts/ShoppingCartHeader";

const Sidebar = ({ setSearchQuery, parts = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showDealer, setShowDealer] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredPreviewParts, setFilteredPreviewParts] = useState([]);

  const location = useLocation(); // To detect the current page route

  // Handle search input change and activate search preview
  const handleSearchChange = (e) => {
    const query = e.target.value || '';
    setSearchQuery(query); // Update the query for the entire app
    setIsSearchActive(query.length > 0);

    // Filter parts for the search preview
    if (query) {
      const filtered = parts.filter((part) =>
        part.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPreviewParts(filtered);
    } else {
      setFilteredPreviewParts([]);
    }
  };

  const closeSearchPreview = () => setIsSearchActive(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Proper toggle logic
    setShowBrandDropdown(false); // Close other dropdowns
  };

  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  const toggleBrandDropdown = () => {
    setShowBrandDropdown((prev) => !prev); // Proper toggle logic
    setShowDropdown(false); // Close other dropdowns
  };

  const handleAuthClick = (authType) => {
    setShowSignIn(authType === 'signIn');
    setShowSignUp(authType === 'signUp');
    setShowDealer(authType === 'dealer');
    setShowDropdown(false);
  };

  const handleUserAccountClick = () => {
    const userId = Cookies.get('id');
    userId ? window.location.replace(`/userProfile/${userId}`) : handleAuthClick('signIn');
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowDealer(false);
  };

  // Avoid showing the search preview on the PartsAccessories page
  const isOnPartsPage = location.pathname === '/PartsAccessories';

  return (
    <div className="full-sidebar">
      <div className="sidebar">
        <div className="logo-div">
          <p>EVrabbit</p>
        </div>

        {/* Search Bar with Preview */}
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search for a product..."
            onChange={handleSearchChange}
            className="search-bar"
          />
          {isSearchActive && !isOnPartsPage && (
            <div className="search-preview">
              {filteredPreviewParts.length > 0 ? (
                filteredPreviewParts.slice(0, 5).map((part) => (
                  <Link
                    key={part.ID}
                    to={`/PartsAccessories/${part.ID}`}
                    className="search-preview-item"
                    onClick={closeSearchPreview}
                  >
                    {part.name}
                  </Link>
                ))
              ) : (
                <p className="no-results">No results found</p>
              )}
            </div>
          )}
        </div>

        <div className="auth-links">
          <div className="account-dropdown">
            <button onClick={toggleDropdown} className="nav-link account-button">
              Account
            </button>
            {showDropdown && (
              <ul className="sidebar-dropdown-menu">
                <li>
                  <button onClick={() => handleAuthClick('signIn')} className="nav-link">
                    Sign In
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAuthClick('signUp')} className="nav-link">
                    Sign Up
                  </button>
                </li>
                <li>
                  <button onClick={handleUserAccountClick} className="nav-link">
                    User Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAuthClick('dealer')} className="nav-link">
                    Dealer
                  </button>
                </li>
                <li>
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/Cart" className="nav-link">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {showSignIn && <SignInForm onClose={closeForms} />}
        {showSignUp && <SignUpForm onClose={closeForms} />}
        {showDealer && <Dealer onClose={closeForms} />}
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
            <Link to="/CarSearch" className="nav-link">
              Electric Cars
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

        {/* Drop down menu for showing popular brands */}
        <div className="auth-links">
          <div className="brand-dropdown">
            <button onClick={toggleBrandDropdown} className="nav-link brand-button">
              Brands
            </button>
            {showBrandDropdown && (
              <ul className="sidebar-dropdown-menu">
                <li>
                  <button id="button-in-progress" className="nav-link">
                    Aion
                  </button>
                </li>
                <li>
                  <button id="button-in-progress" className="nav-link">
                    Roewe
                  </button>
                </li>
                <li>
                  <button id="button-in-progress" className="nav-link">
                    BYD
                  </button>
                </li>
                <li>
                  <button id="button-in-progress" className="nav-link">
                    MG
                  </button>
                </li>
                <li>
                  <button id="button-in-progress" className="nav-link">
                    IM Motor
                  </button>
                </li>
                <li>
                  <Link to="/CarSearch" className="nav-link">
                    All Brands
                  </Link>
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