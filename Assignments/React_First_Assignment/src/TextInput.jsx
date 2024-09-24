import React, { useState } from 'react';

const TextInput = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '10px',
    marginBottom: '10px',
  };

  return (
    <div>
      <label>Input Text: </label>
      <input style={inputStyle} type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default TextInput;
