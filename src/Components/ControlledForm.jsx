// src/components/ControlledForm.js
import React, { useState } from 'react';

const ControlledForm = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
      </form>
      <p>You entered: {value}</p>
    </div>
  );
};

export default ControlledForm;
