import { createContext, useState } from "react";

export const CourseContext = createContext();

function CourseProvider({ children }) {

  const [courses, setCourses] = useState([
    { id: 1, name: "React Basics" },
    { id: 2, name: "JavaScript Advanced" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "Python Programming" },
    { id: 5, name: "Data Structures" }
  ]);

  const addCourse = (name) => {
    const newCourse = {
      id: courses.length + 1,
      name: name
    };

    setCourses([...courses, newCourse]);
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;