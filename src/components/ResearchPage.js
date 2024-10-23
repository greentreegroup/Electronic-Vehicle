import React from 'react';
import './ResearchPage.css';
import Footer from './Footer';


const ResearchPage = () => {
  return (
    <div className="research-page">
      <h1 className="page-title">
      Discover the Best Vehicle for Your Needs
      </h1>
      <p>
      Find your perfect car by exploring brands, fuel options, and types. 
      Use our tools to make informed decisions with confidence.
          </p>

      <div className="search-bar">
        <input type="text" placeholder="Search by make, model, or keyword" />
        <button>Search</button>
      </div>

      <section className="research-section">
        <h2 style={{color:'white'}}>Research your next car</h2>
        <h6 style={{color:'white'}}>Research alternative fuel options</h6>
        <div className="alternative-fuel-options">
          <div className="option">Full electric</div>
          <div className="option">Plug-in hybrid</div>
          <div className="option">Hybrid</div>
        </div>
        <div className="research-by-type">
          <h3 style={{color:'white'}}>Research by type</h3>
          <div className="body-types">
            <div className="type">
              SUVs & crossovers
              <img src="img/SUV-white.jpeg" alt="SUVs" />
            </div>
            <div className="type">
              Trucks
              <img src="img/truck-white.jpeg" alt="Trucks" />
            </div>
            <div className="type">
              Sedans
              <img src="img/sedan-white.jpeg" alt="Sedans" />
            </div>
            <div className="type">
              Coupes
              <img src="img/coupe-white.jpeg" alt="Coupes" />
            </div>
            <div className="type">
              Hatchbacks
              <img src="img/hatchback-white.jpeg" alt="Hatchbacks" />
            </div>
            <div className="type">
              Convertibles
              <img src="img/convert-white.jpeg" alt="Convertibles" />
            </div>
            <div className="type">
              Vans & minivans
              <img src="img/van-white.jpeg" alt="Vans & Minivans" />
            </div>
            <div className="type">
              Wagons
              <img src="img/wagon-white.jpeg" alt="Wagons" />
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
  <h2>Helpful tools</h2>
  <div className="tools">
    <div className="tool">
      <div className="tool-icon">
        <img src="/img/fuel-icon.png" alt="EV Charging Cost Calculator" />
      </div>
      <div className="tool-text">
        <h3>EV charging cost calculator</h3>
        <p>Estimate electric car charging costs in your area</p>
      </div>
    </div>
    <div className="tool">
      <div className="tool-icon">
        <img src="img/car-icon.jpeg" alt="Trim Comparison Tool" />
      </div>
      <div className="tool-text">
        <h3>Trim comparison tool</h3>
        <p>Explore trim and model similarities and differences</p>
      </div>
    </div>
    <div className="tool">
      <div className="tool-icon">
        <img src="img/calc-icon.png" alt="Fuel Savings Calculator" />
      </div>
      <div className="tool-text">
        <h3>Fuel savings calculator</h3>
        <p>See how fuel economy affects total cost to own</p>
      </div>
    </div>
  </div>
</section>

<section className="brand-research-section">
  <h2>Research by brand</h2>
  <div className="brand-list">
    <div>Acura</div>
    <div>Alfa Romeo</div>
    <div>Audi</div>
    <div>BMW</div>
    <div>Buick</div>
    <div>Cadillac</div>
    <div>Chevrolet</div>
    <div>Chrysler</div>
    <div>Dodge</div>
    <div>Fiat</div>
    <div>Ford</div>
    <div>Genesis</div>
    <div>GMC</div>
    <div>Honda</div>
    <div>Hyundai</div>
    <div>Infiniti</div>
    <div>Jaguar</div>
    <div>Jeep</div>
    <div>Kia</div>
    <div>Land Rover</div>
    <div>Lexus</div>
    <div>Lincoln</div>
    <div>Lucid</div>
    <div>Mazda</div>
    <div>Mercedes-Benz</div>
    <div>Mini</div>
    <div>Mitsubishi</div>
    <div>Nissan</div>
    <div>Polestar</div>
    <div>Porsche</div>
    <div>Ram</div>
    <div>Rivian</div>
    <div>Scion</div>
    <div>Smart</div>
    <div>Subaru</div>
    <div>Tesla</div>
    <div>Toyota</div>
    <div>Volkswagen</div>
    <div>Volvo</div>
  </div>
  
</section>
<Footer className="research-footer" />
    </div>
   
  );
  
};

export default ResearchPage;