import React from 'react';

const courses = [
  {
    id: 1;
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmuller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    
  }
]

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
