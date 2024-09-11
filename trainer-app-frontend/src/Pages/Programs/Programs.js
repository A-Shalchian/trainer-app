import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Programs.css";

function Programs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null); // State for toggling FAQ

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The free plan is amazing! It offers so much value.",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love the personalized training plan I got in the free version!",
    },
    {
      name: "Robert Johnson",
      feedback:
        "Even the free plan gives you access to everything you need to start your fitness journey.",
    },
  ];

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const nextSlide = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const prevSlide = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index); // Toggle the FAQ open/close
  };

  const faqItems = [
    {
      question: "What is included in the free plan?",
      answer:
        "You get access to most features, a free training and meal plan, 2 free personal trainer sessions, and a free consultation.",
    },
    {
      question: "How can I upgrade to a paid plan?",
      answer:
        "Currently, the Standard and Premium plans are unavailable. Once available, you will be able to upgrade directly from your account page.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The free plan is completely free, and other plans will have clear pricing.",
    },
  ];

  return (
    <div className="programs-page">
      <div className="programs-container">
        {/* Free Plan Card */}
        <div className="program-card">
          <h3>Free Plan</h3>
          <p>This plan includes:</p>
          <ul className="program-perks">
            <li>Access to most features</li>
            <li>Free training and meal plan</li>
            <li>2 free sessions with a personal trainer</li>
            <li>Free consultation</li>
          </ul>
          <button className="select-plan-button">Select</button>
        </div>

        {/* Disabled Standard Plan */}
        <div className="program-card disabled">
          <h3>Standard Plan</h3>
          <p>This plan is not available at the moment.</p>
          <button className="select-plan-button" disabled>
            Select
          </button>
        </div>

        {/* Disabled Premium Plan */}
        <div className="program-card disabled">
          <h3>Premium Plan</h3>
          <p>This plan is not available at the moment.</p>
          <button className="select-plan-button" disabled>
            Select
          </button>
        </div>
      </div>

      {/* Slider with Testimonials */}
      <div className="testimonials-section">
        <h2>What Others Are Saying</h2>
        <div className="slider">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`embla__slide testimonial-card ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <p>"{testimonial.feedback}"</p>
                  <h4>- {testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons under testimonials */}
          <div className="slider-buttons">
            <button className="slider-button" onClick={prevSlide}>
              &#8592;
            </button>
            <button className="slider-button" onClick={nextSlide}>
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <ul className="faq-list">
            {faqItems.map((item, index) => (
              <li
                key={index}
                className="faq-item"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="toggle-icon">
                    {openFAQIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`faq-answer ${
                    openFAQIndex === index ? "open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Programs;
