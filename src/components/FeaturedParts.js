import React from 'react';
import './FeaturedParts.css';

function FeaturedParts() {
  const parts = [
    { src: `${process.env.PUBLIC_URL}/img/battery.jpeg`, alt: 'Batteries', title: 'Batteries' },
    { src: `${process.env.PUBLIC_URL}/img/suspension.jpeg`, alt: 'Suspension', title: 'Suspension' },
    { src: `${process.env.PUBLIC_URL}/img/brakes.jpeg`, alt: 'Brake Pads', title: 'Brake Pads' },
    { src: `${process.env.PUBLIC_URL}/img/performance.jpeg`, alt: 'Performance', title: 'Performance' },
    { src: `${process.env.PUBLIC_URL}/img/brake_rotor.jpeg`, alt: 'Brake Rotors', title: 'Brake Rotors' },
    { src: `${process.env.PUBLIC_URL}/img/engine_oil.jpeg`, alt: 'Engine Oil', title: 'Engine Oil' },
    { src: `${process.env.PUBLIC_URL}/img/wax.jpeg`, alt: 'Wash & Wax', title: 'Wash & Wax' },
    { src: `${process.env.PUBLIC_URL}/img/ac-chem.jpeg`, alt: 'AC Chemicals', title: 'AC Chemicals' },
    { src: `${process.env.PUBLIC_URL}/img/truck_towing.webp`, alt: 'Truck & Towing', title: 'Truck & Towing' },
    { src: `${process.env.PUBLIC_URL}/img/radiator.jpeg`, alt: 'Radiators', title: 'Radiators' },
    { src: `${process.env.PUBLIC_URL}/img/coil.jpeg`, alt: 'Ignition Coils', title: 'Ignition Coils' },
    { src: `${process.env.PUBLIC_URL}/img/clearance.jpeg`, alt: 'Clearance', title: 'Clearance' },
  ];

  return (
    <div className="container">
      <div className="categories-header">
        Featured Parts & Accessories
      </div>
      <div className="categories-grid">
        {parts.map((part, index) => (
          <div className="category-item" key={index}>
            <img src={part.src} alt={part.alt} />
            <div className="category-title">{part.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedParts;