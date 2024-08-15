
import { useNavigate, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import type { GenericThemeState } from "./types";
import { getColorValueFromTheme } from "@/components/daisyui/daisyui-css-variables";

export const daisyUIThemeSchema = z.object({
  primary: z.object({
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
  }),
  secondary: z.object({
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
  }),
  accent: z.object({
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
  }),
  neutral: z.object({
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
  }),
  base: z.object({
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
  }),
  info: z.object({
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
  }),
  success: z.object({
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
  }),
  warning: z.object({
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
  }),
  error: z.object({
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
  }),
});


export type ThemeSearchParmsTypes = z.infer<typeof daisyUIThemeSchema>;

export function defaultThemes({ theme }: { theme?: ThemeSearchParmsTypes }): ThemeSearchParmsTypes {
return {
    accent:{
        accent: {
          name: "accent",
          variable: "--a",
          value:getColorValueFromTheme("--a")??"#6366f1",
          locked: false,
        },
        "accent-content": {
          name: "accent-content",
          variable: "--ac",
          value:getColorValueFromTheme("--ac")?? "#fff",
          locked: false,
        },
      },
    base: {
        "base-100": {
          name: "base-100",
          variable: "--b1",
          value: getColorValueFromTheme("--b1")??"#f8fafc",
          locked: false,
        },
        "base-200": {
          name: "base-200",
          variable: "--b2",
          value: getColorValueFromTheme("--b2")??"#f1f5f9",
          locked: false,
        },
        "base-300": {
          name: "base-300",
          variable: "--b3",
          value: getColorValueFromTheme("--b3")??"#e2e8f0",
          locked: false,
        },
        "base-content": {
          name: "base-content",
          variable: "--bc",
          value: getColorValueFromTheme("--bc")??"#1f2937",
          locked: false,
        },
      },
    error: {
        error: {
          name: "error",
          variable: "--er",
          value:getColorValueFromTheme("--er")?? "#ef4444",
          locked: false,
        },
        "error-content": {
          name: "error-content",
          variable: "--erc",
          value: getColorValueFromTheme("--erc")??"#fff",
          locked: false,
        },
     },
    info: {
        info: {
          name: "info",
          variable: "--in",
          value:getColorValueFromTheme("--in")?? "#3b82f6",
          locked: false,
        },
        "info-content": {
          name: "info-content",
          variable: "--inc",
          value: getColorValueFromTheme("--inc")??"#fff",
          locked: false,
        },
        
    },
    neutral: {
      neutral: {
        name: "neutral",
        variable: "--n",
        value:getColorValueFromTheme("--n")?? "#64748b",
        locked: false,
      },
      "neutral-content": {
        name: "neutral-content",
        variable: "--nc",
        value: getColorValueFromTheme("--nc")??"#fff",
        locked: false,
      },
    },
    primary: {
      primary: {
        name: "primary",
        variable: "--p",
        value: getColorValueFromTheme("--p")??"#22d3ee",
        locked: false,
      },
      "primary-content": {
        name: "primary-content",
        variable: "--pc",
        value: getColorValueFromTheme("--pc")??"#fff",
        locked: false,
      },
    },
    success: {
      success: {
        name: "success",
        variable: "--su",
        value: getColorValueFromTheme("--su")??"#10b981",
        locked: false
      },
      "success-content": {
        name: "success-content",
        variable: "--suc",
        value: getColorValueFromTheme("--suc")??"#fff",
        locked: false
      },

    },
    secondary: {
      secondary: {
        name: "secondary",
        variable: "--s",
        value: getColorValueFromTheme("--s")??"#64748b",
        locked: false
      },
      "secondary-content": {
        name: "secondary-content",
        variable: "--sc",
        value: getColorValueFromTheme("--sc")??"#fff",
        locked: false
      }
    },
    warning: {
      warning: {
        name: "warning",
        variable: "--wa",
        value: getColorValueFromTheme("--wa")??"#f59e0b",
        locked: false
      },
      "warning-content": {
        name: "warning-content",
        variable: "--wac",
        value: getColorValueFromTheme("--wac")??"#fff",
        locked: false
      },
    },
  ...theme,

  };
  
}


export function useUpdateTheme(){
const navigate = useNavigate();
const searchParams = useSearch({
  from: "/theme/",
});
const updateTheme = (newTheme: Record<string, GenericThemeState>) => {
  navigate({
    to: "/theme",
    search: {
      ...searchParams,
      ...newTheme,
    },
  });
};
}
