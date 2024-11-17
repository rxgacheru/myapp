import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import NavBar from "./components/Navbar";
import FlashcardQuiz from "./components/FlashcardQuiz";
import About from "./components/About";
import Flashcard from "./components/Flashcard";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { auth } from "./firebaseConfig";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Update auth state based on user presence
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout.");
    }
  };

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/flashcard-quiz" /> : <Login setIsLoggedIn={setIsAuthenticated} />
          }
        />
        <Route
          path="/flashcard-quiz"
          element={isAuthenticated ? <FlashcardQuiz /> : <Navigate to="/" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
