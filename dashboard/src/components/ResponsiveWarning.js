import React, { useState, useEffect } from "react";

const ResponsiveWarning = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isSmallScreen) {
    return null;
  }

  return (
    <div className="responsive-warning-overlay">
      <div className="responsive-warning-box">
        <div className="warning-header">
          <span className="warning-icon">⚠️</span>
          <h2>Screen Size Not Supported</h2>
        </div>
        
        <div className="warning-content">
          <p>
            This application is currently optimized for <strong>desktop browsers</strong> (1024px and above).
          </p>
          
          <p className="info-text">
            📱 <strong>Mobile and tablet support is in progress!</strong>
          </p>
          
          <p className="suggestion">
            For the best experience, please open this application on a larger screen.
          </p>
        </div>

        <div className="warning-actions">
          <button 
            className="continue-btn" 
            onClick={() => setIsSmallScreen(false)}
          >
            Continue Anyway
          </button>
        </div>

        <div className="warning-footer">
          <p>We're working to make this responsive soon! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWarning;
