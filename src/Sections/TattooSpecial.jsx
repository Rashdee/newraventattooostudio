// src/Sections/TattooSpecial.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skull, Syringe } from "lucide-react"; // tattoo-style icons

gsap.registerPlugin(ScrollTrigger);

const media = [
  {
    type: "image",
    src: "https://images.pexels.com/photos/1777467/pexels-photo-1777467.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Every ink has a story 🖤",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/2200913/pexels-photo-2200913.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Strength in lines 💪",
  },
  {
    type: "image",
    src: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/Tattoo_-_Gothic_Art.jpg?v=1756636603",
    caption: "The art in motion 🎥",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1865736/pexels-photo-1865736.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "A mark that lasts 🔥",
  },
];



const TattooSpecial = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".fade-item");

    // Desktop fade-in animation
    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Animate card change on mobile
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section
      id="tattoo-special"
      ref={sectionRef}
      className="bg-black py-20 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          ✨ If you have a tattoo,{" "}
          <span className="text-red-500">you carry something special</span>
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {media.map((item, i) => (
            <div
              key={i}
              className="fade-item relative rounded-xl overflow-hidden group shadow-lg"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  muted
                  loop
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-lg font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div
            ref={cardRef}
            key={activeIndex}
            className="relative w-full max-w-xs h-64 rounded-xl overflow-hidden shadow-lg"
          >
            {media[activeIndex].type === "image" ? (
              <img
                src={media[activeIndex].src}
                alt={media[activeIndex].caption}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={media[activeIndex].src}
                controls
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
              <p className="text-sm font-semibold">
                {media[activeIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full max-w-xs mt-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-red-600 text-white shadow-md active:scale-90 transition flex items-center justify-center"
            >
              <Skull size={20} />
            </button>
            <div className="flex space-x-2">
              {media.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${
                    i === activeIndex ? "bg-red-500 scale-110" : "bg-gray-500"
                  }`}
                ></span>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-red-600 text-white shadow-md active:scale-90 transition flex items-center justify-center"
            >
              <Syringe size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TattooSpecial;
