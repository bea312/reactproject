// src/components/HoverBox.js
import React, { useState } from 'react';

const HoverBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        width: '200px',
        height: '200px',
        transition: 'background-color 0.3s'
      }}
    />
  );
};

export default HoverBox;
