module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "layout-pattern": "url('./assets/images/squares.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
