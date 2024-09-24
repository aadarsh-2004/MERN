import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const inputStyle = {
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <div>
      <label>Pick a color: </label>
      <input style={inputStyle} type="color" onChange={(event) => onColorChange(event.target.value)} />
    </div>
  );
};

export default ColorPicker;
