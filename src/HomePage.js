import React from 'react';
import FeaturedListings from './components/FeaturedListings'; 
import Overview from './components/Overview';  
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials'; // Import Testimonials component
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <br />
        <h1>Overview</h1>
        <p className='welcome-message'>Welcome to 2300 Frontier, where innovative ideas meet passionate investors. 
          Our platform bridges the gap between groundbreaking projects and the funding 
          they need to come to life. Whether you're an entrepreneur ready to launch your 
          next big idea or an investor looking to diversify your portfolio with exciting 
          new ventures, 2300 Frontier is your gateway to the future of funding. Explore a 
          world of opportunities with us and be part of the journey that transforms dreams 
          into reality.
        </p>
        <Overview/>

        {/* Featured Listings Section */}
        <div className="featured-listings-container">
          <br />
          <h1>Featured investment opportunities</h1>
          <p className='welcome-message'>Discover the latest and most exciting crowdfunding opportunities 
            on 2300 Frontier. From cutting-edge technology innovations to sustainable environmental solutions, 
            our platform hosts a variety of projects seeking your support. Dive into our curated selection of 
            opportunities and find the next big thing to invest in.
          </p>
          <FeaturedListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'}/>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-container">
          <h1 className='head-line'>Testimonials</h1>
          <Testimonials />
        </div>
        
        <Footer/>
      </main>
      {/* You can add other sections/components here as needed */}
    </div>
  );
}

export default HomePage;
