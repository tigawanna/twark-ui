/**
 * All base color names in Radix palette.
 *
 * @note This list does not consider overlays, as they do not have a base color.
 * They are special colors that need special handling.
 *
 * @see https://www.radix-ui.com/colors/docs/palette-composition/scales
 */
export const baseColorNames = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "gold",
  "bronze",
  "brown",
  "yellow",
  "amber",
  "orange",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "lime",
  "mint",
  "sky",
] as const;

/**
 * All base color names in Radix palette.
 */
export type BaseColorName = (typeof baseColorNames)[number];

/**
 * Each base color has a corresponding saturated gray scale, which, if used on
 * the foreground against the base color background, can create a more colorful
 * and harmonious vibe.
 *
 * @see https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette#natural-pairing
 */
export const foregroundColorNamePairs: Record<BaseColorName, string> = {
  mauve: "mauvedark",
  tomato: "mauvedark",
  red: "mauvedark",
  ruby: "mauvedark",
  crimson: "mauvedark",
  pink: "mauvedark",
  plum: "mauvedark",
  purple: "mauvedark",
  violet: "mauvedark",
  slate: "slatedark",
  iris: "slatedark",
  indigo: "slatedark",
  blue: "slatedark",
  sky: "slate",
  cyan: "slatedark",
  sage: "sagedark",
  mint: "sage",
  teal: "sagedark",
  jade: "sagedark",
  green: "sagedark",
  olive: "olivedark",
  grass: "olivedark",
  lime: "olive",
  sand: "sanddark",
  yellow: "sand",
  amber: "sand",
  orange: "sanddark",
  brown: "sanddark",
  gold: "sanddark", // Not officially specified.
  bronze: "sanddark", // Not officially specified.
  gray: "graydark", // Not officially specified.
} as const;

/**
 * A map from color scale to color value.
 */
export type Color = Record<string, string> | string;

/**
 * A map from color name to color.
 */
export type Palette = Record<string, Color>;

/**
 * Property components of a color name.
 */
export interface ColorNameComponents {
  /**
   * Its base color name in lowercase.
   */
  base: string;

  /**
   * Whether it is a dark variant.
   */
  dark: boolean;

  /**
   * Whether it is a P3 variant.
   */
  p3: boolean;

  /**
   * Whether it is an alpha variant.
   */
  alpha: boolean;
}

/**
 * Parse a given color name into components.
 */
export function parseColorName(colorName: string) {
  const matchGroups = colorName.match(
    /^(?<base>.+?)(?<dark>dark)?(?<p3>p3)?(?<alpha>a)?$/i
  )?.groups;

  if (!matchGroups?.["base"]) {
    // Unreachable. The regular expression will always match.
    throw new Error(`Invalid color name: ${colorName}`);
  }

  const { base, dark, p3, alpha } = matchGroups;

  return {
    base: base.toLowerCase(),
    dark: dark !== undefined,
    p3: p3 !== undefined,
    alpha: alpha !== undefined,
  } as ColorNameComponents;
}

/**
 * Build a color name from given components.
 */
export function buildColorName(components: ColorNameComponents) {
  const { base, dark, p3, alpha } = components;

  let colorName = base;

  if (dark) {
    colorName += "dark";
  }

  if (p3) {
    colorName += "p3";
  }

  if (alpha) {
    colorName += "a";
  }

  return colorName;
}



/**
 * Transform Radix color palette into Tailwind format.
 *
 * Radix color palette looks like:
 *
 * ```json
 * {
 *   "blueDark": {
 *     "blue1": "...",
 *     "blue2": "...",
 *     // ... other scales
 *     "blue12": "..."
 *   }
 *   // ... other colors
 * }
 * ```
 *
 * Tailwind format looks like:
 *
 * ```json
 * {
 *   "bluedark": {
 *     "1": "...",
 *     "2": "...",
 *     // ... other scales
 *     "12": "..."
 *   }
 *   // ... other colors
 * }
 * ```
 *
 * @see https://tailwindcss.com/docs/customizing-colors#using-custom-colors
 */
function transform(
  radixPalette: Palette,
  options: TailwindcssRadixColorsOptions,
) {
  const { include = undefined, exclude = [] } = options;
  const checkShouldInclude = createChecker(include, exclude);

  const tailwindPalette: Palette = {};

  for (const [radixColorName, radixColor] of Object.entries(radixPalette)) {
    const shouldInclude = checkShouldInclude(radixColorName);

    if (!shouldInclude) {
      continue;
    }

    const tailwindColorName = radixColorName.toLowerCase();

    const tailwindColor: Color = {};
    for (const [radixColorScale, colorValue] of Object.entries(radixColor)) {
      const tailwindColorScale = radixColorScale.match(/\d+$/)?.[0];
      if (tailwindColorScale) {
        tailwindColor[tailwindColorScale] = colorValue;
      }
    }

    tailwindPalette[tailwindColorName] = tailwindColor;
  }

  return tailwindPalette;
}

/**
 * Create a function that checks whether a color name should be included, i.e.
 * transformed and added to the new color palette.
 */
function createChecker(include: string[] | undefined, exclude: string[]) {
  const parsedInclude = include?.map(parseColorName);
  const parsedExclude = exclude.map(parseColorName);

  return (candidate: string) => {
    const parsedCandidate = parseColorName(candidate);

    if (
      parsedInclude &&
      !parsedInclude.some((colorName) => match(colorName, parsedCandidate))
    ) {
      return false;
    }

    if (parsedExclude.some((colorName) => match(colorName, parsedCandidate))) {
      return false;
    }

    return true;
  };
}

/**
 * Check whether two color names matches.
 *
 * @note A base color and its dark variant are considered a successful match.
 * This is because we cannot include only one but not both; otherwise, the
 * automatic dark mode support of semantic classes will not work. Even if the
 * user has explicitly disabled the the usage of semantic classes, it is still
 * better to keep this behavior, for the following reasons:
 *
 * 1. The user may well still want dark mode, but prefers to style it manually.
 * 2. Behavior stays consistent before and after semantic classes are disabled.
 * 3. Avoid "options-drilling" for better DX. Otherwise you will have to pass
 * the option `disableSemantics` all the way down to this function.
 */
function match(a: ColorNameComponents, b: ColorNameComponents) {
  return a.base === b.base && a.p3 === b.p3 && a.alpha === b.alpha;
}


export type ColorName =
  | `${BaseColorName}`
  | `${BaseColorName}p3`
  | `${BaseColorName}a`
  | `${BaseColorName}p3a`
  | `${BaseColorName}dark`
  | `${BaseColorName}darkp3`
  | `${BaseColorName}darka`
  | `${BaseColorName}darkp3a`
  | "blacka"
  | "blackp3a"
  | "whitea"
  | "whitep3a";

/**
 * Options of plugin `tailwindcss-radix-colors`.
 */
export interface TailwindcssRadixColorsOptions {
  /**
   * Disable the Intellisense of semantic classes.
   *
   * @default false
   *
   * @see https://tailwindcss-radix-colors.mrcai.dev/options#disablesemantics
   */
  disableSemantics?: boolean;

  /**
   * Specifies an array of Radix color names that you want to see in
   * Intellisense.
   *
   * @default undefined
   *
   * @see https://tailwindcss-radix-colors.mrcai.dev/options#include
   */
  include?: ColorName[] | undefined;

  /**
   * Specifies an array of Radix color names that you do not want to see in
   * Intellisense. This applies after the `include` option is applied.
   *
   * @default []
   *
   * @see https://tailwindcss-radix-colors.mrcai.dev/options#exclude
   */
  exclude?: ColorName[];
}
