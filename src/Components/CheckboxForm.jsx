// src/components/CheckboxForm.js
import React, { useState } from 'react';

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(prevState => 
      prevState.includes(value) 
        ? prevState.filter(item => item !== value)
        : [...prevState, value]
    );
  };

  return (
    <div>
      <form>
        <label>
          <input 
            type="checkbox" 
            value="Option 1" 
            onChange={handleCheckboxChange} 
          />
          Option 1
        </label>
        <br />
        <label>
          <input 
            type="checkbox" 
            value="Option 2" 
            onChange={handleCheckboxChange} 
          />
          Option 2
        </label>
        <br />
        <label>
          <input 
            type="checkbox" 
            value="Option 3" 
            onChange={handleCheckboxChange} 
          />
          Option 3
        </label>
      </form>
      <p>Selected options: {selectedOptions.join(', ')}</p>
    </div>
  );
};

export default CheckboxForm;
