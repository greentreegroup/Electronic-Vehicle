// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>2300 Frontier. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;