//InvestmentDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './InvestmentDetails.css';
//import Modal from './Modal'; // Import the Modal component if you have it in a separate file

const InvestmentDetails = () => {
  const { listingId } = useParams(); // Get the listingId parameter from the URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [property, setProperty] = useState(null); // State to hold listing details

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await axios.get(`https://prod-61.southeastasia.logic.azure.com/workflows/f76b7dc459714887b801f56f2f511057/triggers/manual/paths/invoke/listing_id/${listingId}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=eu3QsBnwfwwbcv6hzkiuk5cpXMmoGCwOic42t5eQ5Lg`);
        const parsedProperty = {
          ...response.data.body[0],
          photos: JSON.parse(response.data.body[0].photos),
          availability: JSON.parse(response.data.body[0].availability).Value
        };
        setProperty(parsedProperty);
        console.log(parsedProperty);
      } catch (error) {
        console.error('Error fetching listing data', error);
      }
    };

    fetchListingDetails(); // Fetch listing details when component mounts
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const reformatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  // Function to change to the next picture
  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Conditional rendering to display "loading" when property is null
  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="investment-details">
      <h1>{property.name}</h1>
      <div className="investment-body">
        <div className="image-gallery">
          <div className="thumbnail-images">
            {property.photos.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setImageIndex(index)}
                className={currentImageIndex === index ? 'thumbnail active' : 'thumbnail'}
              />
            ))}
          </div>
          <div className="investment-image">
            <img
              src={property.photos[currentImageIndex]}
              alt={property.location}
              onClick={toggleModal} // Open modal on click
            />
          </div>
        </div>
        <div className="investment-info">
          <div className="property-details">
            <p>{property.location}</p>
            <p className="investment-info-item">Property Type: {property.property_type}</p>
            <p>Date Published: {reformatDate(property.date_published)}</p>
            <p>Developer: {property.developer}</p>
            <p>Status: {property.availability}</p>
            <p>Minimum Investment: ${numberWithCommas(property.minimum_investment)}</p>
            <p>Interest Rate: {(property.interest_rate * 100).toFixed(1)}%</p>
            <p>Target Close Date: {reformatDate(property.target_close_date)}</p>
            <p>Target Hold Period: {property.target_hold_period}</p>
            <p>Target Net IRR: {(property.target_net_irr * 100).toFixed(1)}%</p>
            <p>Target Equity Multiple: {property.target_equity_multiple}x</p>
            <p>Investment Strategy: {property.investment_strategy}</p>
          </div>
          <p>{property.deal_overview}</p>
          <p>Capital Stack:</p>
          <p className="capital-stack">{property.capital_stack}</p>
          <p>Disclosures:</p>
          <p>{property.disclosures}</p>
          <div className="property-documents">
            {JSON.parse(property.documents).map((doc, index) => (
              <button key={index} className="download-docs" onClick={() => window.open(doc.url, "_blank")}>
                Download {doc.name}
              </button>
            ))}
          </div>
          <button className="invest">Invest Now</button>
        </div>
      </div>

    </div>
  );
};

export default InvestmentDetails;
