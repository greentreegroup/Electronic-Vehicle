import React from 'react';
import FeaturedListings from './components/FeaturedListings'; 
import Overview from './components/Overview';  
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials'; // Import Testimonials component
import './HomePage.css';
import FeaturedParts from './components/FeaturedParts';


function HomePage() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <br />
        <h1>Overview</h1>
        <p className="welcome-message">
  Welcome to <strong>2300 Frontier</strong>, where the future of electric mobility begins. Our platform connects 
  innovative electric vehicle solutions with passionate investors, driving the transition to a cleaner, greener world. 
  <br/><br/>
  Whether you're an EV startup ready to revolutionize transportation or an investor seeking to power the next generation 
  of sustainable mobility, <strong>2300 Frontier</strong> is your gateway to groundbreaking opportunities.
  <br/><br/>
  Join us in accelerating the shift towards electric vehicles and be part of the journey toward a more sustainable tomorrow.
</p>
        <Overview/>

        <FeaturedParts/>

        {/* Featured Listings Section */}
        <div className="featured-listings-container">
          <br />
          <h1>Featured Electric Vehicles</h1>
          <p className="welcome-message">
            Discover the latest and most exciting electric vehicles on <strong>2300 Frontier</strong>. From state-of-the-art 
            electric cars to groundbreaking advancements in battery technology, our platform showcases a variety of innovative 
            vehicles leading the charge towards a sustainable future.
            <br/><br/>
            Explore our curated selection of featured electric vehicles and find the next breakthrough in sustainable transportation.
          </p>
          <FeaturedListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'}/>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-container">
          <h1 className='head-line'>Testimonials</h1>
          <Testimonials />
        </div>
        
        <Footer />
      </main>
      {}
    </div>
  );
}

export default HomePage;