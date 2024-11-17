import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Cardify</Link>
      </div>
      <div className="nav-links">
        {isAuthenticated && <Link to="/flashcard-quiz">Categories</Link>}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="auth-actions">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/register" className="register-link">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
