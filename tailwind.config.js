/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontSize: {
        'xxs': '0.50rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        sarina: ["Sarina", "cursive"],
        barlow: ["Barlow", "sans-serif"],
        mono: ["monospace"],
      },
      extend: {
        colors: {
          darkPrimary: "#181A1B",
          darkSecondary: "#25282A",
          darkWhite: "#f2f5fa",
        },
        listStyleType: {
          square: "square",
          roman: "upper-roman",
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
          "photo-spin": "photo-spin 2s 1 linear forwards",
        },
        keyframes: {
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" },
          },
          "photo-spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },
    },
  },
  plugins: [],
}
