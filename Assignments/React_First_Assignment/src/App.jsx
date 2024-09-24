import React, { useState } from 'react';
import Greeting from './Greeting';
import ProfileCard from './ProfileCard';
import StatusMessage from './StatusMessage';
import Counter from './Counter';
import LikeButton from './LikeButton';
import Timer from './Timer';
import ColorPicker from './ColorPicker';
import TextInput from './TextInput';
import ToggleSwitch from './ToggleSwitch';
import TodoList from './TodoList';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [inputText, setInputText] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const initialLikeCount = 0;
  const startTime = 60;
  const todos = ['Buy Himalyan', 'Go to Ladakh', 'Spend Quality Time'];

  const toggleState = () => {
    setIsToggled(!isToggled);
  };

  const containerStyle = {
    paddingLeft: '240px',
    paddingTop: '40px',
    paddingBottom: '240px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  return (
    <div style={containerStyle}>


      <Greeting name="Aadarsh Soni" />
      <ProfileCard name="Aadarsh Soni" age={20} location="Udaipur" />
      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <Counter />
      <br />
      <LikeButton likeCount={initialLikeCount} />
      <Timer start={startTime} />

      <div style={{ padding: '20px'}}>
        <h2>Selected Color: {selectedColor}</h2>
        <ColorPicker onColorChange={setSelectedColor} />
      </div>
      <br />
      <div style={{ padding: '20px'}}>
        <h2>Typed Text: {inputText}</h2>
        <TextInput onInputChange={setInputText} />
      </div>
      <br />
      <div style={{ padding: '20px'}}>
        <h2>Toggle State: {isToggled ? 'ON' : 'OFF'}</h2>
        <ToggleSwitch toggleState={toggleState} />
      </div>
      <br />
      <div style={{ padding: '20px'}}>
        <h2>My Todo List:</h2>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
