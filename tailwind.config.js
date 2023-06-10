/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [
      {
        mytheme: {

          "neutral": "#201924",

          "base-100": "#f2f2f3",

          "info": "#759be6",

        },
      },
    ],
  },
}

