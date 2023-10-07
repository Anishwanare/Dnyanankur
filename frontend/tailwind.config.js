module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slidein: "slidein 5s linear infinite",
        slidein: "slidein 10s linear infinite",
        // Add another animation for mobile
        mobileSlidein: "mobileSlidein 30s linear infinite",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Add keyframes for mobile
        mobileSlidein: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
