import { formatHex, interpolate, type Color, type Oklch } from "culori";

export const colorObjToString = ({ l, c, h }: Oklch): string => {
  const cut = (number: number | undefined): number => {
    if (!number) {
      return 0;
    }
    return +number.toFixed(4);
  };
  return `${cut(l) * 100}% ${cut(c)} ${cut(h)}`;
};

export const generateDarkenColorFrom = (
  input: Color | string,
  percentage = 0.07
): Color | string => {
  const result = interpolate([input, "black"], "oklch")(percentage);
  return formatHex(`oklch(${colorObjToString(result)})`) as Color | string;
};

export function changeColorValuesToObject(input: string): {
  l: number;
  c: number;
  h: number;
  a: number;
} {
  const match = input.match(/(\d+(?:\.\d+)?)%?/g);
  const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
  return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
}

export const getColorValueFromTheme = (
  variable: string,
  invertColor = false,
  darkenColor = false
) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  const { l, c, h, a } = changeColorValuesToObject(colorValues);
  let result = { l, c, h, a };
  if (invertColor) {
    // @ts-expect-error typescript is being dumb
    result = interpolate([`oklch(${colorObjToString(result)})`, "black"], "oklch")(0.93);
  }
  if (darkenColor) {
    // @ts-expect-error typescript is being dumb
    result = interpolate([`oklch(${colorObjToString(result)})`, "white"], "oklch")(0.93);
  }
  // @ts-expect-error typescript is being dumb
  return formatHex(`oklch(${colorObjToString(result)})`);
};
export const getColorValueFromThemeVariable = (variable: string) => {
  const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return formatHex(
    `oklch(${changeColorValuesToObject(colorValues).l} ${
      changeColorValuesToObject(colorValues).c
    } ${changeColorValuesToObject(colorValues).h})`
  );
};

export function getDaisyUiColors(dark = false) {
  return [
    // primary
    {
      name: "primary",
      variable: "--p",
      value: getColorValueFromTheme("--p", dark),
    },
    {
      name: "primary-content",
      variable: "--pc",
      value: getColorValueFromTheme("--pc", dark),
    },
    {
      name: "primary-focus",
      variable: "--pf",
      value: getColorValueFromTheme("--p", dark, true),
    },
    // secondary
    {
      name: "secondary",
      variable: "--s",
      value: getColorValueFromTheme("--s", dark),
    },
    {
      name: "secondary-content",
      variable: "--sc",
      value: getColorValueFromTheme("--sc", dark),
    },
    {
      name: "secondary-focus",
      variable: "--sf",
      value: getColorValueFromTheme("--s", dark, true),
    },
    // accent
    {
      name: "accent",
      variable: "--a",
      value: getColorValueFromTheme("--a", dark),
    },
    {
      name: "accent-content",
      variable: "--ac",
      value: getColorValueFromTheme("--ac", dark),
    },
    {
      name: "accent-focus",
      variable: "--af",
      value: getColorValueFromTheme("--a", dark, true),
    },
    // neutral
    {
      name: "neutral",
      variable: "--n",
      value: getColorValueFromTheme("--n", dark),
    },
    {
      name: "neutral-content",
      variable: "--nc",
      value: getColorValueFromTheme("--nc", dark),
    },
    {
      name: "neutral-focus",
      variable: "--nf",
      value: getColorValueFromTheme("--n", dark,true),
    },
    // base
    {
      name: "base-100",
      variable: "--b1",
      value: getColorValueFromTheme("--b1", dark),
    },
    {
      name: "base-200",
      variable: "--b2",
      value: getColorValueFromTheme("--b2", dark),
    },
    {
      name: "base-300",
      variable: "--b3",
      value: getColorValueFromTheme("--b3", dark),
    },
    {
      name: "base-content",
      variable: "--bc",
      value: getColorValueFromTheme("--bc", dark),
    },
    // info
    {
      name: "info",
      variable: "--in",
      value: getColorValueFromTheme("--in", dark),
    },
    {
      name: "info-content",
      variable: "--inc",
      value: getColorValueFromTheme("--inc", dark),
    },
    {
      name: "info-focus",
      variable: "--inf",
      value: getColorValueFromTheme("--in", dark,true),
    },
    // success
    {
      name: "success",
      variable: "--su",
      value: getColorValueFromTheme("--su", dark),
    },
    {
      name: "success-content",
      variable: "--suc",
      value: getColorValueFromTheme("--suc", dark),
    },
    {
      name: "success-focus",
      variable: "--suf",
      value: getColorValueFromTheme("--su", dark,true),
    },
    // warning
    {
      name: "warning",
      variable: "--wa",
      value: getColorValueFromTheme("--wa", dark),
    },
    {
      name: "warning-content",
      variable: "--wac",
      value: getColorValueFromTheme("--wac", dark),
    },
    {
      name: "warning-focus",
      variable: "--waf",
      value: getColorValueFromTheme("--wa", dark,true),
    },
    // error
    {
      name: "error",
      variable: "--er",
      value: getColorValueFromTheme("--er", dark),
    },
    {
      name: "error-content",
      variable: "--erc",
      value: getColorValueFromTheme("--erc", dark),
    },
    {
      name: "error-focus",
      variable: "--erf",
      value: getColorValueFromTheme("--er", dark,true),
    },
  ] as const;
}

export const daisyUiColors = getDaisyUiColors();

