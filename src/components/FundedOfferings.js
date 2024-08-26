// FundedOfferings.js
import React from 'react';
import './FundedOfferings.css'; // Assuming you have similar styling

const FundedOfferings = ({ offerings = [] }) => {
    return (
      <div className="funded-offerings-grid">
        {offerings.map((offering, index) => (
          <div key={index} className="offering-item">
            <div className="offering-image">
              <img src={offering.image} alt={offering.name} />
            </div>
            <div className="offering-info">
              <h2>{offering.name}</h2>
              <p>{offering.description}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </div>
    );
  };
export default FundedOfferings;