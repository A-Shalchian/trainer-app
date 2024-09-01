import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">FitSho</h1>
        <p className="hero-subtitle">
          Your journey to a healthier, fitter life starts here.
        </p>
        <div className="hero-buttons">
          <button
            className="hero-button start-now-button"
            onClick={() => navigate("/programs")}
          >
            Start Now
          </button>
          <button
            className="hero-button learn-more-button"
            onClick={() => navigate("/programs#learn-more")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
