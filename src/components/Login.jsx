import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Adjust the path if needed
import { signInWithEmailAndPassword } from "firebase/auth";
import "../App.css"; // Ensure this imports the provided styles

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const login = async () => {
    const { email, password } = formData;

    try {
      // Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true); // Update authentication state in the parent
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message); // Show error message
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={login}>
          Login
        </button>
        <p>
          Don't have an account? <a href="/register">Register here</a>.
        </p>
      </form>
    </div>
  );
};

export default Login;
