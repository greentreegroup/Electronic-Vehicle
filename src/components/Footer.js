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
              <li>
                <Link to="/Timeline">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* All of these links can be added once the cars pages are developed */}
          <div className="listLinks">
            <h3>By Energy:</h3>
            <ul>
              <li><a href="#">Electric</a></li>
              <li><a href="#">Hybrid</a></li>
            </ul>
          </div>
          <div clasNames="listLinks">
            <h3>By Brands:</h3>
            <ul>
              <li><a href="#">Aion</a></li>
              <li><a href="#">Avatr</a></li>
              <li><a href="#">BYD</a></li>
              <li><a href="#">Changan</a></li>
              <li><a href="#">Geely</a></li>
            </ul>
          </div>
          <div className="listLinks">
            <h3>By Model:</h3>
            <ul>
              <li><a href="#">Hatchback</a></li>
              <li><a href="#">Mini</a></li>
              <li><a href="#">MPV</a></li>
              <li><a href="#">Sedan</a></li>
              <li><a href="#">SUV</a></li>
            </ul>
          </div>
          <div className="contactLinks">
            <h3>Contact Us Here:</h3>
            <ul>
              <li>Email: <a href="mailto:support@evrabbit.com">support@evrabbit.com</a></li>
              <li>Phone: +1 (779) 707-1757</li>
              <li>Address: 4753 N Broadway, Chicago, Illinois</li>
              <li>
                <Link to="/Contact">
                  Contact Form
                </Link></li>
            </ul>
            {/*Can put in additional social media, etc. for contacting*/}
          </div>
        </div>
        <hr></hr>
        <div className="important_info">
          <div className="copyright">
            <p className='inline'><a href="/"><img src="/img/rabbit.JPG" alt="EVrabbit logo"></img></a></p>
            <p> EVrabbit &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="important_links">
            {/* Terms and conditions and policy can be added here once they are created*/}
            <a href="#">Terms and Conditions</a>
            <span className="bigDot">.</span>
            <a href="#">Privacy Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;