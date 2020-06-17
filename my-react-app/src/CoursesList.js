import React from "react";

const CoursesList = (props) => {
    return props.courses.map(function(course) {
      return (
        <div key={course.id}>
        <span>
          <a href={course.url}><h4>{course.title}></h4></a>
        </span>
      <span>By <strong>{course.author}</strong></span>
      <span> | Video Hours: {course.hours_video}</span>
      <span> | Number Of Lectures: {course.number_of_lectures}</span>
      <span> | Rating: {course.rating}</span>
      <br/><br/>
        </div>
      );
    });
  
  }
  export default CoursesList;
