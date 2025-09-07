// src/Sections/AboutTattoos.jsx
import { motion } from "framer-motion";

const facts = [
  {
    title: "🖤 Ancient Origins",
    text: "Tattoos have been around for over 5,000 years, used for rituals, identity, and art.",
  },
  {
    title: "🌎 Worldwide Culture",
    text: "From Polynesian tribes to Japanese Irezumi, tattoos are part of cultures everywhere.",
  },
  {
    title: "💀 Symbols & Meanings",
    text: "Skulls mean strength, phoenix means rebirth, roses mean love and passion.",
  },
  {
    title: "✨ Eternal Story",
    text: "Every tattoo carries a story — your journey, your struggle, your triumph.",
  },
];

const AboutTattoos = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🖤 The World of Tattoos
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          More than ink — tattoos are stories, cultures, and symbols of power.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{fact.title}</h3>
            <p className="text-gray-300">{fact.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutTattoos;
