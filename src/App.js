//App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from './components/Sidebar';

import TrackRecord from './TrackRecord';
import InvestmentListings from './components/InvestmentListings';
import InvestmentDetails from './components/InvestmentDetails';
import UserProfile from './components/UserProfile';
import HomePage from './HomePage';
import HelpCenter2 from './HelpCenter2';

import './App.css';
import Chatbot from './Chatbot';
import ResearchPage from './components/ResearchPage';
//import ContactForm from './components/ContactForm';
//import AboutUsServiceInfo from './components/AboutUs-ServiceInfo';
import CarSearch from './components/CarSearch';
import CarSearchDetails from './components/CarSearchDetails';
import FuelSavingCalc from './components/FuelSavingCalc';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = Cookies.get('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
    console.log(`isLoggedIn: ${isLoggedIn}`);
  }, []);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HelpCenter2" element={<HelpCenter2 />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/listings" element={<InvestmentListings minPrice={-1} maxPrice={-1} sortByRecent={false} propertyType={'none'} />} />
            <Route path="/listings/:listingId" element={<InvestmentDetails />} /> {/* Route for listing details page */}
            <Route path="/userProfile/:userId" element={<UserProfile />} /> {/* Route for listing details page */}
            <Route path="/Research" element={<ResearchPage />} />
            {/*
            <Route path="/Parts" element={<FeaturedParts />} />  Route for listing details page
            <Route path="/Cars" element={<FeatureCars />} />  Route for listing details page
            */}
            <Route path="/CarSearch" element={<CarSearch />} /> {/* Route for searching/filtering electric vehicles database */}
            <Route path="/car-details/:id" element={<CarSearchDetails />} />
            <Route path="/Research" element={<ResearchPage />} /> {/* Route for listing details page */}
            {/*
            <Route path="/Contact" element={<ContactForm />} />  Route for listing details page
            <Route path="/AboutUs" element={<AboutUsServiceInfo />} /> Route for listing details page
            Other routes */}
            <Route path="/FuelSavingCalc" element={<FuelSavingCalc />} /> {/* Route to fuel savings calculator */}
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
