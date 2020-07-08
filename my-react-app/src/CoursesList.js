import React from "react";

const CoursesList = ({courses, handleRemoveCourse}) => {
    return courses.map(course => {
      return (
        <div key={course.id}>
        <span>
          <a href={course.url}><h4>{course.title}</h4></a>
        </span>
      <span>By <strong>{course.authors.map(author => author.first_name + " " + author.last_name)}</strong></span>
      <span> | Video Hours: {course.hours_video}</span>
      <span> | Number Of Lectures: {course.number_of_lectures}</span>
      <span> | Rating: {course.rating}</span>
      <br/><br/>
      <span>
        <button type="button" onClick={() => handleRemoveCourse(course)}>
          Remove
        </button>
      </span>
      <br/><br/>
        </div>
      );
    });
  
  }
  export default CoursesList;
