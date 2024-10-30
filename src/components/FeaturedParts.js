import React from 'react';
import './FeaturedParts.css';

function FeaturedParts() {
  const parts = [
    { src: `${process.env.PUBLIC_URL}/img/battery.jpeg`, alt: 'Batteries', title: 'Batteries' },
    { src: `${process.env.PUBLIC_URL}/img/spark-plug.jpeg`, alt: 'Spark Plugs', title: 'Spark Plugs' },
    { src: `${process.env.PUBLIC_URL}/img/brakes.jpeg`, alt: 'Brake Pads', title: 'Brake Pads' },
    { src: `${process.env.PUBLIC_URL}/img/tires.jpeg`, alt: 'Tires', title: 'Tires' },
    { src: `${process.env.PUBLIC_URL}/img/floor-mats.jpeg`, alt: 'Floor Mats', title: 'Floor Mats' },
    { src: `${process.env.PUBLIC_URL}/img/dashboard-mount.jpeg`, alt: 'Car Holder', title: 'Dashboard Mounts' },
    { src: `${process.env.PUBLIC_URL}/img/fluids.jpeg`, alt: 'Car Fluids', title: 'Fluids' },
    { src: `${process.env.PUBLIC_URL}/img/car-mirror.jpeg`, alt: 'Car Mirrors', title: 'Car Mirrors' },
    { src: `${process.env.PUBLIC_URL}/img/lights.jpeg`, alt: 'Lights', title: 'Car Lights' },
    { src: `${process.env.PUBLIC_URL}/img/clearance.jpeg`, alt: 'Clearance', title: 'Clearance' },
  ];

  return (
    <div className="container">
      <div className="categories-header">
        Featured Parts & Accessories
      </div>
      <div className="categories-wrapper">
        <div className="categories-grid">
          {parts.map((part, index) => (
            <div className="category-item" key={index}>
              <img src={part.src} alt={part.alt} />
              <div className="category-title">{part.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedParts;
