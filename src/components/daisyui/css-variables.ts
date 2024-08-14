import { formatHex, toGamut, interpolate, wcagContrast, Color, Oklch } from "culori";

export const colorObjToString = ({ l, c, h }: Oklch): string => {
  const cut = (number: number | undefined): number => {
    if (!number) {
      return 0;
    }
    return +number.toFixed(4);
  };
  return `${cut(l) * 100}% ${cut(c)} ${cut(h)}`;
};

export const generateDarkenColorFrom = (input: Color | string, percentage = 0.07): Color | string => {
  const result = interpolate([input, "black"], "oklch")(percentage);
  return formatHex(`oklch(${colorObjToString(result)})`) as Color | string;
};

export function changeColorValuesToObject(input: string): { l: number; c: number; h: number; a: number } {
  const match = input.match(/(\d+(?:\.\d+)?)%?/g);
  const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
  return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
}

export const getColorValueFromTheme = (variable: string) => {
    const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
    console.log(colorValues)
    return formatHex(
      `oklch(${changeColorValuesToObject(colorValues).l} ${
        changeColorValuesToObject(colorValues).c
      } ${changeColorValuesToObject(colorValues).h})`
    );
};
export const getColorValueFromThemeVariable = (variable: string) => {
    const colorValues = getComputedStyle(document.documentElement).getPropertyValue(variable);
    return formatHex(
      `oklch(${changeColorValuesToObject(colorValues).l} ${
        changeColorValuesToObject(colorValues).c
      } ${changeColorValuesToObject(colorValues).h})`
    );
};

export function getDaisyUiColors() {
    return [
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
    ] as const
}

export const daisyUiColors = getDaisyUiColors()

export const getTailwindBg = (color: (typeof daisyUiColors)[number]["name"]) => {
  switch (color) {
    case "primary":
      return "bg-primary";
    case "primary-content":
      return "bg-primary-content";
    case "secondary":
      return "bg-secondary";
    case "secondary-content":
      return "bg-secondary-content";
    case "accent":
      return "bg-accent";
    case "accent-content":
      return "bg-accent-content";
    case "neutral":
      return "bg-neutral";
    case "neutral-content":
      return "bg-neutral-content";
    case "base-100":
      return "bg-base-100";
    case "base-100":
      return "bg-base-200";
    case "base-200":
      return "bg-base-200";
    case "base-300":
      return "bg-base-300";
    case "base-content":
      return "bg-base-content";
    case "info":
      return "bg-info";
    case "info-content":
      return "bg-info-content";
    case "success":
      return "bg-success";
    case "success-content":
      return "bg-success-content";
    case "warning":
      return "bg-warning";
    case "warning-content":
      return "bg-warning-content";
    case "error":
      return "bg-error";
    case "error-content":
      return "bg-error-content";
    default:
      return "";


  }
};
