/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/hero-bg.jpg')",
        "hero-bg2": "url('/assets/hero-bg2.jpg')",
        "pattern-bg": "url('/assets/bgPattern.svg')",
      },
      colors: {
        primary: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" },

        apricusblue: {
          50: "#e8e9eb",
          100: "#bbbdc4",
          200: "#8e929d",
          300: "#606676",
          400: "#333a4f",
          500: "#1c243b",
          600: "#192035",
          700: "#141929",
          800: "#0e121e",
          900: "#080b12",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: ["Times New Roman", "Times", "serif"],
    },
  },
  plugins: [
    // [
    //   "@fullhuman/postcss-purgecss",
    //   {
    //     content: [
    //       "./pages/**/*.{js,jsx,ts,tsx}",
    //       "./components/**/*.{js,jsx,ts,tsx}",
    //     ],
    //     defaultExtractor: (content) =>
    //       content.match(/[\w-/:]+(?<!:)/g) || [],
    //   },
    // ]
  ],
};
