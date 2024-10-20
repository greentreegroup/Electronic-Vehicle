// HelpCenter.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowLeft, ArrowRight } from 'lucide-react'; // Importing arrow icons
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import { Chrono } from 'react-chrono';
import './HelpCenter2.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const featuredArticles = [
    { id: 4, title: 'Company Related Articles', url: 'https://www.springer.capital/', image: 'rabbitBlackBg.png' },
    { id: 5, title: 'Electric Vehicle Related Articles', url: 'https://www.iea.org/evs', image: 'charge.webp' },
    { id: 6, title: 'EV Laws Article', url: 'https://electrificationcoalition.org/', image: 'about-us.webp' },
  ];

  const timeline_data = [
    {
        title: "1.",
        cardTitle: "Select cars",
        cardSubtitle: `Select cars from the car selection page on EVrabbit.`,
        cardDetailedText: `Select from a wide variety of brands, models, and trims at EVrabbit. Our platform allows for buyers to
        easily purchase cars in bulk, making it cost-effective for their needs.`
    },
    {
        title: "2.",
        cardTitle: "Estimate cost",
        cardSubtitle: `Estimate the total cost of your order.`,
        cardDetailedText: `After selecting the cars and putting in a shipping location, the FOB (free on board), shipping, and
        insurance costs will be estimated using our calculation tools. This way, you have a good idea of the total cost for your order.`
    },
    {
        title: "3.",
        cardTitle: "Registration",
        cardSubtitle: `Ensure that your registration and customs clearance is complete.`,
        cardDetailedText: `To make sure that the shipping process goes smoothly, the vehicles registration and customs clearance
        must be completed in your country. EVrabbit will provide all appropriate documents to help ensure that registration can be completed.`
    },
    {
        title: "4.",
        cardTitle: "Down payment",
        cardSubtitle: `Pay around 30% of the total cost as a down payment.`,
        cardDetailedText: `When your total cost is calculated, EVrabbit will require about 30% of it as a down payment before we can order
        the cars.`,
    },
    {
        title: "5.",
        cardTitle: "Sign contract",
        cardSubtitle: `Sign a contract after the terms have been agreed to.`,
        cardDetailedText: `After the payment has been agreed upon, a contract will be sent out. This contract contains important
        information, such as payment details and the destination port.`,
    },
    {
        title: "6.",
        cardTitle: "Manufacturing starts",
        cardSubtitle: `EVrabbit buys from the factories, and manufacturing begins.`,
        cardDetailedText: `After the contract has been signed and down payment is received, EVrabbit will order the cars from the
        Chinese manufacturers. The manufacturers will then begin building the cars.`,
    },
    {
        title: "7.",
        cardTitle: "Manufacturing finishes",
        cardSubtitle: `The cars finish being manufactured and leave the factory.`,
        cardDetailedText: `When the cars are finished being built, EVrabbit will notify you that the manufacturing is complete. The vehicles
        will then start to be delivered to us.`,
    },
    {
        title: "8.",
        cardTitle: "Final payment",
        cardSubtitle: `100% of the final payment is required before the cars reach EVrabbit.`,
        cardDetailedText: `Before the cars reach us, 100% of the total payment specified in the contract is required. This is done so we can 
        pay for the rest of the order to the manufacturers.`,
    },
    {
        title: "9.",
        cardTitle: "Deliver cars to EVrabbit",
        cardSubtitle: `The cars leave the factory and are delivered to EVrabbit.`,
        cardDetailedText: `In about 1-8 weeks from the start of manufacturing, the cars will arrive to us. Then, we can start getting them
        ready to ship.`,
    },
    {
        title: "10.",
        cardTitle: "License cars",
        cardSubtitle: `The cars are licensed shortly before becoming legally secondhand in order to comply with Chinese shipping laws.`,
        cardDetailedText: `The cars are licensed, insured, and registered in China. Shortly after, they are deregistered so that they become
        legally used. This is done to comply with Chinese shipping laws. Although they will 
        legally be secondhand, EVrabbit promises that your vehicles will still be in pristine condition.`,
    },
    {
        title: "11.",
        cardTitle: "Ship cars",
        cardSubtitle: `The cars are shipped to the nearest port to your location.`,
        cardDetailedText: `The cars are then ready to ship. They will be transported to the nearest port in your country. If your
        country does not have a port; it will ship to the nearest port to your specified location. All details will be covered in the
        contract.`,
    },
    {
        title: "12.",
        cardTitle: "Offer parts",
        cardSubtitle: `After shipping, support to obtain spare parts will be offered.`,
        cardDetailedText: `After the cars have been shipped, it is our promise that we will support you if you need spare parts for your
        vehicles. Our support will last as long as needed.`
    },
];

  // State to manage the current index of the Chrono component
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next item
  const handleNext = () => {
    if (currentIndex < timeline_data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous item
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="help-center-wrapper">
        <FAQSection />

        <div className="featured-articles-section">
          <h2 className="section-heading">Featured Articles</h2>
          <div className="articles-grid">
            {featuredArticles.map((article) => (
              <a key={article.id} href={article.url} className="article-card" target="_blank" rel="noopener noreferrer">
                <img src={`/img/${article.image}`} alt={article.title} className="article-image" />
                <h3 className="article-title">{article.title}</h3>
              </a>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h2 className="timeline-heading">Process Timeline</h2>

          {/* Navigation Arrows */}
          <div className="navigation-arrows">
            <button className="arrow-button" onClick={handlePrev} disabled={currentIndex === 0}>
              <ArrowLeft size={24} />
            </button>
            <button className="arrow-button" onClick={handleNext} disabled={currentIndex === timeline_data.length - 1}>
              <ArrowRight size={24} />
            </button>
          </div>

          <Chrono
            items={timeline_data}
            mode="HORIZONTAL"
            disableToolbar={true}
            timelinePointShape="square"
            highlightCardsOnHover={true}
            cardHeight={170}
            theme={{
              primary: '#f57b18',
              secondary: 'black',
              titleColor: 'black',
              titleColorActive: 'white',
              cardTitleColor: 'black',
            }}
            fontSizes={{
              title: '1.5rem',
              cardSubtitle: '0.95rem',
              cardText: '0.8rem',
              cardTitle: '1.5rem',
            }}
            activeItemIndex={currentIndex} // Set the current index for active item
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
