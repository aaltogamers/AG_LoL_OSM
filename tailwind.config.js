module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#212428",
        darkblue: "#060d16",
        link: "#E0BA9E",
        "link-hover": "#ad8f79",
        white: "#f7f7f7",
        darkred: "#371D1E",

      },
      fontFamily: {
        barlow: "Barlow Regular",
        "barlow-bold": "Barlow Bold",
        "barlow-italic": "Barlow Italic",
        "orbitron-black": "Orbitron Black",
        "outfit-bold": "Outfit Bold",
        "outfit-regular": "Outfit Regular",
        "space-grotesk-regular": "Space Grotesk Regular"
      },
      backgroundPosition: {
        "right-offset": "center right -28rem",
      },
    },
  },
  plugins: [],
};
