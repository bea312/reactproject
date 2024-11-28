// src/components/HobbiesList.js
import React from 'react';
import HobbyItem from './HobbyItem';

const HobbiesList = () => {
  const hobbies = ['Reading', 'Swimming', 'Cycling'];
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <HobbyItem key={index} hobby={hobby} />
      ))}
    </ul>
  );
};

export default HobbiesList;
