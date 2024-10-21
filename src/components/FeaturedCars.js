
import React, { useState, useEffect } from 'react';
import './FeaturedCars.css'; // Import your updated stylesheet

const FeatureCars = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);


  const features = [
    {
      id: 'about',
      title: 'Technology that drives sustainability.',
      description:
        'Our in-house developed technology, innovative design, and advanced EV motors allow customers to go farther with fewer batteries. Lighter, smaller battery packs mean vehicles use fewer precious metals and minerals.',
      image: '/img/car3.jpeg',
      link: 'Learn More About Us',
    },
    {
      id: 'sustainability',
      title: 'Sustainable Practices',
      description:
        'Our commitment to sustainability goes beyond just making electric vehicles. Learn about our eco-friendly practices and materials.',
      image: 'img/eco-friendly.webp',
      link: 'Learn More About Sustainability',
    },
    {
      id: 'charging',
      title: 'Changing charging--forever',
      description:
        'Our commitment to sustainability goes beyond just making electric vehicles. Learn about our eco-friendly practices and materials.',
      image: 'img/charge.webp',
      link: 'Explore Charging',
    },
    {
      id: 'service',
      title: 'Always at your service',
      description:
        'Our commitment to sustainability goes beyond just making electric vehicles. Learn about our eco-friendly practices and materials.',
      image: 'img/wagon-white.jpeg',
      link: 'Visit our service centers',
    },
    {
      id: 'safety',
      title: 'Five-star safety',
      description:
        'Our commitment to sustainability goes beyond just making electric vehicles. Learn about our eco-friendly practices and materials.',
      image: 'img/about-us.webp',
      link: '',
    },
  ];

  useEffect(() => {
    const links = document.querySelectorAll('.feature-link');
    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveFeatureIndex(index);
      });
    });
  }, []);

  return (
    <div className="featuredBody"style={{ backgroundColor: 'black' }}>
      <header>
        <h1>
      <span style={{color:'white'}}>Most Advanced</span> <span style={{color: '#f57b18'}}>Electric Cars </span>
        </h1>
        <h4>
         <span style={{color:'white'}}> Designed in USA; Assembled in CHINA;<br />
          Engineered to Change the</span> <span style={{ color: '#f57b18' }}>World.</span>
        </h4>
        <nav>
          <ul>
            {features.map((feature, index) => (
              <li key={feature.id}>
                <a
                  href="#"
                  className={`feature-link ${activeFeatureIndex === index ? 'active' : ''}`}
                >
                  {feature.title.split(' ')[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section id="featured-cars-content">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`featured-car ${feature.id} ${activeFeatureIndex === index ? 'active' : ''}`}
            style={{
              transform:
                activeFeatureIndex === index
                  ? 'translateX(0)'
                  : index < activeFeatureIndex
                  ? 'translateX(-100%)'
                  : 'translateX(100%)',
              opacity: activeFeatureIndex === index ? 1 : 0,
            }}
          >
            <img src={feature.image} alt={feature.title} />
            <div className="featured-car-caption">
              <h2 style={{ color: 'white' }}>{feature.title}</h2>
              <p style={{ color: 'white' }}>{feature.description}</p>
              {feature.link && <a className="link-in-progress" href="#">{feature.link}</a>}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeatureCars;