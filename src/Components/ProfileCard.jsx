// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, age, email }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Email: {email}</p>
  </div>
);

export default ProfileCard;
