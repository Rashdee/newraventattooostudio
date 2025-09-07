// src/Sections/HeroSection.jsx
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: "#tattoo-special",
        ease: "power2.inOut",
      });
    }, 300); // wait 1s before scrolling
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden flex items-center justify-center">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative circles */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-red-600 rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-xl opacity-10 animate-pulse"></div>

        {/* Main content */}
        <div
          className={`relative z-10 transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-2">
            RAVEN
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-gray-300 mb-8 md:mb-12">
            TATTOO STUDIO
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            INK YOUR STORY.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-red-400 mb-10">
            DARK, BOLD, ETERNAL.
          </p>

          <button
            onClick={handleScroll}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-red-600 text-red-500 font-bold text-base sm:text-lg md:text-xl rounded-md overflow-hidden transition-all duration-500 hover:text-white"
          >
            <span className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative z-10 flex items-center justify-center">
              I WANT TO MAKE A TATTOO
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
