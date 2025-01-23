/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        vibrate: 'vibrate 1s ease-in-out infinite', // Slower animation with easing
      },
      keyframes: {
        vibrate: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-3px)' }, // Smaller movement
          '100%': { transform: 'translateX(3px)' }, // Smaller movement
        },
      },
    },
  },
  plugins: [],
}
