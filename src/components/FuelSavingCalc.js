import React from 'react';
import './FuelSavingCalc.css';
import '../App.css';
import Footer from './Footer';

function FuelSavingCalc() {
  return (
    <div>
      <div class="logo">
          <img src="/img/ev_rabbit1.jpg"></img>
      </div>
      <div className="top-section">
        <div className="text-center">
          <h1>Fuel savings calculator</h1>
          <h2>Fuel economy is important when buying your next vehicle. See what the savings could add up to between two cars using the input below.</h2>
        </div>
      </div>
      <div className="next-section d-flex">
        <div className="flex-container">
          <div className="inputs">
            <h1>Let's calculate your annual fuel savings.</h1>
            <p>
            Enter the estimated gas price per gallon of fuel, the number of miles you expect to drive each year, and the EPA-estimated fuel economy ratings \(MPG\) of the vehicles you're considering.
            </p>
          </div>
          <div className="outputs">
            <h1>Savings Summary</h1>
            <p>
                Price per gallon:
                <br></br>
                Miles driven per year:
                <br></br>
                Car A's EPA-est. MPG:
                <br></br>
                Car B's EPA-est. MPG:
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FuelSavingCalc;