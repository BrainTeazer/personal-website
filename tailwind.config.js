/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/lib/**/*.{html,js,svelte,ts}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
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
        skill: "1fr",
      },
      gridTemplateColumns: {
        project: "repeat(auto-fill, minmax(16rem, 1fr))",
        skill: "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      maxWidth: {
        experience: "37em",
        skillLg: "calc(100% * (1/5))",
        skillSm: "calc(100% * (1/4))",
        skill: "calc(100% * (1/3))",
      },
      width: {
        skill: "calc(100% * (1/3))",
        skills: "calc(10em * 3)",
        
        skillSm: "calc(100% * (1/4))",
        skillsSm: "calc(10em * 4)",

        skillLg: "calc(100% * (1/5))",
        skillsLg: "calc(10em * 5)",
      }
    },
  },
  plugins: [],
};
