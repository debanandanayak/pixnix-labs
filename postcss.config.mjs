const config = {
  plugins: ["@tailwindcss/postcss"],
  safelist: ['flip-out-pos'],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: .5 },
          "100%": { opacity: "1" },
        },
      },
    },
  },
};

export default config;
