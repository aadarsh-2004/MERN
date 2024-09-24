import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
  const [likes, setLikes] = useState(likeCount);

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#E67E22',
    color: '#fff',
  };

  return (
    <button style={buttonStyle} onClick={() => setLikes(likes + 1)}>
      Like {likes}
    </button>
  );
};

export default LikeButton;
