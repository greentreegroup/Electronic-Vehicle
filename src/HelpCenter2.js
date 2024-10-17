// HelpCenter.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import './HelpCenter2.css';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const featuredArticles = [
    { id: 4, title: 'Company Related Articles', url: 'https://www.springer.capital/', image: 'rabbitBlackBg.png' },
    { id: 5, title: 'Electric Vehicle Related Articles', url: 'https://www.iea.org/evs', image: 'charge.webp' },
    { id: 6, title: 'EV Laws Article', url: 'https://electrificationcoalition.org/', image: 'about-us.webp' },
  ];

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

        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>If you didn't find the answer you were looking for, please contact us at:</p>
          <p><Mail size={20} /> Email: support@evrabbit.com</p>
          <p><Phone size={20} /> Phone: +1 (779) 707-1757</p>
          <p><MapPin size={20} /> Address: 4753 N Broadway, Chicago, Illinois</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
