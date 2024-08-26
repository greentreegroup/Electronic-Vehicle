import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FeaturedListings.css'; // Import CSS file

const FeaturedListings = ({ minPrice, maxPrice, sortByRecent, propertyType }) => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://prod-44.southeastasia.logic.azure.com/workflows/2dd568592654417e8216e170db743a61/triggers/manual/paths/invoke/min_price/${minPrice}/max_price/${maxPrice}/sort_by_recent/${sortByRecent}/property_type/${propertyType}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xqoE7trIuqQ2NkKl4zVVv3kijiPo2GZqT6MqFZuiIsw`
        );

        setListings(response.data.body.slice(0, 3));
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchData();
  }, [minPrice, maxPrice, sortByRecent, propertyType]);

  const handleViewOffering = async (listingId) => {
    navigate(`/listings/${listingId}`);
  };

  const reformatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Inside the InvestmentListings component
  return (
    <div className="featured-listings">
      {listings.map(listing => (
        <div key={listing.id} className="listing">
          <img src={JSON.parse(listing.photos)[0]} alt={listing.name} className="listing__img" />
          <h5 className="listing__name">{listing.name}</h5>
          <div className="featured-listing__top">
            <p className="listing__developer">{listing.developer}</p>
          </div>
          <div className="listing__detail">
            <p>Location</p>
            <p className="listing__value">{listing.location}</p>
          </div>
          <div className="listing__detail">
            <p>Date Published</p>
            <p className="listing__value">{reformatDate(listing.date_published)}</p>
          </div>
          <div className="listing__detail">
            <p>Target Hold Period</p>
            <p className="listing__value">{listing.target_hold_period}</p>
          </div>
          <div className="listing__detail">
            <p>Interest Rate</p>
            <p className="listing__value">{(listing.interest_rate * 100).toFixed(1)}%</p>
          </div>
          <div className="listing__detail listing__bottom">
            <p>Minimum Investment</p>
            <p className="listing__value">${numberWithCommas(listing.minimum_investment)}</p>
          </div>
          <button className="listing-btn" onClick={() => handleViewOffering(listing.id)}>View Offering</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedListings;