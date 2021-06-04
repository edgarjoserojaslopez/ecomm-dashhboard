module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      half: "50%",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      display: ["Nunito", "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      backgroundImage: (theme) => ({
        "layout-pattern": "url('./assets/images/squares.png')",
        "image-pattern": "url('./assets/images/squares.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
