import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="mycourses">My Courses</Link>

      <Outlet />
    </div>
  );
}

export default Dashboard;