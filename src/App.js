//App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


import TrackRecord from './TrackRecord';
import EVPartsAccessories from './components/EVPartsAccessories';
import SignInForm from './components/SignInForm';
import PartDetail from './components/PartDetail'; 
import UserProfile from './components/UserProfile';
import HomePage from './HomePage';
import HelpCenter2 from './HelpCenter2';


import Chatbot from './Chatbot';
import FeaturedParts from './components/FeaturedParts';
import FeatureCars from './components/FeaturedCars';
import ResearchPage from './components/ResearchPage';
import './App.css';
import ContactForm from './components/ContactForm';
import AboutUsServiceInfo from './components/AboutUs-ServiceInfo';
import Timeline from './components/Timeline';

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
            <Route path="/PartsAccessories" element={<EVPartsAccessories />} /> 
            <Route path="/PartsAccessories/:listingId" element={<PartDetail />} /> {/* Route for listing details page */}
            <Route path="/userProfile/:userId" element={<UserProfile />} /> {/* Route for listing details page */}
            <Route path="/Parts" element={<FeaturedParts />} /> {/* Route for listing details page */}
            <Route path="/Cars" element={<FeatureCars />} /> {/* Route for listing details page */}
            <Route path="/Research" element={<ResearchPage />} /> {/* Route for listing details page */}
            <Route path="/Contact" element={<ContactForm />} /> {/* Route for listing details page */}
            <Route path="/AboutUs" element={<AboutUsServiceInfo />} /> {/* Route for listing details page */}
            {/* Other routes */}
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/Timeline" element={<Timeline />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
