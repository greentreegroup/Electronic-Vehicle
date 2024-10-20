import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(500);

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

      if (window.innerWidth < 900) {
        height = window.innerHeight * 0.7; // Adjust for smaller screens
      }

      return height;
    };

    handleResize(); // Initial resize
    window.addEventListener('resize', handleResize); // Resize listener

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`chatbot-container ${isMinimized ? 'minimized' : ''}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        {isMinimized ? <MessageCircle size={24} /> : <X size={24} />}
      </button>
      {!isMinimized && (
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-6ffa26de-1846-4087-81e9-2a9ec717152f/bots/cr419_chatbot/webchat?__version__=2"
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
