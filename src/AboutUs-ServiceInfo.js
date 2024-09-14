import React from 'react';
import './AboutUs-ServiceInfo.css';
import './App.css';
import Footer from './components/Footer';

function AboutUsServiceInfo() {
  return (
    <div>
      <div className="top-section d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>Welcome to EVrabbit</h1>
          <h2>Discover more about our amazing team and mission.</h2>
        </div>
      </div>
      <div className="next-section d-flex">
        <div className="flex-container">
          <div className="flex-item">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide outstanding solutions that drive innovation and growth. We are committed to delivering exceptional services and products that not only meet but exceed our clients' expectations. Our team of dedicated professionals works tirelessly to ensure that every project is executed with the highest standards of quality and excellence. By leveraging cutting-edge technology and best practices, we strive to address complex challenges and create sustainable value for our clients. We believe in building strong, long-term relationships with our partners and customers through transparent communication and a shared commitment to success. Our mission is not just about achieving business goals; it’s about making a meaningful impact in the communities we serve and contributing positively to the industry at large. We are passionate about what we do, and our mission drives us to continuously improve and innovate.
            </p>
          </div>
          <div className="flex-item">
            <h1>Our Team</h1>
            <p>
              At our company, our team is our greatest asset. Comprising a diverse group of talented professionals, each member of our team brings a wealth of experience and expertise to the table. Our team members are selected for their exceptional skills, innovative thinking, and unwavering dedication to our mission. We foster a collaborative environment where creativity and problem-solving thrive, and where every individual's contribution is valued and recognized. Our team is united by a shared passion for excellence and a commitment to delivering results. From seasoned industry veterans to emerging young talents, our team is equipped to handle the most challenging projects with professionalism and ingenuity. We invest in our people by providing ongoing training and development opportunities to ensure that they stay ahead of industry trends and continue to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsServiceInfo;