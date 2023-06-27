/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/lib/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "ibm-plex-serif": ["IBM Plex Serif", "serif"],
        "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        "card-light": "3px 3px black",
        "card-dark": "3px 3px #ffcba4",
      },
      borderRadius: {
        "profile-image": "50%",
      },
      textColor: {
        "onSecondary-dark": "#c0bdbd",
      },
      backgroundColor: {
        dark: "#282c34",
        "secondary-dark": "#404754",
        "hover-dark": "rgb(3 105 161)",
      },
      gridAutoRows: {
        project: "1fr",
      },
      gridTemplateColumns: {
        project: "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      maxWidth: {
        experience: "37em",
      },
    },
  },
  plugins: [],
};
