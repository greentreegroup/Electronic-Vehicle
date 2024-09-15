import React, { useState } from 'react';
import './HelpCenter2.css'; // Importing CSS file for styling
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      // Make HTTP request to trigger Power Automate flow with user input
      const response = await fetch(`https://prod-12.southeastasia.logic.azure.com/workflows/50f8655ca958412abb30e1d6dd3eb029/triggers/manual/paths/invoke/User_Input/${searchQuery}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mFG9aXLqApuvq7re_cdsk-iqERdGdiKlv6Q_JgvoNAQ`);
      const data = await response.json();
      setSearchResult(data.body); // Accessing the "body" property
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult([{ "Category": "Error", "Questions": "", "Answers": "An error occurred while searching." }]);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sample data for featured articles
  const featuredArticles = [
    { 
      id: 4,
      title: 'Company Related Articles',
      url: 'https://www.springer.capital/',
      image: 'rabbit.JPG',
    },
    { 
      id: 5,
      title: 'Electric Vehicle Related Articles',
      url: 'https://www.iea.org/energy-system/transport/electric-vehicles',
      image: 'charge.webp',
    },
    { 
      id: 6,
      title: 'Electric Vehicle Laws Article',
      url: 'https://electrificationcoalition.org/work/federal-ev-policy/',
      image: 'about-us.webp',
    },
  ];

  return (
    <>
    <div class="section-wrapper">
      <div className="help-center-container">
        <h2 className='head-line' style={{color:'white'}}>Help Center</h2>
        {/* <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for help..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div> */}
        {searchResult.length > 0 && (
          <div className="search-results">
            {searchResult.map((result, index) => (
              <div key={index} className="search-result-card">
                <h3>{result.Category}</h3>
                <p><strong>Questions:</strong> {result.Questions}</p>
                <p><strong>Answers:</strong> {result.Answers}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="featured-articles-container">
        <h2 className="featured-articles-heading">Featured Articles</h2>
        <div className="featured-articles">
          {featuredArticles.map((article) => (
            <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
              <div className="article-thumbnail">
                <img src={`/img/${article.image}`} alt={article.title} />
              </div>
              <h3 className="article-title">{article.title}</h3>
            </a>
          ))}
        </div>
      </div>
       {/* Contact Section */}
       <FAQSection />
       <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Email: support@evrabbit.com</p>
          <p>Phone: +1 (779) 707-1757</p>
          <p>Address: 4753 N Broadway, Chicago, Illinois</p>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
