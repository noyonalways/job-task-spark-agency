/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "0rem",
      },
    },
    extend: {
      fontFamily: {
        nobile: ["Nobile", "serif"],
        actor: ["Actor", "serif"],
        roboto: ["Roboto", "serif"],
        tiltWrap: ["Tilt Warp", "serif"],
      },
    },
  },
  plugins: [],
};
