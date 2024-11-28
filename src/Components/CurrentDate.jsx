// src/components/CurrentDate.js
import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date().toLocaleDateString();
  return <p>Today's date is {currentDate}</p>;
};

export default CurrentDate;
