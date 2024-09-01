import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Programs.css";
import image1 from "./Images/img1.jpg";
import image2 from "./Images/img2.jpg";
import image3 from "./Images/img3.jpg";
import image4 from "./Images/img4.jpg";
import image5 from "./Images/img5.jpg";

function Programs() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1, // Scroll one slide at a time
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="programs">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src={image1} alt="Program 1" />
          </div>
          <div className="embla__slide">
            <img src={image2} alt="Program 2" />
          </div>
          <div className="embla__slide">
            <img src={image3} alt="Program 3" />
          </div>
          <div className="embla__slide">
            <img src={image4} alt="Program 4" />
          </div>
          <div className="embla__slide">
            <img src={image5} alt="Program 5" />
          </div>
        </div>
      </div>
      <div className="embla__buttons">
        <button
          className="embla__button embla__button--prev"
          onClick={scrollPrev}
        >
          &larr; {/* Left arrow */}
        </button>
        <button
          className="embla__button embla__button--next"
          onClick={scrollNext}
        >
          &rarr; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
}

export default Programs;
