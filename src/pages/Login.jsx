import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const loginStudent = () => {
    localStorage.setItem("role", "student");
    navigate("/dashboard");
  };

  const loginAdmin = () => {
    localStorage.setItem("role", "admin");
    navigate("/admin");
  };

  return (
    <div>
      <h2>Login</h2>

      <button onClick={loginStudent}>
        Login as Student
      </button>

      <button onClick={loginAdmin}>
        Login as Admin
      </button>

    </div>
  );
}

export default Login;