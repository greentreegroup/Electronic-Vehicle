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
            {/* Other routes */}
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
