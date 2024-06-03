import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "almost-full": "95%",
      },
      backgroundImage: {
        'backgroundImage': "url('./static/backgroundImage.png')",
        'imageTitle': "url('./static/titleImage.png')",
      },
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: '0',
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
