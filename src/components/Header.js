import React, { useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onSignInClick, onSignUpClick }) => {
  const [make, setMake] = useState('GAC Motor');
  const [energy, setEnergy] = useState('Energy');
  const [model, setModel] = useState('Model');

  const handleSearchClick = () => {
    // Implement search functionality here
    console.log('Search clicked', { make, energy, model });
  };

  return (
    <header className="header">
      <img src="/img/rabbitBlackBg.png" alt="logo" className="header__logo" />
      <h1 className="heading-1">Discover the Car That's Perfect for You</h1>

      <div className="home-search">
        <div className="search-form">
          <select className="search-dropdown" value={make} onChange={(e) => setMake(e.target.value)}>
            <option value="GAC Motor">GAC Motor</option>
            <option value="BYD">BYD</option>
            <option value="Roewe">Roewe</option>
            <option value="MG">MG</option>
          </select>
          <select className="search-dropdown" value={energy} onChange={(e) => setEnergy(e.target.value)}>
            <option value="Energy">Energy</option>
            <option value="Gasoline">Gas</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
          <select className="search-dropdown" value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="Model">Model</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
            <option value="Electric">Electric</option>
          </select>
          <button className="search-button" onClick={handleSearchClick}>Search</button>
        </div>
      </div>

      <div className="header__seenon-text">Or Browse Featured Model</div>
      <div className="featured-models">
        <button className="featured-button">SUV</button>
        <button className="featured-button">Sedan</button>
        <button className="featured-button">Hatchback</button>
        <button className="featured-button">Mini</button>
        <button className="featured-button">Electric</button>
      </div>
    </header>
  );
};

export default Header;