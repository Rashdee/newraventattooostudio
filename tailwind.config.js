// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Cinzel as default font family
        sans: ['Cinzel', 'serif'],
        // Optional: Keep a secondary font for body text
        body: ['Cinzel', 'sans-serif'],
        // You can also keep cinzel as a separate class
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}