import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function AddCourse() {

  const [courseName, setCourseName] = useState("");

  const { addCourse } = useContext(CourseContext);

  const handleAdd = () => {

    if (!courseName) return;

    addCourse(courseName);

    setCourseName("");
  };

  return (
    <div>

      <h3>Add New Course</h3>

      <input
        type="text"
        placeholder="Enter course name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Course
      </button>

    </div>
  );
}

export default AddCourse;


