// EVPartsAccessories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EVPartsAccessories.css'; 

const MAX_NAME_LENGTH = 25; 

// Utility function to truncate text
const truncateText = (text, maxLength) => {
  if (typeof text !== 'string') {
    return 'No Name'; 
  }
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

const EVPartsAccessories = () => {
  const [parts, setParts] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    selectedCategory: '',
    availability: '',
    searchTerm: ''
  });
  const [loading, setLoading] = useState(true);
  const [filteredParts, setFilteredParts] = useState([]);

  useEffect(() => {
    const fetchPartsData = async () => {
      try {
        const response = await axios.get(
          'https://prod-51.southeastasia.logic.azure.com:443/workflows/21aef51634694bfb992ec69d9f1da148/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hAiQE6T-GmhZFghY9oHSRTB-lJo9_gUd4KJYjkuo5ik'
        );
        setParts(response.data || []); 
        setFilteredParts(response.data || []); 
      } catch (error) {
        console.error('Error fetching parts data:', error);
        setError('Failed to fetch parts data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPartsData();
  }, []);

  const formatPrice = (price) => {
    if (price == null || isNaN(price)) {
      return 'Price Unavailable';
    }
    return `$${parseFloat(price).toFixed(2)}`;
  };

  const getAvailabilityText = (availability) => {
    return availability ? 'In Stock' : 'Out of Stock';
  };

  const applyFilters = () => {
    const { minPrice, maxPrice, selectedCategory, availability, searchTerm } = filters;
    const filtered = parts.filter(part => {
      const price = parseFloat(part.price);
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);

      const isWithinPriceRange = (!minPrice || price >= min) && (!maxPrice || price <= max);
      const isCategoryMatch = !selectedCategory || part.category === selectedCategory;
      const isAvailabilityMatch = !availability || (availability === 'In Stock' ? part.availability : !part.availability);
      const isSearchTermMatch = part.name.toLowerCase().includes(searchTerm.toLowerCase());

      return isWithinPriceRange && isCategoryMatch && isAvailabilityMatch && isSearchTermMatch;
    });
    setFilteredParts(filtered);
  };

  const handleSearchClick = () => {
    applyFilters();
  };

  const handleFilterClick = () => {
    applyFilters();
  };

  const updateFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div className="loading-message">Loading parts data...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="parts-page">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Parts"
          className="search-bar"
          name="searchTerm"
          value={filters.searchTerm}
          onChange={updateFilter}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearchClick();
          }}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Main Content Container */}
      <div className="main-content">
        {/* Filter Box */}
        <div className="filter-box">
          <h3>Filter Parts</h3>
          <div className="filter-group">
            <label>
              Min Price:
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={updateFilter}
              />
            </label>
            <label>
              Max Price:
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={updateFilter}
              />
            </label>
            <label>
              Category:
              <select
                name="selectedCategory"
                value={filters.selectedCategory}
                onChange={updateFilter}
              >
                <option value="">All Categories</option>
                <option value="Brake">Brake</option>
                <option value="Oil">Oil</option>
                <option value="Engine">Engine</option>
                <option value="Battery">Battery</option>
                <option value="Turbo">Turbo</option>
              </select>
            </label>
            <label>
              Availability:
              <select
                name="availability"
                value={filters.availability}
                onChange={updateFilter}
              >
                <option value="">All</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </label>
            <button className="filter-button" onClick={handleFilterClick}>
              Apply Filters
            </button>
          </div>
        </div>

        {/* Parts List */}
        <div className={`parts-grid ${filteredParts.length === 0 ? 'empty' : ''}`}>
          {filteredParts.length > 0 ? (
            filteredParts.map((part) => (
              <a href={`/PartsAccessories/${part.ID}`} key={part.ID} className="part-card-link">
                <div className="part-card">
                  <img src={part.image || 'default-image.jpg'} alt={part.name || 'Part Image'} className="part-card__img" />
                  <h5 className="part-card__name">
                    {truncateText(part.name || '', MAX_NAME_LENGTH)}
                  </h5>
                  <p className="part-card__category">{part.category || 'Unknown Category'}</p>
                  <p className="part-card__price">{formatPrice(part.price)}</p>
                  <p className="part-card__availability">{getAvailabilityText(part.availability)}</p>
                </div>
              </a>
            ))
          ) : (
            <p className="empty-message">No parts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EVPartsAccessories;