const ContactHighlight = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 py-20 px-6 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-red-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        CONNECT WITH US ✨
      </h2>

      {/* Full Email - responsive */}
      <p className="text-base sm:text-lg md:text-2xl font-mono mb-12 break-all leading-relaxed">
        <span className="text-red-400">gika</span>
        <span className="text-purple-400">@</span>
        <span className="text-green-400">raventattooostudio</span>
        <span className="text-cyan-400">.com</span>
        <span className="text-yellow-400">@gmail.com</span>
      </p>

      {/* Breakdown */}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
        {/* Tattoo Maker */}
        <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition">
          <h3 className="text-lg font-bold text-red-400">👤 Tattoo Maker</h3>
          <p className="text-gray-300">gika</p>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com/raventattooostudio"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition"
        >
          <h3 className="text-lg font-bold text-purple-400">📸 Instagram</h3>
          <p className="text-gray-300">@raventattooostudio</p>
        </a>

        {/* Domain */}
        <a
          href="https://raventattooostudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition"
        >
          <h3 className="text-lg font-bold text-cyan-400">🌐 Domain</h3>
          <p className="text-gray-300">raventattooostudio.com</p>
        </a>

        {/* Email */}
        <a
          href="mailto:gika.raventattooostudio.com@gmail.com"
          className="block bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition"
        >
          <h3 className="text-lg font-bold text-yellow-400">📧 Full Email</h3>
          <p className="text-gray-300 break-all">
            gika.raventattooostudio.com@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default ContactHighlight;
