import { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

function Courses() {

  const { courses } = useContext(CourseContext);

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <Link to={`/courses/${course.id}`}>
            {course.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;