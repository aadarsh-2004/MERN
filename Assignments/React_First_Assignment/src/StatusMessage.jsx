import React from 'react';

const StatusMessage = ({ status }) => {
  const messageStyle = {
    padding: '10px',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: status === 'success' ? '#2ECC71' : '#E74C3C',
    marginBottom: '20px',
  };

  return <div style={messageStyle}>{status === 'success' ? 'Operation was successful' : 'There was an error'}</div>;
};

export default StatusMessage;
