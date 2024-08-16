import { z } from "zod";

export const daisyUIThemeSchema = z.object({
  primary: z
    .object({
      primary: z.object({
        name: z.literal("primary"),
        variable: z.literal("--p"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "primary-content": z.object({
        name: z.literal("primary-content"),
        variable: z.literal("--pc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  secondary: z
    .object({
      secondary: z.object({
        name: z.literal("secondary"),
        variable: z.literal("--s"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "secondary-content": z.object({
        name: z.literal("secondary-content"),
        variable: z.literal("--sc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  accent: z
    .object({
      accent: z.object({
        name: z.literal("accent"),
        variable: z.literal("--a"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "accent-content": z.object({
        name: z.literal("accent-content"),
        variable: z.literal("--ac"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  neutral: z
    .object({
      neutral: z.object({
        name: z.literal("neutral"),
        variable: z.literal("--n"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "neutral-content": z.object({
        name: z.literal("neutral-content"),
        variable: z.literal("--nc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  base: z
    .object({
      "base-100": z.object({
        name: z.literal("base-100"),
        variable: z.literal("--b1"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "base-200": z.object({
        name: z.literal("base-200"),
        variable: z.literal("--b2"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "base-300": z.object({
        name: z.literal("base-300"),
        variable: z.literal("--b3"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "base-content": z.object({
        name: z.literal("base-content"),
        variable: z.literal("--bc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  info: z
    .object({
      info: z.object({
        name: z.literal("info"),
        variable: z.literal("--in"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "info-content": z.object({
        name: z.literal("info-content"),
        variable: z.literal("--inc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  success: z
    .object({
      success: z.object({
        name: z.literal("success"),
        variable: z.literal("--su"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "success-content": z.object({
        name: z.literal("success-content"),
        variable: z.literal("--suc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  warning: z
    .object({
      warning: z.object({
        name: z.literal("warning"),
        variable: z.literal("--wa"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "warning-content": z.object({
        name: z.literal("warning-content"),
        variable: z.literal("--wac"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
  error: z
    .object({
      error: z.object({
        name: z.literal("error"),
        variable: z.literal("--er"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
      "error-content": z.object({
        name: z.literal("error-content"),
        variable: z.literal("--erc"),
        value: z.string(),
        locked: z.boolean().optional(),
      }),
    })
    .optional(),
});

export type ThemeSearchParmsTypes = z.infer<typeof daisyUIThemeSchema>;


