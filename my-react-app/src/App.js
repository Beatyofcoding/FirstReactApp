import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function getTestMsg(){
    return "Printing Test From Function";
  }
  return (
    <div >
            <h1>{getTestMsg()}</h1>
      {/* <h1>Testing if it is Rendering out and printing the code!Hello World!</h1> */}
    </div>
  );
}

export default App;
