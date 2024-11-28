// src/components/Button.js
import React from 'react';

const Button = ({ text, color }) => (
  <button style={{ backgroundColor: color }}>
    {text}
  </button>
);

export default Button;
