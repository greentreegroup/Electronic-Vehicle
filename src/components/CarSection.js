import React from 'react';
import './CarSection.css'; // Make sure to create this CSS file

function CarSection() {
  return (
    <div className="car-section">
      <div className="car-image">

        <img src="https://img.freepik.com/premium-photo/sports-japanese-cars-car-street-racing_551707-82235.jpg" alt="Luxury Car" />
        <button className="play-button">▶</button>
      </div>
      <div className="car-content">
        <h1>AN EXPORT COMPANY OF AUTOMOBILES AND IT'S PARTS FROM CHINA</h1>
        <p>We are dedicated to providing our customers with exceptional service, competitive pricing, and a comprehensive range of automobiles and their parts.</p>
        <p>We are actively seeking DISTRIBUTION PARTNERS to expand our offerings and provide an even wider SELECTION OF HIGH-QUALITY VEHICLES AND COMPONENTS.</p>
        <button className="get-started-button"><a href="/AboutUs">Get Started</a></button>
    </div>

    </div>
  );
}

export default CarSection;
