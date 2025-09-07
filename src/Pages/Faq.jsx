import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      q: "😬 Does it hurt?",
      a: "If you think it will hurt, it will. But honestly, it’s less painful than a breakup 💔. And remember, pain is temporary — tattoos are forever!",
    },
    {
      q: "🧼 Do you use sterile equipment?",
      a: "Absolutely! Everything is single-use, sterile, and safe. No sharing, no shortcuts. Hygiene is non-negotiable.",
    },
    {
      q: "⏳ How long does it take to heal?",
      a: "Around 2–4 weeks. Like a new relationship — tender at first, then smooth sailing 😎.",
    },
    {
      q: "🎨 Can I bring my own design?",
      a: "Of course! We’ll work with your design, or add our magic touch if you want it upgraded.",
    },
    {
      q: "💸 How much does it cost?",
      a: "Depends on size, detail, and placement. Small tattoos = small bill. Big back pieces = big bill. But remember — cheap tattoos aren’t good, and good tattoos aren’t cheap.",
    },
    {
      q: "🔄 Do you offer touch-ups?",
      a: "Yes! We got your back. Free touch-ups within a certain time, because we want your ink looking flawless.",
    },
    {
      q: "🥤 Can I drink before my appointment?",
      a: "Nope! Alcohol thins your blood. You’ll bleed more and the ink won’t sit well. Better stay sober until after.",
    },
    {
      q: "👵 Will my tattoo fade when I’m older?",
      a: "Yes, but so will your memories. Tattoos age gracefully if you take care of them (and use sunscreen, always 🌞).",
    },
    {
      q: "😂 Can I get my ex’s name tattooed?",
      a: "We strongly advise against it… unless you want to come back later for a cover-up 😉.",
    },
    {
      q: "🧙 Are tattoos addictive?",
      a: "100%. Once you get one, you’ll crave more. We’re like tattoo dealers — first one hooks you, the rest make you family.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-lg text-gray-300">
              Real talk + fun talk — everything you wanted to know before
              getting inked at <span className="text-red-400">Raven Studio</span>.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 hover:scale-[1.02] hover:border-red-500 transition duration-300 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-red-400 w-5 h-5" />
                  <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                    {item.q}
                  </span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
