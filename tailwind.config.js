/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/lib/**/*.{html,js,svelte,ts}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      boxShadow: {
        "card-light": "3px 3px black",
        "card-dark": "3px 3px #ffcba4",
      },

      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "ibm-plex-serif": ["IBM Plex Serif", "serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
