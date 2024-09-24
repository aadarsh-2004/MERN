import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    margin: '5px',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#3498DB',
    color: '#fff',
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Count: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
