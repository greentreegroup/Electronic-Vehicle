import React from 'react';
import HistoricalPerformance from './components/HistoricalPerformance';
import Footer from './components/Footer';
import FundedOfferings from './components/FundedOfferings';
import './App.css';

// Dummy data for the Historical Performance component, replace with real data

const performanceData = {
    completedDeals: 120,
    moneyDistributed: 5000000,
    totalInvested: 7000000,
    assetClasses: ['Real Estate', 'Stocks', 'Bonds'],
    investmentOverview: {
      labels: ['2020', '2021', '2022'],
      data: [2000000, 2500000, 2500000],
    },
  };

  // Dummy Data for suuccessful funded offerings
  const offeringsData = [
    {
      image: 'img/gal-10.jpeg',
      name: 'Offering Example 1',
      description: 'Description of the offering',
      
      // Add more offering details as needed
    },
    {
    // Add more offerings as needed
    image: 'img/gal-7.jpeg',
    name: 'Offering Example 2',
    description: 'Description of the offering',
    },
    {
      // Add more offerings as needed
      image: 'img/gal-4.jpeg',
      name: 'Offering Example 3',
      description: 'Description of the offering',
      },
  ];
function TrackRecord() {
  return (
    <div className="App">
      <main className="App-main">
        <br />
        <h1> Successfully Funded Offerings </h1>
        <FundedOfferings offerings={offeringsData} />        
        <HistoricalPerformance performanceData={performanceData} />
        <Footer/>
        {/* Include any other content specific to this component */}
      </main>
    </div>
  );
}

export default TrackRecord;