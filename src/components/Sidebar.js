import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Dealer from './Dealer.js';
import Cookies from 'js-cookie';
import { ShoppingCart, User } from 'lucide-react';

const Sidebar = ({ setSearchQuery, parts = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showDealer, setShowDealer] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredPreviewParts, setFilteredPreviewParts] = useState([]);
  
  const location = useLocation();

  const handleSearchChange = (e) => {
    const query = e.target.value || '';
    setSearchQuery(query);
    setIsSearchActive(query.length > 0);

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
  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  const handleAuthClick = (authType) => {
    setShowSignIn(authType === 'signIn');
    setShowSignUp(authType === 'signUp');
    setShowDealer(authType === 'dealer');
    setShowDropdown(false);
  };

  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar']}>
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
                      <Link to={`/PartsAccessories/${part.id}`} onClick={closeSearchPreview}>
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

        <div className={styles['nav-links']}>
          <Link to="/" className={styles['nav-link']}>Home</Link>
          <Link to="/CarSearch" className={styles['nav-link']}>Cars</Link>
          <Link to="/PartsAccessories" className={styles['nav-link']}>Parts</Link>
          <Link to="/HelpCenter2" className={styles['nav-link']}>Help Center</Link>
          <Link to="/AboutUs" className={styles['nav-link']}>About Us</Link>
          <Link to="/Contact" className={styles['nav-link']}>Contact Us</Link>
        </div>

        <div className={styles['auth-cart-section']}>
          <button onClick={toggleDropdown} className={styles['nav-link']}>
            <User size={30} strokeWidth={2} />
          </button>
          {showDropdown && (
  <ul className={`${styles['sidebar-dropdown-menu']} ${showDropdown ? styles.active : ''}`}>
    <li><button onClick={() => handleAuthClick('signIn')} className={styles['nav-link']}>Sign In</button></li>
    <li><button onClick={() => handleAuthClick('signUp')} className={styles['nav-link']}>Sign Up</button></li>
    <li><button onClick={() => handleAuthClick('dealer')} className={styles['nav-link']}>Dealer Login</button></li>
    <li><Link to="/settings" className={styles['nav-link']}>Settings</Link></li>
    <li><Link to="/Cart" className={styles['nav-link']}>Shopping Cart</Link></li>
  </ul>
)}
          <Link to="/Cart" className={styles['nav-link']}>
            <ShoppingCart size={32} strokeWidth={2} />
          </Link>
          <button className={styles['hamburger']} onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={`${styles['sidebar-nav']} ${styles['mobile-show']}`}>
          <Link to="/" className={styles['nav-item']} onClick={toggleMobileMenu}>Home</Link>
          <Link to="/CarSearch" className={styles['nav-item']} onClick={toggleMobileMenu}>Cars</Link>
          <Link to="/PartsAccessories" className={styles['nav-item']} onClick={toggleMobileMenu}>Parts</Link>
          <Link to="/HelpCenter2" className={styles['nav-item']} onClick={toggleMobileMenu}>Help Center</Link>
          <Link to="/AboutUs" className={styles['nav-item']} onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/Contact" className={styles['nav-item']} onClick={toggleMobileMenu}>Contact Us</Link>
        </div>
      )}

      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
      {showDealer && <Dealer onClose={() => setShowDealer(false)} />}
    </div>
  );
};

export default Sidebar;