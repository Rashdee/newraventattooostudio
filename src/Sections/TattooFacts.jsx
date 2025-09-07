// src/Sections/TattooFacts.jsx
import { motion } from "framer-motion";

const facts = [
  {
    title: "🌍 Ancient Origins",
    text: "Tattoos have been part of human culture for over 5,000 years, from Egyptian mummies to Polynesian warriors.",
    img: "https://i.ibb.co/0JvHd6g/ancient.jpg",
  },
  {
    title: "💪 Symbols of Strength",
    text: "Skulls, lions, and dragons are often tattooed to represent courage, power, and survival.",
    img: "https://i.ibb.co/kHyc4Hk/strength.jpg",
  },
  {
    title: "🔥 A Personal Story",
    text: "Every tattoo tells a story — whether it’s about love, loss, freedom, or transformation.",
    img: "https://i.ibb.co/5Yt6V6b/story.jpg",
  },
];

const TattooFacts = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          ✨ The World of Tattoos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={fact.img}
                alt={fact.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                <p className="text-gray-300 text-sm">{fact.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TattooFacts;
