import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseDetails() {

  const { id } = useParams();
  const { courses } = useContext(CourseContext) || {};

  if (!courses) {
    return <p>Loading...</p>;
  }

  const course = courses.find(c => c.id === Number(id));

  return (
    <div>
      <h2>Course Details</h2>

      {course ? (
        <>
          <p>Course ID: {course.id}</p>
          <p>Course Name: {course.name}</p>
        </>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
}

export default CourseDetails;