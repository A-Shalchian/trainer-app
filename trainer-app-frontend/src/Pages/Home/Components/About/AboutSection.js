import React from "react";
import "./AboutSection.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About FitSho</h2>
        <p>
          FitSho is your ultimate fitness companion, designed to help you reach
          your health and fitness goals with personalized training plans, expert
          advice, and a supportive community. Whether you're a beginner or an
          experienced athlete, FitSho has everything you need to succeed.
        </p>
        <a href="/about" className="learn-more-button">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
