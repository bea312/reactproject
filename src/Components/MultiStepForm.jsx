// src/components/MultiStepForm.js
import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', address: '', payment: '' });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <button onClick={handlePrevStep}>Back</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <input
            type="text"
            placeholder="Payment Info"
            value={formData.payment}
            onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
          />
          <button onClick={handlePrevStep}>Back</button>
          <button onClick={() => console.log(formData)}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
