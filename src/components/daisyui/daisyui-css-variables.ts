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
    result = interpolate([`oklch(${colorObjToString(result)})`, "black"], "oklch")(0.07);
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

export const getTailwindBg = (color: (typeof daisyUiColors)[number]["name"]) => {
  switch (color) {
    // primary
    case "primary":
      return "bg-primary";
    case "primary-content":
      return "bg-primary-content";
    case "primary-focus":
      return "bg-primary-focus";
    // secondary  
    case "secondary":
      return "bg-secondary";
    case "secondary-content":
      return "bg-secondary-content";
    case "secondary-focus":
      return "bg-secondary-focus";
    // accent
    case "accent":
      return "bg-accent";
    case "accent-content":
      return "bg-accent-content";
    case "accent-focus":
      return "bg-accent-focus";
    // neutral
    case "neutral":
      return "bg-neutral";
    case "neutral-content":
      return "bg-neutral-content";
    case "neutral-focus":
      return "bg-neutral-focus";
    // base
    case "base-100":
      return "bg-base-100";
    case "base-200":
      return "bg-base-200";
    case "base-300":
      return "bg-base-300";
    case "base-content":
      return "bg-base-content";
    // info
    case "info":
      return "bg-info";
    case "info-content":
      return "bg-info-content";
    case "info-focus":
      return "bg-info-focus";
    // success
    case "success":
      return "bg-success";
    case "success-content":
      return "bg-success-content";
    case "success-focus":
      return "bg-success-focus";
    // warning
    case "warning":
      return "bg-warning";
    case "warning-content":
      return "bg-warning-content";
    case "warning-focus":
      return "bg-warning-focus";
    // error
    case "error":
      return "bg-error";
    case "error-content":
      return "bg-error-content";
    case "error-focus":
      return "bg-error-focus";
    default:
      return "";
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
