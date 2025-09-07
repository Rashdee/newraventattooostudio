import { useState, useEffect, useRef } from "react";

const TextReveal = () => {
  const words = ["Raven", "Tattooo", "Studio"]; // each word separately
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [lines, setLines] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (currentWordIndex >= words.length) return;

    let i = 0;
    const word = words[currentWordIndex];
    setCurrentText(""); // reset for this word

    const interval = setInterval(() => {
      setCurrentText(word.slice(0, i + 1));
      i++;
      if (i >= word.length) {
        clearInterval(interval);
        // after typing finishes, move to next word
        setTimeout(() => {
          setLines((prev) => [...prev, word]); // save full word in lines
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentText("");
        }, 400); // small pause before next word
      }
    }, 150);

    return () => clearInterval(interval);
  }, [hasStarted, currentWordIndex]);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="text-center">
        {lines.map((line, idx) => (
          <h1
            key={idx}
            className="text-6xl sm:text-8xl font-extrabold tracking-wider leading-tight"
          >
            {line}
          </h1>
        ))}
        {currentText && (
          <h1 className="text-6xl sm:text-8xl font-extrabold tracking-wider leading-tight">
            {currentText}
          </h1>
        )}
      </div>
    </section>
  );
};

export default TextReveal;
