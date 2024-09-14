import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(500); // Default height

  const toggleChatbot = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    const handleResize = () => {
      const height = calculateIframeHeight();
      setIframeHeight(height);
    };

    const calculateIframeHeight = () => {
      let height = 500; // Default height

      // Adjust for smaller screens
      if (window.innerWidth < 900) {
        height = window.innerHeight * 0.7; // 70% of the viewport height for smaller screens/mobile
      }

      return height;
    };

    // Initial resize
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isMinimized ? 'Open Chat' : 'Close Chat'}
      </button>
      {!isMinimized && (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-6ffa26de-1846-4087-81e9-2a9ec717152f/bots/cr419_evCopilot/webchat?__version__=2"
          frameBorder="0"
          className="chatbot-iframe"
          title="Chatbot"
          style={{ height: `${iframeHeight}px` }}
        ></iframe>
      )}
    </div>
  );
};

export default Chatbot;
