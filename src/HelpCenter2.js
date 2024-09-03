import React, { useState } from 'react';
import FAQSection from './components/FAQSection';
import './HelpCenter2.css'; 

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://prod-12.southeastasia.logic.azure.com/...`);
      const data = await response.json();
      setSearchResult(data.body);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult([{ "Category": "Error", "Questions": "", "Answers": "An error occurred while searching." }]);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const featuredArticles = [
    { 
      id: 4,
      title: 'Company Related Articles',
      url: 'https://www.springer.capital/',
      image: 'nexter.jpg',
    },
    { 
      id: 5,
      title: 'Real Estate Crowdfunding Related Articles',
      url: 'https://www.investopedia.com/articles/investing/072514/real-estate-and-crowdfunding-new-path-investors.asp',
      image: 'RSCF.jpg',
    },
    { 
      id: 6,
      title: 'Real Estate Laws Article',
      url: 'https://iclg.com/practice-areas/real-estate-laws-and-regulations/usa',
      image: 'REL.jpg',
    },
  ];

  return (
    <>
      <div className="section-wrapper">
        <div className="help-center-container">
          <h2 className="head-line">Help Center</h2>
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for help..."
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
          </div>
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
        <h2>Featured Articles</h2>

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

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
