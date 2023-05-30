const { addDynamicIconSelectors } = require("@iconify/tailwind")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: { fontFamily: { clock: ["Rubik"] } },
  plugins: [addDynamicIconSelectors()],
}
