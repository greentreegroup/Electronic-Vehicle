//App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from './components/Sidebar';

import TrackRecord from './TrackRecord';
import EVPartsAccessories from './components/EVPartsAccessories';
import PartDetail from './components/PartDetail'; 
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
  }, [isLoggedIn]); // Add isLoggedIn as a dependency

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HelpCenter2" element={<HelpCenter2 />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/PartsAccessories" element={<EVPartsAccessories />} /> 
            <Route path="/PartsAccessories/:listingId" element={<PartDetail />} /> 
            <Route path="/userProfile/:userId" element={<UserProfile />} /> 
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
