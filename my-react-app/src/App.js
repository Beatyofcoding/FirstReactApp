import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testing = {
    testing_one:"Hello",
    testing_two:"World"
  }
  return (
    <div >
      <h1>{testing.testing_one} {testing.testing_two}!</h1>
      {/* <h1>Testing if it is Rendering out and printing the code!Hello World!</h1> */}
    </div>
  );
}

export default App;
