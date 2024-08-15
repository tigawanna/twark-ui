import { z } from "zod"

export const daisyUIThemeSchema = z.object({
  primary: z.object({
    primary: z.object({
      name: z.literal("primary"),
      variable: z.literal("--p"),
      value: z.string(),
    }),
    "primary-content": z.object({
      name: z.literal("primary-content"),
      variable: z.literal("--pc"),
      value: z.string(),
    }),
  }),
  secondary: z.object({
    secondary: z.object({
      name: z.literal("secondary"),
      variable: z.literal("--s"),
      value: z.string(),
    }),
    "secondary-content": z.object({
      name: z.literal("secondary-content"),
      variable: z.literal("--sc"),
      value: z.string(),
    }),
  }),
  accent: z.object({
    accent: z.object({
      name: z.literal("accent"),
      variable: z.literal("--a"),
      value: z.string(),
    }),
    "accent-content": z.object({
      name: z.literal("accent-content"),
      variable: z.literal("--ac"),
      value: z.string(),
    }),

  }),
  neutral: z.object({
    neutral: z.object({
      name: z.literal("neutral"),
      variable: z.literal("--n"),
      value: z.string(),
    }),
    "neutral-content": z.object({
      name: z.literal("neutral-content"),
      variable: z.literal("--nc"),
      value: z.string(),
    }),

  }),
  base: z.object({
    "base-100": z.object({
      name: z.literal("base-100"),
      variable: z.literal("--b1"),
      value: z.string(),
    }),
    "base-200": z.object({
      name: z.literal("base-200"),
      variable: z.literal("--b2"),
      value: z.string(),
    }),
    "base-300": z.object({
      name: z.literal("base-300"),
      variable: z.literal("--b3"),
      value: z.string(),
    }),
    "base-content": z.object({
      name: z.literal("base-content"),
      variable: z.literal("--bc"),
      value: z.string(),
    }),
  }),
  info: z.object({
    info: z.object({
      name: z.literal("info"),
      variable: z.literal("--i"),
      value: z.string(),
    }),
    "info-content": z.object({
      name: z.literal("info-content"),
      variable: z.literal("--inc"),
      value: z.string(),
    }),

  }),
  success: z.object({
    success: z.object({
      name: z.literal("success"),
      variable: z.literal("--s"),
      value: z.string(),
    }),
    "success-content": z.object({
      name: z.literal("success-content"),
      variable: z.literal("--sc"),
      value: z.string(),
    }),

  }),
  warning: z.object({
    warning: z.object({
      name: z.literal("warning"),
      variable: z.literal("--w"),
      value: z.string(),
    }),
    "warning-content": z.object({
      name: z.literal("warning-content"),
      variable: z.literal("--wc"),
      value: z.string(),
    }),

  }),
  error: z.object({
    error: z.object({
      name: z.literal("error"),
      variable: z.literal("--e"),
      value: z.string(),
    }),
    "error-content": z.object({
      name: z.literal("error-content"),
      variable: z.literal("--ec"),
      value: z.string(),
    }),

  }),
});
