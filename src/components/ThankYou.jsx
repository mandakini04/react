import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-animation">
        {/* Your animation here */}
        <h1>Thank You!</h1>
      </div>
      <button onClick={handleBack}>OK</button>
    </div>
  );
};

export default ThankYou;
