import { formatHex,  interpolate, wcagContrast, type Color, type Oklch } from "culori";

const browser = typeof window !== "undefined";
const isDark = (color: Color | string) => {
  if (wcagContrast(color, "black") < wcagContrast(color, "white")) {
    return true;
  }

  return false;
};

const colorObjToString = ({ l, c, h }: Oklch): string => {
  const cut = (number: number | undefined): number => {
    if (!number) {
      return 0;
    }
    return +number.toFixed(4);
  };
  return `${cut(l) * 100}% ${cut(c)} ${cut(h)}`;
};

const generateForegroundColorFrom = (input: Color | string, percentage = 0.8) => {
  const result = interpolate([input, isDark(input) ? "white" : "black"], "oklch")(percentage);
  return formatHex(`oklch(${colorObjToString(result)})`) as Color | string;
};

const generateDarkenColorFrom = (input: Color | string, percentage = 0.07): Color | string => {
  const result = interpolate([input, "black"], "oklch")(percentage);
  return formatHex(`oklch(${colorObjToString(result)})`) as Color | string;
};

function changeColorValuesToObject(input: string): { l: number; c: number; h: number; a: number } {
  const match = input.match(/(\d+(?:\.\d+)?)%?/g);
  const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
  return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
}

const getColorValueFromTheme = (variable: string) => {
  if (browser) {
    const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
    return formatHex(
      `oklch(${changeColorValuesToObject(colorValues).l} ${
        changeColorValuesToObject(colorValues).c
      } ${changeColorValuesToObject(colorValues).h})`
    );
  }

  return null;
};

const requiredColorNames = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "base-100",
  "info",
  "success",
  "warning",
  "error",
] as const;
const onlyRequiredColorNames = true;

const colors = [
  {
    name: "primary",
    variable: "--p",
    value: getColorValueFromTheme("--p"),
  },
  {
    name: "primary-content",
    variable: "--pc",
    value: getColorValueFromTheme("--pc"),
  },
  {
    name: "secondary",
    variable: "--s",
    value: getColorValueFromTheme("--s"),
  },
  {
    name: "secondary-content",
    variable: "--sc",
    value: getColorValueFromTheme("--sc"),
  },
  {
    name: "accent",
    variable: "--a",
    value: getColorValueFromTheme("--a"),
  },
  {
    name: "accent-content",
    variable: "--ac",
    value: getColorValueFromTheme("--ac"),
  },
  {
    name: "neutral",
    variable: "--n",
    value: getColorValueFromTheme("--n"),
  },
  {
    name: "neutral-content",
    variable: "--nc",
    value: getColorValueFromTheme("--nc"),
  },
  {
    name: "base-100",
    variable: "--b1",
    value: getColorValueFromTheme("--b1"),
  },
  {
    name: "base-200",
    variable: "--b2",
    value: getColorValueFromTheme("--b2"),
  },
  {
    name: "base-300",
    variable: "--b3",
    value: getColorValueFromTheme("--b3"),
  },
  {
    name: "base-content",
    variable: "--bc",
    value: getColorValueFromTheme("--bc"),
  },
  {
    name: "info",
    variable: "--in",
    value: getColorValueFromTheme("--in"),
  },
  {
    name: "info-content",
    variable: "--inc",
    value: getColorValueFromTheme("--inc"),
  },
  {
    name: "success",
    variable: "--su",
    value: getColorValueFromTheme("--su"),
  },
  {
    name: "success-content",
    variable: "--suc",
    value: getColorValueFromTheme("--suc"),
  },
  {
    name: "warning",
    variable: "--wa",
    value: getColorValueFromTheme("--wa"),
  },
  {
    name: "warning-content",
    variable: "--wac",
    value: getColorValueFromTheme("--wac"),
  },
  {
    name: "error",
    variable: "--er",
    value: getColorValueFromTheme("--er"),
  },
  {
    name: "error-content",
    variable: "--erc",
    value: getColorValueFromTheme("--erc"),
  },
] as const;

function darken(name: string, variable: string, source: string, percentage = 0.2) {
  const sourceColor = colors.find((item) => item.name === source);
  return generateDarkenColorFrom(sourceColor?.value ?? "black", percentage);
}
function contrastMaker(name: string, variable: string, source: string, percentage = 0.8) {
  const sourceColor = colors.find((item) => item.name === source);
  return generateForegroundColorFrom(sourceColor?.value ?? "black", percentage);
}

// function generateOptionalColors(): void {
//   // @ts-expect-error
//   colors[9]?.value = darken("base-200", "--b2", "base-100", 0.1);
//   // @ts-expect-error
//   colors[10]?.value = darken("base-300", "--b3", "base-100", 0.2);
//   // @ts-expect-error
//   colors[11]?.value = contrastMaker("base-content", "--bc", "base-100");

//   // @ts-expect-error
//   colors[1]?.value = contrastMaker("primary-content", "--pc", "primary");
//   // @ts-expect-error
//   colors[3]?.value = contrastMaker("secondary-content", "--sc", "secondary");
//   // @ts-expect-error
//   colors[5]?.value = contrastMaker("accent-content", "--ac", "accent");
//   // @ts-expect-error
//   colors[7]?.value = contrastMaker("neutral-content", "--nc", "neutral");
//   // @ts-expect-error
//   colors[13]?.value = contrastMaker("info-content", "--inc", "info");
//   // @ts-expect-error
//   colors[15]?.value = contrastMaker("success-content", "--suc", "success");
//   // @ts-expect-error
//   colors[17]?.value = contrastMaker("warning-content", "--wac", "warning");
//   // @ts-expect-error
//   colors[19]?.value = contrastMaker("error-content", "--erc", "error");
// }






function randomBetween(min: number, max: number) {
  const result = Math.random() * (max - min) + min;
  return Math.round(result * 100) / 100;
}

function randomize() {
  localStorage.removeItem("theme-generator-colors");
  // ;["primary", "secondary", "accent"].forEach((element) => {
// @ts-expect-error
  colors[0].value = formatHex(
    `oklch(${randomBetween(0.5, 0.7)} ${randomBetween(0.4, 0.5)} ${randomBetween(180, 360)})`
  ); //primary
  // @ts-expect-error
  colors[2].value = formatHex(
    `oklch(${randomBetween(0.4, 0.8)} ${randomBetween(0.4, 0.5)} ${randomBetween(70, 270)})`
  ); //secondary
  // @ts-expect-error
  colors[4].value = formatHex(
    `oklch(${randomBetween(0.4, 0.8)} ${randomBetween(0.4, 0.5)} ${randomBetween(70, 270)})`
  ); //accent
  // @ts-expect-error
  colors[6].value = formatHex(
    `oklch(${randomBetween(0.1, 0.3)} ${randomBetween(0, 0.05)} ${randomBetween(0, 360)})`
  ); //neutral
  // @ts-expect-error
  colors[8].value = formatHex(
    `oklch(${
      [randomBetween(0.99, 1), randomBetween(0.25, 0.3)][Math.round(Math.random())]
    } ${randomBetween(0, 0.05)} ${randomBetween(0, 360)})`
  ); //base-100
  // @ts-expect-error
  colors[12].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(200, 260)})`
  ); //info
  // @ts-expect-error
  colors[14].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(120, 180)})`
  ); //success
  // @ts-expect-error
  colors[16].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(50, 100)})`
  ); //warning
  // @ts-expect-error
  colors[18].value = formatHex(
    `oklch(${randomBetween(0.5, 0.9)} ${randomBetween(0.18, 0.293)} ${randomBetween(12, 24)})`
  );
  //error
  // })
  // generateOptionalColors();
//   generateColors();
}
