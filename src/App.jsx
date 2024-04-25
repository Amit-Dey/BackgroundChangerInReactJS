import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const [color, setColor] = useState('white');

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <header className="App-header">
        <h1>Background Changer</h1>
        <p>Click the buttons to change the background color</p>

        <div className='buttons'>
          <Button setColor={setColor} color="red" />
          <Button setColor={setColor} color="green" />
          <Button setColor={setColor} color="blue" />
          <Button setColor={setColor} color="yellow" />
          <Button setColor={setColor} color="purple" />
          <Button setColor={setColor} color="white" />
          <Button setColor={setColor} color="black" />

        </div>
      </header>
    </div>
  );
}
function Button({ setColor, color }) {
  return (
    <button className={color} onClick={() => setColor(color)}>{color}</button>
  );
}

Button.propTypes = {
  setColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default App;

