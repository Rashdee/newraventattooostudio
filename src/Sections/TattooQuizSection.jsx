// src/Sections/TattooQuizSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TattooQuizSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const quizSteps = [
    {
      question: "🤔 Feeling confused about your tattoo placement?",
      key: "place",
      options: [
        { label: "💪 Shoulder", value: "shoulder", color: "text-blue-400" },
        { label: "🦾 Bicep", value: "bicep", color: "text-purple-400" },
        { label: "❤️ Chest", value: "chest", color: "text-red-400" },
        { label: "✨ Custom Place", value: "custom", color: "text-yellow-400" },
      ],
    },
    {
      question: "🎨 What vibe do you want your tattoo to give?",
      key: "style",
      options: [
        { label: "🌑 Dark & Bold", value: "dark bold tattoo", color: "text-gray-300" },
        { label: "🕉️ Spiritual", value: "spiritual tattoo", color: "text-indigo-400" },
        { label: "🎉 Fun & Creative", value: "fun creative tattoo", color: "text-pink-400" },
      ],
    },
    {
      question: "📏 Pick your tattoo size!",
      key: "size",
      options: [
        { label: "🔹 Small", value: "small tattoo", color: "text-green-400" },
        { label: "🔸 Large", value: "large tattoo", color: "text-orange-400" },
      ],
    },
    {
      question: "🎭 What kind of ink do you like?",
      key: "ink",
      options: [
        { label: "🌈 Colorful", value: "colorful tattoo", color: "text-yellow-300" },
        { label: "⚫ Black & Grey", value: "black grey tattoo", color: "text-gray-400" },
      ],
    },
  ];

  // Colors for progress bar (one per step)
  const progressColors = ["bg-blue-400", "bg-pink-400", "bg-green-400", "bg-yellow-400"];

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    if (step < quizSteps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      setTimeout(() => setShowWhatsapp(true), 2000);
    }
  };

  const sendToWhatsapp = () => {
    const message = `Hey tattoo maker 👋, I want a ${answers.size}, ${answers.ink}, ${answers.style} on my ${answers.place}!`;
    const url = `https://wa.me/918360791933?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 flex flex-col items-center justify-center">
      {/* Quiz Questions */}
      {!showResult && (
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl w-full text-center"
          >
            {/* Question */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {quizSteps[step].question}
            </h2>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-8 flex">
              {quizSteps.map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-full ${progressColors[i]} `}
                  initial={{ width: 0 }}
                  animate={{
                    width: i <= step ? `${100 / quizSteps.length}%` : 0,
                  }}
                  transition={{ duration: 0.6 }}
                />
              ))}
            </div>

            {/* Options */}
            <div className="flex flex-col gap-4">
              {quizSteps[step].options.map((opt, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer border-2 border-red-600 rounded-xl py-4 text-xl font-semibold transition-all hover:bg-red-600/20 ${opt.color}`}
                  onClick={() => handleAnswer(quizSteps[step].key, opt.value)}
                >
                  {opt.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Final Result */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Your Tattoo Match!
          </h2>
          <p className="text-lg mb-6">
            Oh wow 😍 You want a{" "}
            <span className="text-red-400">{answers.size}</span>,{" "}
            <span className="text-red-400">{answers.ink}</span>,{" "}
            <span className="text-red-400">{answers.style}</span> on your{" "}
            <span className="text-red-400">{answers.place}</span>!
          </p>

          {showWhatsapp && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={sendToWhatsapp}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-bold transition-all"
            >
              💬 Send to WhatsApp
            </motion.button>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default TattooQuizSection;
