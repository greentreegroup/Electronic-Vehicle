// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>EVrabbit &copy; {new Date().getFullYear()}</p>
        <img className= 'logo' src="/img/rabbit.jpg" alt="EVrabbit logo"></img>
      </div>
    </footer>
  );
};

export default Footer;