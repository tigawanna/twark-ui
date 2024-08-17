// @ts-check
/** @type {import('tailwindcss').Config} */
const { parkwindPlugin } = require("@park-ui/tailwind-plugin");
const { defaultDaisyUiThemes } = require("./src/components/daisyui/them-defaults.ts");
const {daisyUIColors} = require("./src/components/daisyui/hsl-config.ts");

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: daisyUIColors,
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("daisify-shadcn"),
    parkwindPlugin,
  ],
  daisyui: {
    themes: [defaultDaisyUiThemes],
  },
};

