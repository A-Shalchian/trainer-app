import React, { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    let currentSection = 0;

    const handleScroll = (event) => {
      event.preventDefault();

      const sections = document.querySelectorAll(".about-section");
      const totalSections = sections.length;
      const direction = event.deltaY > 0 ? 1 : -1;

      currentSection = Math.min(
        Math.max(currentSection + direction, 0),
        totalSections - 1
      );

      sections[currentSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <section className="about-section" id="about-1">
        <div className="about-content">
          <h2>About FitSho</h2>
          <p>
            FitSho is a platform designed to empower individuals on their
            fitness journey. Whether you're just starting or you're a seasoned
            athlete, FitSho has programs tailored to meet your needs.
          </p>
        </div>
      </section>

      <section className="about-section" id="about-2">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At FitSho, our mission is to provide accessible and effective
            fitness solutions that adapt to your lifestyle. We strive to bring
            the best personalized fitness experience to all our users.
          </p>
        </div>
      </section>

      <section className="about-section" id="about-3">
        <div className="about-content">
          <h2>Meet the Team</h2>
          <p>
            FitSho is built by a passionate team of fitness enthusiasts,
            developers, and trainers. We are dedicated to creating an intuitive
            and effective platform for our users.
          </p>
        </div>
      </section>

      <section className="about-section" id="about-4">
        <div className="about-content">
          <h2>Why FitSho?</h2>
          <p>
            FitSho stands out with its innovative approach to fitness programs.
            With real-time updates, adaptive training, and personalized
            suggestions, FitSho is your go-to fitness companion.
          </p>
        </div>
      </section>

      <section className="about-section" id="about-5">
        <div className="about-content">
          <h2>Get in Touch</h2>
          <p>
            We're here to help! Reach out to our team anytime with questions or
            feedback. Your journey is important to us, and we're always here to
            support you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
