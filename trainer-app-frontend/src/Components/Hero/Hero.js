import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Hero.css";
import Logo from "./../../Assets/Images/logo2.png";
import { FaArrowDown } from "react-icons/fa";
import BackgroundImage from "./../../Assets/Images/bg-hero.jpg";

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate function

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: "smooth" });
  };

  const goToPrograms = () => {
    navigate("/programs"); // Navigate to the /programs page when button is clicked
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-container">
            <img src={Logo} alt="FitSho Logo" className="hero-logo" />
            <h1 className="hero-title">FitSho</h1>
          </div>
          <p className="hero-subtitle animated-text">
            Your journey to a healthier, fitter life starts here.
          </p>
          <button className="cta-button" onClick={goToPrograms}>
            Join Now
          </button>
          <button
            className="hero-scroll-button"
            onClick={scrollDown}
            aria-label="Scroll down to the next section"
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
