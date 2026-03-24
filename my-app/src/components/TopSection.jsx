import React from 'react';
import '../css/TopSection.css';

const TopSection = ({ imageUrl, text }) => {
  return (
    <div className="top-section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="top-overlay">
        <h1 className="top-text">{text}</h1>
      </div>
    </div>
  );
};

export default TopSection;