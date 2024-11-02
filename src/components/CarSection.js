import React from 'react';
import './CarSection.css';
import { Link } from 'react-router-dom';


function CarSection() {
  return (
    <div className="car-section">
      <div className="car-image">

        <img src="https://media.licdn.com/dms/image/v2/D5612AQGNTF8iUd5IwA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676337863821?e=1735776000&v=beta&t=5c3HeGplp1FxyQcIZZqvT83fHvv1PdAIRdNJWM_Ew0g" alt="Luxury Car" />
      </div>
      <div className="car-content">
        <h1>AN EXPORT COMPANY OF AUTOMOBILES AND IT'S PARTS FROM CHINA</h1>
        <p>We are dedicated to providing our customers with exceptional service, competitive pricing, and a comprehensive range of automobiles and their parts.</p>
        <p>We are actively seeking DISTRIBUTION PARTNERS to expand our offerings and provide an even wider SELECTION OF HIGH-QUALITY VEHICLES AND COMPONENTS.</p>
        
        <Link to="/CarSearch">
          <button className="get-started-button">Start Searching for Cars</button>
        </Link>
      </div>

    </div>
  );
}

export default CarSection;
