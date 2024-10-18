// HomePage.js

import React from 'react';
import Overview from './components/Overview';  
import Header from './components/Header';
import Footer from './components/Footer';
import PremiumBrands from './components/PremiumBrands'; // Import the new component
import './HomePage.css';
import FeaturedParts from './components/FeaturedParts';
import FeatureCars from './components/FeaturedCars';
import CarSection from './components/CarSection';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <PremiumBrands /> 
        <CarSection/>
        <Overview/>
        <FeaturedParts/>
        <FeatureCars/>
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
