import React from 'react';
import '../css/TopSection.css';

interface TopSectionProps {
  imageUrl: string;
  text: string;
}

const TopSection = ({ imageUrl, text }: TopSectionProps) => {
  return (
    <div className="top-section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="top-overlay">
        <h1 className="top-text">{text}</h1>
      </div>
    </div>
  );
};

export default TopSection;