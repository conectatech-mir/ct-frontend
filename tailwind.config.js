module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f172b'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
