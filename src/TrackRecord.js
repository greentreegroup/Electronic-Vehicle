import React from "react";
import HistoricalPerformance from "./components/HistoricalPerformance";
import Footer from "./components/Footer";
import FundedOfferings from "./components/FundedOfferings";
import "./App.css";

// Dummy data for the Historical Performance component, replace with real data

const performanceData = {
  completedDeals: 120,
  vehiclesDistributed: 50000,
  totalInvested: 70000,
  vehicleTypes: ["Electronic", "Hybrid"],
  purchaseOverview: {
    // labels: ["2020", "2021", "2022"],
    // data: [20000, 25000, 25000],
  },
};

// Dummy Data for successful funded offerings
const offeringsData = [
  {
    image: "",
    name: "Offering Example 1",
    description: "Description of the offering",

    // Add more offering details as needed
  },
  {
    // Add more offerings as needed
    image: "",
    name: "Offering Example 2",
    description: "Description of the offering",
  },
  {
    // Add more offerings as needed
    image: "",
    name: "Offering Example 3",
    description: "Description of the offering",
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
        <Footer />
        {/* Include any other content specific to this component */}
      </main>
    </div>
  );
}

export default TrackRecord;
