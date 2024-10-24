import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css'; // Import the CSS Module
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Dealer from './Dealer.js';
import Cookies from 'js-cookie';
import Cart from "./CarSearchCartCompts/ShoppingCartPage";
import ResearchPage from './ResearchPage.js';
import ShoppingCartHeader from "./CarSearchCartCompts/ShoppingCartHeader";
import { ShoppingCart, User } from 'lucide-react';

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

  const isOnPartsPage = location.pathname === '/PartsAccessories';
  
  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar']}>
        {/* Logo Section */}
        <div className={styles['logo-section']}>
          <p>EVrabbit</p>
        </div>
  
        {/* Search Bar with Preview (Hidden on Mobile) */}
        <div className={styles['search-section']}>
          <input
            type="text"
            placeholder="🔍 I'm looking for..."
            onChange={handleSearchChange}
            className={styles['search-bar']}
          />
          <button className={styles['search-button']}>Search</button>
          {isSearchActive && (
            <div className={styles['search-preview']}>
              {filteredPreviewParts.length > 0 ? (
                <ul>
                  {filteredPreviewParts.slice(0, 5).map((part) => (
                    <li key={part.id} className={styles['search-preview-item']}>
                      <Link to={`/parts/${part.id}`} onClick={closeSearchPreview}>
                        {part.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No matching parts found</p>
              )}
            </div>
          )}
        </div>
  
        {/* Links for Account, Cart, and Hamburger */}
        <div className={styles['auth-cart-section']}>
          <div className={styles['account-dropdown']}>
            <button onClick={toggleDropdown} className={styles['nav-link']}>
              <User size={30} strokeWidth={2} />
            </button>
            {showDropdown && (
              <ul className={styles['sidebar-dropdown-menu']}>
                <li>
                  <button onClick={() => handleAuthClick('signIn')} className={styles['nav-link']}>
                    Sign In
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAuthClick('signUp')} className={styles['nav-link']}>
                    Sign Up
                  </button>
                </li>
                <li>
                  <button onClick={handleUserAccountClick} className={styles['nav-link']}>
                    User Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAuthClick('dealer')} className={styles['nav-link']}>
                    Dealer Login
                  </button>
                </li>
                <li>
                  <Link to="/settings" className={styles['nav-link']}>
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
          <div className={styles['cart-section']}>
            <ShoppingCart size={32} strokeWidth={2} />
          </div>
          {/* Hamburger Icon for Mobile Menu */}
          <button className={styles['hamburger']} onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
  
      {/* Secondary Navbar for large screens */}
      <div className={styles['secondary-navbar']}>
        <ul className={styles['secondary-nav-links']}>
          <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']}>Home</Link></li>
          <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']}>Cars</Link></li>
          <li className={styles['nav-item']}><Link to="/PartsAccessories" className={styles['nav-link']}>Parts</Link></li>
          <li className={styles['nav-item']}><Link to="/HelpCenter2" className={styles['nav-link']}>Help Center</Link></li>
          {/* <li className={styles['nav-item']}><Link to="/Research" className={styles['nav-link']}>Research & Insights</Link></li> */}
          <li className={styles['nav-item']}><Link to="/AboutUs" className={styles['nav-link']}>About Us</Link></li>
          <li className={styles['nav-item']}><Link to="/Contact" className={styles['nav-link']}>Contact Us</Link></li>
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
  
    {/* Mobile Menu */}
<ul className={`${styles['sidebar-nav']} ${showMobileMenu ? styles['mobile-show'] : styles['mobile-hide']}`}>
  <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Home</Link></li>
  <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Cars</Link></li>
  <li className={styles['nav-item']}><Link to="/PartsAccessories" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Parts</Link></li>
  <li className={styles['nav-item']}><Link to="/HelpCenter2" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Help Center</Link></li>
  {/* <li className={styles['nav-item']}><Link to="/Research" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Research & Insights</Link></li> */}
  <li className={styles['nav-item']}><Link to="/AboutUs" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>About Us</Link></li>
  <li className={styles['nav-item']}><Link to="/Contact" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Contact Us</Link></li>

  {/* Add Search Bar inside Mobile Menu */}
  <li className={styles['mobile-search-section']}>
    <input
      type="text"
      placeholder="🔍 I'm looking for..."
      onChange={handleSearchChange}
      className={styles['mobile-search-bar']}
    />
    <button className={styles['mobile-search-button']}>Search</button>

    {/* Mobile Search Preview */}
    {isSearchActive && (
      <div className={styles['mobile-search-preview']}>
        {filteredPreviewParts.length > 0 ? (
          <ul>
            {filteredPreviewParts.slice(0, 5).map((part) => (
              <li key={part.id} className={styles['mobile-search-preview-item']}>
                <Link to={`/parts/${part.id}`} onClick={() => setShowMobileMenu(false)}>
                  {part.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching parts found</p>
        )}
      </div>
  
    {/* Mobile Menu */}
<ul className={`${styles['sidebar-nav']} ${showMobileMenu ? styles['mobile-show'] : styles['mobile-hide']}`}>
  <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Home</Link></li>
  <li className={styles['nav-item']}><Link to="/" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Cars</Link></li>
  <li className={styles['nav-item']}><Link to="/PartsAccessories" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Parts</Link></li>
  <li className={styles['nav-item']}><Link to="/HelpCenter2" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Help Center</Link></li>
  {/* Removed Research temporarily */}
  <li className={styles['nav-item']}><Link to="/AboutUs" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>About Us</Link></li>
  <li className={styles['nav-item']}><Link to="/Contact" className={styles['nav-link']} onClick={() => setShowMobileMenu(false)}>Contact Us</Link></li>

  {/* Add Search Bar inside Mobile Menu */}
  <li className={styles['mobile-search-section']}>
    <input
      type="text"
      placeholder="🔍 I'm looking for..."
      onChange={handleSearchChange}
      className={styles['mobile-search-bar']}
    />
    <button className={styles['mobile-search-button']}>Search</button>

    {/* Mobile Search Preview */}
    {isSearchActive && (
      <div className={styles['mobile-search-preview']}>
        {filteredPreviewParts.length > 0 ? (
          <ul>
            {filteredPreviewParts.slice(0, 5).map((part) => (
              <li key={part.id} className={styles['mobile-search-preview-item']}>
                <Link to={`/parts/${part.id}`} onClick={() => setShowMobileMenu(false)}>
                  {part.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching parts found</p>
        )}
      </div>
    )}
  </li>
</ul>

{showSignIn && <SignInForm onClose={closeForms} />}
{showSignUp && <SignUpForm onClose={closeForms} />}
{showDealer && <Dealer onClose={closeForms} />}
    </div>
  );
};

export default Sidebar;