import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Sidebar from './components/Sidebar';
import EVPartsAccessories from './components/EVPartsAccessories';
import TrackRecord from './TrackRecord';
import SignInForm from './components/SignInForm';
import PartDetail from './components/PartDetail';
import UserProfile from './components/UserProfile';
import HomePage from './HomePage';
import HelpCenter2 from './HelpCenter2';
import Chatbot from './Chatbot';
import FeaturedParts from './components/FeaturedParts';
import FeatureCars from './components/FeaturedCars';
import ResearchPage from './components/ResearchPage';
import ContactForm from './components/ContactForm';
import AboutUsServiceInfo from './components/AboutUs-ServiceInfo';
import CarSearch from "./components/CarSearchCartCompts/CarSearch";
import CarDetails from "./components/CarSearchCartCompts/CarDetails";
import Cart from "./components/CarSearchCartCompts/ShoppingCartPage";
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartsData = async () => {
      try {
        const response = await axios.get(
          'https://prod-51.southeastasia.logic.azure.com:443/workflows/21aef51634694bfb992ec69d9f1da148/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hAiQE6T-GmhZFghY9oHSRTB-lJo9_gUd4KJYjkuo5ik'
        );
        setParts(response.data || []);
      } catch (error) {
        console.error('Error fetching parts data:', error);
        setError('Failed to fetch parts data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPartsData();
  }, []);

  useEffect(() => {
    const loggedInStatus = Cookies.get('isLoggedIn');
    if (loggedInStatus === 'true') setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Sidebar 
          setSearchQuery={setSearchQuery} 
          parts={parts} 
          loading={loading} 
          error={error} 
        />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HelpCenter2" element={<HelpCenter2 />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route 
              path="/PartsAccessories" 
              element={<EVPartsAccessories parts={parts} searchQuery={searchQuery} />} 
            />
            <Route path="/PartsAccessories/:listingId" element={<PartDetail />} />
            <Route path="/userProfile/:userId" element={<UserProfile />} />
            <Route path="/Parts" element={<FeaturedParts />} />
            <Route path="/Cars" element={<FeatureCars />} />
            <Route path="/Research" element={<ResearchPage />} />
            <Route path="/Contact" element={<ContactForm />} />
            <Route path="/AboutUs" element={<AboutUsServiceInfo />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/CarSearch" element={<CarSearch />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
