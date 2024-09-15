// Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className='inline'><a href="/"><img src="/img/rabbit.JPG" alt="EVrabbit logo"></img></a></p>
        <p> EVrabbit &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;