module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#093d71",
        secondary: "#d48f3d"
      },
    },
  },
  variants: {
    extend: {
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
      gap: ["responsive", "hover", "focus"],
      container: ["responsive"],
    },
  },
  plugins: [],
};
