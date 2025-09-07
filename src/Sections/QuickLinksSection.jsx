// src/Sections/QuickLinksSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Tattoo-style SVG icons
const SkullIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2C7 2 3 6 3 11c0 3 1.5 5 3.5 6.5V20a2 2 0 002 2h7a2 2 0 002-2v-2.5C19.5 16 21 14 21 11c0-5-4-9-9-9zM9 17h6M9 21h6M9 13h.01M15 13h.01" />
  </svg>
);

const NeedleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 3l4 4-7 7-4-4 7-7zM2 22l9-9" />
  </svg>
);

const InkBottleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
    <path d="M7 3h10v2H7V3zm1 4h8l2 3v11a1 1 0 01-1 1H7a1 1 0 01-1-1V10l2-3z" />
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2a10 10 0 100 20 10 10 0 000-20zM16 8l-2 5-5 2 2-5 5-2z" />
  </svg>
);

const links = [
  { title: "Portfolio", path: "/portfolio", icon: <SkullIcon /> },
  { title: "Reviews", path: "/reviews", icon: <NeedleIcon /> },
  { title: "Location", path: "/location", icon: <CompassIcon /> },
  { title: "FAQ", path: "/faq", icon: <InkBottleIcon /> },
];

const QuickLinksSection = () => {
  return (
    <section className="py-16 bg-black text-white px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">⚡ Quick Links</h2>
        <p className="text-gray-400">Jump straight to what you need</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {links.map((link, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:bg-gray-700 transition"
          >
            <Link to={link.path} className="flex flex-col items-center gap-3">
              <div className="text-red-500">{link.icon}</div>
              <h3 className="text-lg font-bold">{link.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinksSection;
