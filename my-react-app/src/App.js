import React from 'react';

const courses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmuller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id: 2,
    title: "Modern React With Redux)",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
    {
    id: 3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "https://codingthesmartway.com/courses/complete-react-web-app-developer/"

  }
];

function App() {
  
  return (
    <div >
            <h1>Testing</h1>
            {courses.map(function(course){
              return <div>{course.title}</div>
      {/* <h1>Testing if it is Rendering out and printing the code!Hello World!</h1> */}
            })
          }
      </div>
  );
}

export default App;
