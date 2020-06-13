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
    title: "Modern React With Redux",
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
            <h1>Title Of Courses</h1>
            <hr />
            {courses.map(function(course){
              return (
                <div key={course.id}>
                <span>
                  <a href={course.url}><h4>{course.title}></h4></a>
                </span>
              <span>By <strong>{course.author}</strong></span>
              <span>Video Hours: {course.hours_video}</span>
                </div>
              )
            })
            }
      </div>
  );
}

export default App;
