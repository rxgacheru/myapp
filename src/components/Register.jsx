import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../firebaseConfig"; // Adjust the path if needed
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    favouriteSong: "",
    milkBeforeCereal: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const register = async () => {
    const { email, password, fullName, favouriteSong, milkBeforeCereal } = formData;

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in the database
      await set(ref(database, "users/" + user.uid), {
        fullName,
        email,
        favouriteSong,
        milkBeforeCereal,
      });

      alert("Registered successfully!");
      navigate("/flashcard-quiz"); // Redirect to flashcard quiz categories
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message);
    }
  };

  return (
    <div className="register-page">
      <h2>Sign Up</h2>
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="fullName">Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChange}
        />

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
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="favouriteSong">Favorite Song</label>
        <input
          type="text"
          id="favouriteSong"
          placeholder="The Best Song Ever"
          value={formData.favouriteSong}
          onChange={handleChange}
        />

        <label htmlFor="milkBeforeCereal">Milk Before Cereal?</label>
        <input
          type="text"
          id="milkBeforeCereal"
          placeholder="Yes | No"
          value={formData.milkBeforeCereal}
          onChange={handleChange}
        />

        <div className="center-button">
          <button type="button" onClick={register}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
