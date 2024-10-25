import React from 'react';
import { Link } from 'react-router-dom'
import './PremiumBrands.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PremiumBrands() {
  const brands = [
    { img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/BYD_Auto_Logo.svg", alt: "BYD Auto" },
    { img: "https://upload.wikimedia.org/wikipedia/en/2/21/Roewe_logo.png", alt: "Roewe" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/MG_Motor_2021_logo.svg/1920px-MG_Motor_2021_logo.svg.png", alt: "MG Motor" },
    { img: "https://guangcaiauto.com/wp-content/uploads/elementor/thumbs/IM-logo-qhp2w7ktcry1mjbmenjprk72cvsg2xlwj4v22wv9i4.png", alt: "IM Motors" },
    { img: "https://1000logos.net/wp-content/uploads/2023/09/Nio-Logo.png", alt: "Nio" },
    { img: "https://static.wixstatic.com/media/f2bf43_a50c0080788f4b9fa5bff97c40bbdc1f~mv2.png", alt: "GAC Motor" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Li_Auto_logo.png", alt: "Li Auto" },
    { img: "https://guangcaicar.com/wp-content/uploads/2023/10/Aion-logo.png", alt: "Aion" },
    { img: "https://static.wixstatic.com/media/f2bf43_eee224b9ebca45d081fcf3b0a4d1508f~mv2.png", alt: "Chery" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Geely_Auto_2023.svg/2880px-Geely_Auto_2023.svg.png", alt: "Geely" },
  ];

  return (
    <div className="premium-brands-container">
      <h2 className="section-title">Our Premium Brands</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            <a href="/" className="link-in-progress">
              <img src={brand.img} alt={brand.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PremiumBrands;
