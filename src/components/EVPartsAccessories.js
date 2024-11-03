// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EVPartsAccessories.css';

// const MAX_NAME_LENGTH = 25;

// // Utility function to truncate text
// const truncateText = (text, maxLength) => {
//   if (typeof text !== 'string') return 'No Name';
//   return text.length <= maxLength ? text : `${text.slice(0, maxLength)}...`;
// };

// const EVPartsAccessories = ({ searchQuery = '' }) => {
//   const [parts, setParts] = useState([]);
//   const [filteredParts, setFilteredParts] = useState([]);
//   const [filters, setFilters] = useState({
//     minPrice: '',
//     maxPrice: '',
//     selectedCategory: '',
//     availability: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);

//   // Fetch parts data on component mount
//   useEffect(() => {
//     const fetchPartsData = async () => {
//       try {
//         const response = await axios.get(
//           'https://prod-51.southeastasia.logic.azure.com:443/workflows/21aef51634694bfb992ec69d9f1da148/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hAiQE6T-GmhZFghY9oHSRTB-lJo9_gUd4KJYjkuo5ik'
//         );
//         setParts(response.data || []);
//         setFilteredParts(response.data || []);
//       } catch (error) {
//         console.error('Error fetching parts data:', error);
//         setError('Failed to fetch parts data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPartsData();
//   }, []);

//   // Apply filters and search query
//   useEffect(() => {
//     applyFilters();
//   }, [searchQuery, filters]);

//   const applyFilters = () => {
//     const { minPrice, maxPrice, selectedCategory, availability } = filters;

//     const filtered = parts.filter((part) => {
//       const price = parseFloat(part.price) || 0;
//       const min = parseFloat(minPrice) || 0;
//       const max = parseFloat(maxPrice) || Infinity;

//       const isWithinPriceRange = price >= min && price <= max;
//       const isCategoryMatch = !selectedCategory || part.category === selectedCategory;
//       const isAvailabilityMatch = !availability ||
//         (availability === 'In Stock' ? part.availability : !part.availability);
//       const isSearchTermMatch = part.name.toLowerCase().includes(searchQuery.toLowerCase());

//       return (
//         isWithinPriceRange &&
//         isCategoryMatch &&
//         isAvailabilityMatch &&
//         isSearchTermMatch
//       );
//     });

//     setFilteredParts(filtered);
//   };

//   const formatPrice = (price) =>
//     price == null || isNaN(price) ? 'Price Unavailable' : `$${price.toFixed(2)}`;

//   const getAvailabilityText = (availability) =>
//     availability ? 'In Stock' : 'Out of Stock';

//   const updateFilter = (e) => {
//     setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const toggleFilterBox = () => setIsFilterBoxOpen((prev) => !prev);

//   if (loading) return <div className="loading-message">Loading parts data...</div>;
//   if (error) return <div className="error-message">{error}</div>;

//   return (
//     <div className="parts-page">
//       {/* Filter Controls */}
//       <div className="filter-controls">
//         <input
//           type="number"
//           name="minPrice"
//           placeholder="Min Price"
//           value={filters.minPrice}
//           onChange={updateFilter}
//         />
//         <input
//           type="number"
//           name="maxPrice"
//           placeholder="Max Price"
//           value={filters.maxPrice}
//           onChange={updateFilter}
//         />
//         <select
//           name="selectedCategory"
//           value={filters.selectedCategory}
//           onChange={updateFilter}
//         >
//           <option value="">All Categories</option>
//           <option value="Brake">Brake</option>
//           <option value="Oil">Oil</option>
//           <option value="Engine">Engine</option>
//           <option value="Battery">Battery</option>
//           <option value="Turbo">Turbo</option>
//         </select>
//         <select
//           name="availability"
//           value={filters.availability}
//           onChange={updateFilter}
//         >
//           <option value="">All</option>
//           <option value="In Stock">In Stock</option>
//           <option value="Out of Stock">Out of Stock</option>
//         </select>
//         <button className="filter-toggle-button" onClick={toggleFilterBox}>
//           {isFilterBoxOpen ? 'Close Filters' : 'Open Filters'}
//         </button>
//       </div>

//       {/* Parts Grid */}
//       <div className={`parts-grid ${filteredParts.length === 0 ? 'empty' : ''}`}>
//         {filteredParts.length > 0 ? (
//           filteredParts.map((part) => (
//             <div key={part.ID} className="part-card">
//               <img
//                 src={part.image || 'default-image.jpg'}
//                 alt={part.name || 'Part Image'}
//                 className="part-card__img"
//               />
//               <h5 className="part-card__name">
//                 {truncateText(part.name, MAX_NAME_LENGTH)}
//               </h5>
//               <p className="part-card__category">
//                 {part.category || 'Unknown Category'}
//               </p>
//               <p className="part-card__price">{formatPrice(part.price)}</p>
//               <p className="part-card__availability">
//                 {getAvailabilityText(part.availability)}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="error-message">No parts found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EVPartsAccessories;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EVPartsAccessories.css';
import { Link } from 'react-router-dom';

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
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false); 

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
    if (window.innerWidth <= 480) {
      toggleFilterBox(); 
    }
  };

  const updateFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const toggleFilterBox = () => {
    setIsFilterBoxOpen(!isFilterBoxOpen);
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
      <div className="search-contain">
        <input
          type="text"
          placeholder="Search Parts"
          className="p-search-bar"
          name="searchTerm"
          value={filters.searchTerm}
          onChange={updateFilter}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearchClick();
          }}
        />
        <button className="part-search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Filter Toggle Button (only shown on mobile) */}
      <div className="filter-toggle-container">
        <button className="filter-toggle-button" onClick={toggleFilterBox}>
          {isFilterBoxOpen ? 'Close Filters' : 'Open Filters'}
        </button>
      </div>

      {/* Filter Box for mobile view */}
      <div className={`filter-box-mobile ${isFilterBoxOpen ? 'open' : 'closed'}`}>
        <button className="filter-close-button" onClick={toggleFilterBox}>&times;</button>
        <h3>Filter Parts</h3>
        <div className="filter-group">
          Min Price:
          <label>
            <input
              type="number"
              min="0"
              name="minPrice"
              value={filters.minPrice}
              onChange={updateFilter}
            />
          </label>
          Max Price:
          <label>
            <input
              type="number"
              min="0"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={updateFilter}
            />
          </label>
          Category:
          <label>
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
          Availability:
          <label>
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

      {/* Main Content Container */}
      <div className="main-content">
        {/* Filter Box for desktop view */}
        <div className="filter-box-desktop">
          <h3>Filter Parts</h3>
          <div className="filter-group">
            Min Price:
            <label>
              <input
                type="number"
                min="0"
                name="minPrice"
                value={filters.minPrice}
                onChange={updateFilter}
              />
            </label>
            Max Price:
            <label>
              <input
                type="number"
                min="0"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={updateFilter}
              />
            </label>
            Category:
            <label>
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
            Availability:
            <label>
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
              <Link to={`/PartsAccessories/${part.ID}`} key={part.ID} className="part-card-link">
                <div className="part-card">
                  <img src={part.image || 'default-image.jpg'} alt={part.name || 'Part Image'} className="part-card__img" />
                  <h5 className="part-card__name">
                    {truncateText(part.name || '', MAX_NAME_LENGTH)}
                  </h5>
                  <p className="part-card__category">{part.category || 'Unknown Category'}</p>
                  <p className="part-card__price">{formatPrice(part.price)}</p>
                  <p className="part-card__availability">{getAvailabilityText(part.availability)}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="error-message">No parts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EVPartsAccessories;