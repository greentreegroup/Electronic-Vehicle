// Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import SignUpForm from './SignUpForm.js';

const Footer = () => {

  //Hooks for the sign up button and searching
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  //Shows the sign up form
  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowDropdown(false);
  };

  //Closes the forms
  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="joinEVrabbit">
          <div className="joinHeader">
            <h1>Join <span className="important">EVrabbit</span></h1>
            <h2>Purchase products, get pricing updates and more!</h2>
          </div>
          <div className="joinSignUp">
            <button onClick={handleSignUpClick} className="signInButton">
              Sign Up
            </button>
            {showSignUp && <SignUpForm onClose={closeForms} />}
          </div>
        </div>
        <hr></hr>
        <div className="footerLinks">
          <div className="listLinks">
            <h3>Useful Links:</h3>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/CarSearch">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/PartsAccessories">
                  Parts
                </Link>
              </li>
              <li>
                <Link to="/HelpCenter2">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/AboutUs">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* All of these links can be added once the cars pages are developed. They are currently unlickable. Look for 
          "link-in-progress" class in CSS to make them clickable again */}
          <div className="listLinks">
            <h3>By Fuel Type:</h3>
            <ul>
              <li>
                <Link to="/CarSearch" state={{ fuelType: "Electric" }}>
                  Electric
                </Link>
              </li>
              <li>
                <Link to="/CarSearch" state={{ fuelType: "Hybrid" }}>
                  Hybrid
                </Link>
              </li>
            </ul>
          </div>
          <div className="listLinks">
            <h3>By Model:</h3>
            <ul>
              <li>
                <Link to="/CarSearch" state={{ model: "Hatchback" }}>
                  Hatchback
                </Link>
              </li>
              <li>
                <Link to="/CarSearch" state={{ model: "Sedan" }}>
                  Sedan
                </Link>
              </li>
              <li>
                <Link to="/CarSearch" state={{ model: "SUV" }}>
                  SUV
                </Link>
              </li>
              <li>
                <Link to="/CarSearch" state={{ model: "Mini" }}>
                  Mini
                </Link>
              </li>
              <li>
                <Link to="/CarSearch" state={{ model: "MPV" }}>
                  MPV
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactLinks">
            <h3>Contact Info:</h3>
            <ul>
              <li>Email: <a href="mailto:support@evrabbit.com">support@evrabbit.com</a></li>
              <li>Phone: +1 (779) 707-1757</li>
              <li>Address: 4753 N Broadway, Chicago, Illinois</li>
            </ul>
            {/*Can put in additional social media, etc. for contacting*/}
          </div>
        </div>
        <hr></hr>
        <div className="important_info">
          <div className="copyright">
            <p className='inline'><a href="/"><img src="/img/rabbitBlackBg.png" alt="EVrabbit logo"></img></a></p>
            <p> EVrabbit &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="important_links">
            {/* Terms and conditions and policy can be added here once they are created*/}
            <a className="link-in-progress" href="#">Terms and Conditions</a>
            <span className="bigDot">.</span>
            <a className="link-in-progress" href="#">Privacy Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;