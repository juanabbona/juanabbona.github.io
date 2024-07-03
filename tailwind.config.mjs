import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-sand-light": "#FDF8EC",
        "brand-sand": "#FBF2DE",
        "brand-sand-dark": "#F9EAC8",
        "brand-brown": "#3D2C2E",
        "brand-orange": "#F58549",
      },
      fontFamily: {
        sans: ["Raleway Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
