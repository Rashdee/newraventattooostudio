// src/Sections/TattooStyles.jsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const styles = [
  {
    name: "Minimal",
    vibe: "✨ Simple & Elegant",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_minimal-_simple_elegant.jpg?v=1756636115",
  },
  {
    name: "Realism",
    vibe: "🎭 Life-like Details",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Realism_-_Life-like_Details.jpg?v=1756636116",
  },
  {
    name: "Tribal",
    vibe: "🖤 Bold & Ancient",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Tribal_-_Bold_Ancient.jpg?v=1756636116",
  },
  {
    name: "Japanese",
    vibe: "🐉 Myth & Power",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_japanese_-_myth_power.jpg?v=1756636116",
  },
  {
    name: "Geometric",
    vibe: "🔺 Modern & Sharp",
    img: "https://cdn.shopify.com/s/files/1/0896/3670/0447/files/create_a_tottoo_image_Geometric_-_Modern_Sharp.jpg?v=1756636116",
  },
];

const TattooStyles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % styles.length);
    }, 3000); // 3s
    return () => clearInterval(intervalRef.current);
  }, []);

  // Handle swipe
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      // swipe left
      setActiveIndex((prev) => (prev + 1) % styles.length);
    } else if (info.offset.x > 50) {
      // swipe right
      setActiveIndex((prev) =>
        prev === 0 ? styles.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">🎨 Tattoo Styles You’ll Love</h2>
        <p className="text-gray-400">
          Each tattoo tells a story — find the style that matches your soul.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
        {styles.map((style, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={style.img}
              alt={style.name}
              className="w-full h-52 object-cover group-hover:opacity-60 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-2xl font-bold">{style.name}</h3>
              <p className="text-red-400 font-semibold">{style.vibe}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden relative w-full max-w-xs mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="relative rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <img
              src={styles[activeIndex].img}
              alt={styles[activeIndex].name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <h3 className="text-2xl font-bold">{styles[activeIndex].name}</h3>
              <p className="text-red-400 font-semibold">
                {styles[activeIndex].vibe}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {styles.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === activeIndex ? "bg-red-500 scale-110" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TattooStyles;
