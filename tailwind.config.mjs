/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: '#fcfbea',
          100: '#faf5c7',
          200: '#f6e992',
          300: '#f0d654',
          400: '#ebc534',
          500: '#daaa18',
          600: '#bc8412',
          700: '#965f12',
          800: '#7c4b17',
          900: '#6a3e19',
          950: '#3e210a',
        },
        neutral: {
          50: "#F1F3FC",
          100: "#DFE5F8",
          200: "#C2CEF3",
          300: "#A0B5ED",
          400: "#7C9DE6",
          500: "#5987E0",
          600: "#4471C1",
          700: "#365B9D",
          800: "#29477D",
          900: "#132546",
          950: "#0A172F"

        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);",
          },
        },
        fadeInShadowDark: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);",
          },
        },
        fadeUp: {
          "0%": { transform: "translateY(1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeUp: "fadeUp 500ms ease-in-out forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
