import React, { useEffect } from "react";
import "./Navbar.css";
import { setupNavbarScroll } from "./navbarScroll";

function Navbar() {
  useEffect(() => {
    const cleanup = setupNavbarScroll();
    return cleanup; // Clean up the event listener on unmount
  }, []);

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
      <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
