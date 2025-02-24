import { useEffect } from "react";

const useParallax = (speed) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-speed]");

      elements.forEach((element) => {
        const scrollPosition = window.scrollY;
        const speedFactor = parseFloat(element.getAttribute("data-speed"));
        element.style.backgroundPosition = `center ${scrollPosition * speedFactor}px`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, [speed]);
};

export default useParallax;

