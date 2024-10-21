import React from 'react';
import { Globe, Award, MapPin, Key, BarChart2, Lock } from 'lucide-react';
import './Overview.css';

const Feature = ({ Icon, title, description }) => (
  <div className="feature">
    <div className="feature__icon">
      <Icon size={32} />
    </div>
    <h3 className="feature__title">{title}</h3>
    <p className="feature__description">{description}</p>
  </div>
);

const Overview = () => {
  const features = [
    {
      Icon: Globe,
      title: 'Global Reach, Local Expertise',
      description: 'Our network spans across the globe, giving you access to a vast selection of vehicles and parts, no matter where you are.'
    },
    {
      Icon: MapPin,
      title: 'Find Us Near You',
      description: 'With multiple locations nationwide, we\'re never far away when you need expert advice or automotive support.'
    },
    {
      Icon: Key,
      title: 'Unlock Your Dream Car',
      description: 'Get exclusive access to a wide range of vehicles and unlock unbeatable deals on the best cars in the market.'
    },
    {
      Icon: Lock,
      title: 'Secure Online Payments',
      description: 'Shop online for cars and parts with confidence, knowing your transactions are fully secure.'
    }
  ];

  return (
    <div className="overview">
      <h2 className="overview__title">Why Choose Us</h2>
      <div className="features">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Overview;