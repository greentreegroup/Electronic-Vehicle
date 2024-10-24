import React from 'react';
import { ArrowRight, Users, Target, Zap, Globe } from 'lucide-react';
import Footer from './Footer';
import './AboutUs-ServiceInfo.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">      
      <section className="hero-section">
        <div className="content-wrapper">
          <h1 className="main-title">About Us</h1>
          <p className="subtitle">Driving the Future of Electric Mobility</p>
          <a href="#learn-more" className="cta-button">
            Discover <ArrowRight className="icon" />
          </a>
        </div>
      </section>

      {/* Client Value Section */}
      <section className="client-value-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Client-first, Experience unmatched</h2>
            <p>
              EVrabbit. with years of export experience is a leading electric vehicle
              wholesaler, distributor and dealer in China, and is authorized by the Chinese government to promote
              and sell vehicles such as electric cars and used cars to all over the world.
            </p>
            <p>
              We are looking for distribution partners worldwide and offer them a wide and high quality selection of
              vehicles.
            </p>
          </div>
          <div className="image-content">
            <img src="https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-927.jpg?t=st=1728089340~exp=1728092940~hmac=505a9658c75d6cb0471b58648302a8f873e7fdebcfd02c90448b671e6564be7d&w=2000" className="client-image" />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="learn-more" className="info-section">
        <div className="content-wrapper">
          <div className="info-grid">
            <div className="info-card">
              <Target className="card-icon" />
              <h2>Our Mission</h2>
              <p>
                At EVrabbit, we're committed to revolutionizing electric vehicle technology. 
                Our mission is to provide innovative solutions that make electric mobility 
                accessible, efficient, and exciting for everyone worldwide.
              </p>
            </div>
            <div className="info-card">
              <Users className="card-icon" />
              <h2>Our Team</h2>
              <p>
                Our diverse team of experts brings together decades of experience in automotive 
                engineering, electrical systems, and sustainable technologies. We're united by 
                our passion for innovation and our commitment to excellence.
              </p>
            </div>
            <div className="info-card">
              <Globe className="card-icon" />
              <h2>Global Reach</h2>
              <p>
                With years of export experience, we've established ourselves as a trusted 
                name in the global EV market. Our government authorization allows us to bring 
                cutting-edge electric and used vehicles to customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;