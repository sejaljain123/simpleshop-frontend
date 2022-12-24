module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {    animation: ['group-hover'],},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
}
