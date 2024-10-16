import React, { useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Header = ({ onSignInClick, onSignUpClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [carType, setCarType] = useState('All');
  const [make, setMake] = useState('All');
  const [energy, setEnergy] = useState('All');

  const handleSearchClick = () => {
    // Implement search functionality here
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleEnergyChange = (e) => {
    setEnergy(e.target.value);
  };

  const handleFeaturedModelClick = (model) => {
    // Implement the logic for handling featured model button click
    console.log(`Selected featured model: ${model}`);
  };

  return (
    <header className="header">
      <img src="/img/rabbitBlackBg.png" alt="Nexter logo" className="header__logo" />
      <h1 className="heading-1">Discover the Car That's Perfect for You</h1>

      <div className="HomeSearch d-flex flex-wrap justify-content-center">
        <form className="search-form d-flex flex-column flex-md-row" onSubmit={(e) => { e.preventDefault(); handleSearchClick(); }}>
          {/* Make Filter */}
          <div className="form-group mb-2">
            <select className="filter-dropdown form-select" value={make} onChange={handleMakeChange}>
              <option value="" >Make</option> {/* Placeholder for Make */}
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Tesla">Tesla</option>
              <option value="BMW">BMW</option>
            </select>
          </div>

          {/* Energy Filter */}
          <div className="form-group mb-2">
            <select className="filter-dropdown form-select" value={energy} onChange={handleEnergyChange}>
              <option value="">Energy</option> {/* Placeholder for Energy */}
              <option value="Gasoline">Gas</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Car Type Filter */}
          <div className="form-group mb-2">
            <select className="filter-dropdown form-select" value={carType} onChange={handleCarTypeChange}>
              <option value="" >Model</option> {/* Placeholder for Model */}
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Truck">Truck</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="form-group mb-1">
            <button type="submit" className="search-button">Search</button>
          </div>
        </form>
      </div>

      <div className='Fmodel text-center mt-4'> {/* Added margin for spacing */}
        <p>Or Browse Featured Model</p>
        <div className="d-flex justify-content-center flex-wrap"> 
          {/* Buttons that are not implemented yet are disabled */}
          <button id="button-in-progress" className="btn btn-secondary m-1" onClick={() => handleFeaturedModelClick('SUV')}>SUV</button>
          <button id="button-in-progress" className="btn btn-secondary m-1" onClick={() => handleFeaturedModelClick('Sedan')}>Sedan</button>
          <button id="button-in-progress" className="btn btn-secondary m-1" onClick={() => handleFeaturedModelClick('Hatchback')}>Hatchback</button>
          <button id="button-in-progress" className="btn btn-secondary m-1" onClick={() => handleFeaturedModelClick('Mini')}>Mini</button>
          <button id="button-in-progress" className="btn btn-secondary m-1" onClick={() => handleFeaturedModelClick('Electric')}>Electric</button>
        </div>
      </div>

      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src="/img/logo-bbc.png" alt="Seen on logo 1" />
        <img src="/img/logo-forbes.png" alt="Seen on logo 2" />
        <img src="/img/logo-techcrunch.png" alt="Seen on logo 3" />
        <img src="/img/logo-bi.png" alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
