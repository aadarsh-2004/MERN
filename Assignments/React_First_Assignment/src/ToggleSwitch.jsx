import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#9B59B6',
    color: '#fff',
  };

  return <button style={buttonStyle} onClick={toggleState}>Toggle</button>;
};

export default ToggleSwitch;
