import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PA_UNIQUE_CAR_BRANDS_URL } from './CarSearchCartCompts/urls';

const Header = ({ onSignInClick, onSignUpClick }) => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [model, setModel] = useState('');
  const [carBrands, setCarBrands] = useState([]);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await fetch(PA_UNIQUE_CAR_BRANDS_URL, {
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Network response error for fetching car brands list");
        const data = await response.json();
        setCarBrands(data);
      } catch (error) {
        console.error("Error fetching car brands:", error);
      }
    };

    fetchCarBrands();
  }, []);

  const handleSearchClick = () => {
    console.log('Search clicked', { brand, fuelType, model });

    //Defines data variable
    let data;

    //Depending on whats chosen, it will pass different states to data
    if(fuelType !== "" && model !== ""){
      data = { fuelType: fuelType, model: model };
    } else if (fuelType !== "") {
      data = { fuelType: fuelType };
    } else if (model !== ""){
      data = { model: model };
    } 

    //Navigate to car page with the data
    navigate(`/carSearch`, { state: data });
  };

  return (
    <header className="header">
      <img src="/img/rabbitBlackBg.png" alt="logo" className="header__logo" />
      <h1 className="heading-1">Discover the Car That's Perfect for You</h1>

      <div className="home-search">
        <div className="search-form">
          <select className="search-dropdown" value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="Brand">Brand</option>
              {carBrands.map((brandName, index) => (
                <option key={index} value={brandName}>{brandName}</option>
              ))}
            </select>
          <select className="search-dropdown" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="">Fuel Type</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select className="search-dropdown" value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Model</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="MPV">MPV</option>
            <option value="Mini">Mini</option>
            <option value="Hatchback">Hatchback</option>
          </select>
          <button className="search-button" onClick={handleSearchClick}>Search</button>
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