export const getTailwindBg = (
  color: (typeof daisyUiColors)[number]["name"]
): {
  bg: string;
  content: string;
} => {
  switch (color) {
    // primary
    case "primary":
      return { bg: "bg-primary", content: "text-primary-content" };
    case "primary-content":
      return { bg: "bg-primary-content", content: "text-primary" };
    case "primary-focus":
      return { bg: "bg-primary-focus", content: "text-primary-content" };
    // secondary
    case "secondary":
      return { bg: "bg-secondary", content: "text-secondary-content" };
    case "secondary-content":
      return { bg: "bg-secondary-content", content: "text-secondary" };
    case "secondary-focus":
      return { bg: "bg-secondary-focus", content: "text-secondary-content" };
    // accent
    case "accent":
      return { bg: "bg-accent", content: "text-accent-content" };
    case "accent-content":
      return { bg: "bg-accent-content", content: "text-accent" };
    case "accent-focus":
      return { bg: "bg-accent-focus", content: "text-accent-content" };
    // neutral
    case "neutral":
      return { bg: "bg-neutral", content: "text-neutral-content" };
    case "neutral-content":
      return { bg: "bg-neutral-content", content: "text-neutral" };
    case "neutral-focus":
      return { bg: "bg-neutral-focus", content: "text-neutral-content" };
    // base
    case "base-100":
      return { bg: "bg-base-100", content: "text-base-content" };
    case "base-200":
      return { bg: "bg-base-200", content: "text-base-content" };
    case "base-300":
      return { bg: "bg-base-300", content: "text-base-content" };
    case "base-content":
      return { bg: "bg-base-content", content: "text-base-100" };
    // info
    case "info":
      return { bg: "bg-info", content: "text-info-content" };
    case "info-content":
      return { bg: "bg-info-content", content: "text-info" };
    case "info-focus":
      return { bg: "bg-info-focus", content: "text-info-content" };
    // success
    case "success":
      return { bg: "bg-success", content: "text-success-content" };
    case "success-content":
      return { bg: "bg-success-content", content: "text-success" };
    case "success-focus":
      return { bg: "bg-success-focus", content: "text-success-content" };
    // warning
    case "warning":
      return { bg: "bg-warning", content: "text-warning-content" };
    case "warning-content":
      return { bg: "bg-warning-content", content: "text-warning" };
    case "warning-focus":
      return { bg: "bg-warning-focus", content: "text-warning-content" };
    // error
    case "error":
      return { bg: "bg-error", content: "text-error-content" };
    case "error-content":
      return { bg: "bg-error-content", content: "text-error" };
    case "error-focus":
      return { bg: "bg-error-focus", content: "text-error-content" };
    default:
      return { bg: "bg-base-100", content: "text-base-content" };
  }
};

export const base_daisyui_theme_names = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "base",
  "info",
  "success",
  "warning",
  "error",
] as const;


export const daisy_ui_theme ={
  primary:{
    "primary":{
      name: "primary",
      variable: "--p",
      value:"",
    },
    "primary-content":{
      name: "primary-content",
      variable: "--pc",
      value:"",
    },
    "primary-focus":{
      name: "primary-focus",
      variable: "--pf",
      value:"",
    }
  },
  secondary:{
    "secondary":{
      name: "secondary",
      variable: "--s",
      value:"",
    },
    "secondary-content":{
      name: "secondary-content",
      variable: "--sc",
      value:"",
    },
    "secondary-focus":{
      name: "secondary-focus",
      variable: "--sf",
      value:"",
    }
  },
  accent:{
    "accent":{
      name: "accent",
      variable: "--a",
      value:"",
    },
    "accent-content":{
      name: "accent-content",
      variable: "--ac",
      value:"",
    },
    "accent-focus":{
      name: "accent-focus",
      variable: "--af",
      value:"",
    }
  },
  neutral:{
    "neutral":{
      name: "neutral",
      variable: "--n",
      value:"",
    },
    "neutral-content":{
      name: "neutral-content",
      variable: "--nc",
      value:"",
    },
    "neutral-focus":{
      name: "neutral-focus",
      variable: "--nf",
      value:"",
    }
  },
  base:{
    "base-100":{
      name: "base-100",
      variable: "--b1",
      value:"", 
  },
    "base-200":{
      name: "base-200",
      variable: "--b2",
      value:"",
    },
    "base-300":{
      name: "base-300",
      variable: "--b3",
      value:"",
    },
    "base-content":{
      name: "base-content",
      variable: "--bc",
      value:"",
    }
  },
  info:{
    "info":{
      name: "info",
      variable: "--i",
      value:"",
    },
    "info-content":{
      name: "info-content",
      variable: "--inc",
      value:"",
    },
    "info-focus":{
      name: "info-focus",
      variable: "--if",
      value:"",
    }
  },
  success:{
    "success":{
      name: "success",
      variable: "--s",
      value:"",  
    },
    "success-content":{
      name: "success-content",
      variable: "--sc",
      value:"",
    },
    "success-focus":{
      name: "success-focus",
      variable: "--sf",
      value:"",
    }
  },
  warning:{
    "warning":{
      name: "warning",
      variable: "--w",
      value:"",
    },
    "warning-content":{
      name: "warning-content",
      variable: "--wc",
      value:"",
    },
    "warning-focus":{
      name: "warning-focus",
      variable: "--wf",
      value:"",
    }
  },
  error:{
    "error":{
      name: "error",
      variable: "--e",
      value:"",
    },
    "error-content":{
      name: "error-content",
      variable: "--ec",
      value:"",
    },
    "error-focus":{
      name: "error-focus",
      variable: "--ef",
      value:"",
    }
  }
}
