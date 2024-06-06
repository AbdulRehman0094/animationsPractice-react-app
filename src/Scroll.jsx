import React, { useEffect, useRef } from "react";
import "./App.css";

const Scroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.1, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("zoomed-in");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(".content");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      if (scrollContainerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="scroll-container grid justify-items-center"
    >
      <div className="flex h-[50vh]"></div>
      <div className="content">Scroll down to see the zoom effect!</div>
      <div className="flex h-[50vh]"></div>

      <div className="content">Keep scrolling!</div>
      <div className="flex h-[50vh]"></div>

      <div className="content">Almost there!</div>
      <div className="flex h-[50vh]"></div>

      <div className="content">You've reached the end!</div>
    </div>
  );
};

export default Scroll;
