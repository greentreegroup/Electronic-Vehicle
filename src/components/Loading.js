// Loading.js
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <h2 style={{marginTop:'50px'}}>Loading...</h2>
      {/* You can add a spinner here */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;