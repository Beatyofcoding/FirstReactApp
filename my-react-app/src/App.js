import React, {useState, useEffect, useReducer} from 'react';
import CoursesList from "./CoursesList";
import Search from "./Search";


const courses_data = [
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

// const coursesReducer = (state, action) => {
//   switch(action.type){

//     case "SET_COURSES":
//       return action.payload;
//       case "REMOVE_COURSE":
//         return state.filter(
//           course => action.payload.id !== course.id
//         )
//       default:
//         throw new Error();
//       }
// };
const coursesReducer = (state, action) => {
  switch(action.type) {
    case "FETCH_COURSE_START":
      return {
        ...state,
        isLoading: true

      };
      case "FETCH_COURSES_SUCCESS":
        return {
          ...state,
          isLoading: false
          data: action.payload

        };
    case "REMOVE_COURSE":
      return {
        ...state,
        data :  state.filter(
           course => action.payload.id !== course.id
         )

      };
      default:
        throw new Error();
  }
}
const App = () => {
  const STRAPI_API_ENDPOINT = "http://localhost:1337/courses";
 
  const [courses, dispatchCourses] = useReducer(
    coursesReducer,
    {data: [], isLoading: false}
    );
  const [isLoading, setIsLoading] = useState(false);
 
  const [searchText, setSearchText] = useState(
   localStorage.getItem("searchText") || ""
 );

 
  const handleSearch = event => {
 setSearchText(event.target.value);
//  localStorage.setItem("searchText",event.target.value);
  }
  // Attention
  const handleRemoveCourse = course => {
    dispatchCourses({
      type: "REMOVE_COURSE",
      payload: course
    });
  }

  // const getCoursesAsync = () => 
  //   new Promise(resolve => 
  //     setTimeout(
  //       ()=> resolve({courses: courses_data}),
  //       2000
  //       )
  //    );
  
     useEffect(() => {
       dispatchCourses({type: "FETCH_COURSES_START"})
       fetch(STRAPI_API_ENDPOINT)
        .then(response => response.json())
        .then(result => {
          dispatchCourses({
            type: "FETCH_COURSES_SUCCESS"
            payload: result
           });

          })

        .catch(() => console.log("Error fetching courses from back-end.."))
      
    
     }, []);

  useEffect(() => {
    localStorage.setItem("searchText",searchText)
  }, [searchText]);

  const filteredCourses = courses.data.filter(course =>{
    return course.title.includes(searchText) || course.author.includes(searchText);
  });

  
  
  return (
    <div >
            <h1>Title Of Courses</h1>
            <hr />

          <Search value={searchText}  onSearch={handleSearch} />
          

          {courses.isLoading ? (
            <p>Loading Please Wait ..</p>

          ):(
            <CoursesList courses={filteredCourses} handleRemoveCourse={handleRemoveCourse} />
            
            )}

            {/* <p>Display Courses Test Working :) </p> */}
            
            
      </div>
  );
}


export default App;
