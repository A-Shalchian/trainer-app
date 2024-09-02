import React from "react";
import "./Hero.css";
import Logo from "./../../Assets/Images/logo2.png"; // Update with the actual path to your logo
import { FaArrowDown } from "react-icons/fa"; // Import the icon from react-icons
import BackgroundImage from "./../../Assets/Images/bg-hero.jpg"; // Update with the actual path to your background image

function Hero() {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: "smooth" });
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
          <p className="hero-subtitle">
            Your journey to a healthier, fitter life starts here.
          </p>
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
