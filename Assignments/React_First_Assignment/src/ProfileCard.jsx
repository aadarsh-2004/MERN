import React from 'react';

const ProfileCard = ({ name, age, location }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ProfileCard;
