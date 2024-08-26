//HistoricalPerformance.js 
import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './HistoricalPerformance.css';

// Registering the components required for the bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalPerformance = ({ performanceData }) => {
  // Example data structure for performanceData prop:
  // {
  //   completedDeals: 120,
  //   moneyDistributed: 5000000, // in dollars
  //   totalInvested: 7000000, // in dollars
  //   assetClasses: ['Real Estate', 'Stocks', 'Bonds'],
  //   investmentOverview: {
  //     labels: ['2020', '2021', '2022'],
  //     data: [2000000, 2500000, 2500000],
  //   },
  // }

  const options = {
    responsive: true, // Ensure the chart is responsive
    maintainAspectRatio: true, // Maintain the aspect ratio of the chart
    aspectRatio: 2, // You can adjust this value to change the aspect ratio
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top', // Adjust legend position as needed
      },
      title: {
        display: true,
        text: 'Investment Overview', // Optional: Display a title for the chart
      },
    },
  };
  const data = {
    labels: performanceData.investmentOverview.labels,
    datasets: [
      {
        label: 'Dollars Invested',
        data: performanceData.investmentOverview.data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="historical-performance">
      <h2>Historical Performance Overview</h2>
      <p>Completed Deals: {performanceData.completedDeals}</p>
      <p>Money Distributed to Investors: ${performanceData.moneyDistributed.toLocaleString()}</p>
      <p>Total Amount Invested: ${performanceData.totalInvested.toLocaleString()}</p>
      <p>Asset Classes Funded: {performanceData.assetClasses.join(', ')}</p>
      <div>
        <h3>Investment Overview</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HistoricalPerformance;