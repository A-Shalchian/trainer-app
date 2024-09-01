import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { setupNavbarScroll } from "./navbarScroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = setupNavbarScroll();
    return cleanup; // Clean up the event listener on unmount
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If there's a token, set isLoggedIn to true
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile"); // Redirect to profile if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">FitSho</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/programs">Programs</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-profile" onClick={handleProfileClick}>
          Profile
        </button>
        <a href="/login" className="navbar-login">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
