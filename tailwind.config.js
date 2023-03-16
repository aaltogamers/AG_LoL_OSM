module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0d0d0d",
        red: "#E70657",
      },
      fontFamily: { phage: "Phage Regular" },
      backgroundImage: {
        "teemo-desktop": "url('../images/teemo_desktop.webp')",
        "teemo-mobile": "url('../images/teemo_mobile.webp')",
      },
    },
  },
  plugins: [],
};
