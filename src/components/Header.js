import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onSignInClick, onSignUpClick }) => {
  const [brand, setBrand] = useState('Brand');
  const [fuelType, setFuelType] = useState('Fuel Type');
  const [model, setModel] = useState('Model');

  const handleSearchClick = () => {
    // Implement search functionality here
    console.log('Search clicked', { brand, fuelType, model });
  };

  return (
    <header className="header">
      <img src="/img/rabbitBlackBg.png" alt="logo" className="header__logo" />
      <h1 className="heading-1">Discover the Car That's Perfect for You</h1>

      <div className="home-search">
        <div className="search-form">
          <select className="search-dropdown" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="Brand">Brand</option>
            <option value="IM Motor">IM Motor</option>
            <option value="BYD">BYD</option>
            <option value="Roewe">Roewe</option>
            <option value="MG">MG</option>
          </select>
          <select className="search-dropdown" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="Fuel Type">Fuel Type</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select className="search-dropdown" value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="Model">Model</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="MPV">MPV</option>
            <option value="Mini">Mini</option>
            <option value="Hatchback">Hatchback</option>
          </select>
          <Link 
            to="/CarSearch" 
            //state={{brand, fuelType, model}}
          >
            <button className="search-button" onClick={handleSearchClick}>Search</button>
          </Link>
        </div>
      </div>

      <div className="header__seenon-text">Or Browse Featured Model</div>
      <div className="featured-models">
        <Link to="/CarSearch" state={{ model: "SUV" }}>
          <button className="featured-button">SUV</button>
        </Link>
        <Link to="/CarSearch" state={{ model: "Sedan" }}>
          <button className="featured-button">Sedan</button>
        </Link>
        <Link to="/CarSearch" state={{ model: "Hatchback" }}>
          <button className="featured-button">Hatchback</button>
        </Link>
        <Link to="/CarSearch" state={{ model: "Mini" }}>
          <button className="featured-button">Mini</button>
        </Link>
        <Link to="/CarSearch" state={{ model: "MPV" }}>
          <button className="featured-button">MPV</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;