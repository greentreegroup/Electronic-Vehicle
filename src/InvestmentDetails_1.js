import React from 'react';
import InvestmentDetails from './components/InvestmentDetails';
import './App.css';


 // Dummy data for the InvestmentDetails component, replace with real data
 const propertyDetails = {
    address: '2406 Sycamore Fork Road',
    description: 'Sample text : A stunning property located in the heart of Springfield. This charming home offers a spacious layout, modern amenities, and a beautifully landscaped backyard. Perfect for families or as a lucrative investment opportunity.',
    images: [
      '/img/gal-1.jpeg',
      '/img/gal-2.jpeg',
      '/img/gal-3.jpeg',
    ],
    details: {
      price: '$650,000',
      area: '2,500 sqft',
      bedrooms: 4,
      bathrooms: 2,
      yearBuilt: 1995,
    },
    documents: [
      {
        name: 'Property Brochure',
        link: '/documents/property1-brochure.pdf',
      },
      {
        name: 'Investment Analysis',
        link: '/documents/property1-analysis.pdf',
      }
    ],
    investStatus: 'Open for Investment'
  };

function InvestmentDetails_1() {
  return (
    <div className="App">
      <main className="App-main">
        <InvestmentDetails property={propertyDetails} />
        {/* Include any other content specific to this component */}
      </main>
    </div>
  );
}

export default InvestmentDetails_1;