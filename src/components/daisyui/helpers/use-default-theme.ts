import { useNavigate, useSearch } from "@tanstack/react-router";
import { getColorValueFromTheme, getThemeVariable } from "@/components/daisyui/helpers/daisy-ui-css-variables";
import type { ThemeSearchParmsTypes } from "@/components/daisyui/helpers/daisy-ui-schema";
import type { GenericThemeState } from "./types";

export function defaultThemes({ theme }: { theme?: ThemeSearchParmsTypes }): ThemeSearchParmsTypes {
  return {
    accent: {
      accent: {
        name: "accent",
        variable: "--a",
        value: theme?.accent?.accent.value ?? getColorValueFromTheme("--a") ?? "#6366f1",
        locked: theme?.accent?.accent?.locked ?? false,
      },
      "accent-content": {
        name: "accent-content",
        variable: "--ac",
        value: theme?.accent?.["accent-content"].value ?? getColorValueFromTheme("--ac") ?? "#fff",
        locked: theme?.accent?.["accent-content"].locked ?? false,
      },
    },
    base: {
      "base-100": {
        name: "base-100",
        variable: "--b1",
        value: theme?.base?.["base-100"].value ?? getColorValueFromTheme("--b1") ?? "#f8fafc",
        locked: false,
      },
      "base-200": {
        name: "base-200",
        variable: "--b2",
        value: theme?.base?.["base-200"].value ?? getColorValueFromTheme("--b2") ?? "#f1f5f9",
        locked: theme?.base?.["base-200"].locked ?? false,
      },
      "base-300": {
        name: "base-300",
        variable: "--b3",
        value: theme?.base?.["base-300"].value ?? getColorValueFromTheme("--b3") ?? "#e2e8f0",
        locked: theme?.base?.["base-300"].locked ?? false,
      },
      "base-content": {
        name: "base-content",
        variable: "--bc",
        value: theme?.base?.["base-content"].value ?? getColorValueFromTheme("--bc") ?? "#1f2937",
        locked: theme?.base?.["base-content"].locked ?? false,
      },
    },
    error: {
      error: {
        name: "error",
        variable: "--er",
        value: theme?.error?.error.value ?? getColorValueFromTheme("--er") ?? "#ef4444",
        locked: theme?.error?.error?.locked ?? false,
      },
      "error-content": {
        name: "error-content",
        variable: "--erc",
        value: theme?.error?.["error-content"].value ?? getColorValueFromTheme("--erc") ?? "#fff",
        locked: theme?.error?.["error-content"].locked ?? false,
      },
    },
    info: {
      info: {
        name: "info",
        variable: "--in",
        value: theme?.info?.info.value ?? getColorValueFromTheme("--in") ?? "#3b82f6",
        locked: theme?.info?.info?.locked ?? false,
      },
      "info-content": {
        name: "info-content",
        variable: "--inc",
        value: theme?.info?.["info-content"].value ?? getColorValueFromTheme("--inc") ?? "#fff",
        locked: theme?.info?.["info-content"].locked ?? false,
      },
    },
    neutral: {
      neutral: {
        name: "neutral",
        variable: "--n",
        value: theme?.neutral?.neutral.value ?? getColorValueFromTheme("--n") ?? "#64748b",
        locked: theme?.neutral?.neutral?.locked ?? false,
      },
      "neutral-content": {
        name: "neutral-content",
        variable: "--nc",
        value:
          theme?.neutral?.["neutral-content"].value ?? getColorValueFromTheme("--nc") ?? "#fff",
        locked: theme?.neutral?.["neutral-content"].locked ?? false,
      },
    },
    primary: {
      primary: {
        name: "primary",
        variable: "--p",
        value: theme?.primary?.primary.value ?? getColorValueFromTheme("--p") ?? "#22d3ee",
        locked: theme?.primary?.primary?.locked ?? false,
      },
      "primary-content": {
        name: "primary-content",
        variable: "--pc",
        value: getColorValueFromTheme("--pc") ?? "#fff",
        locked: theme?.primary?.["primary-content"].locked ?? false,
      },
    },
    success: {
      success: {
        name: "success",
        variable: "--su",
        value: theme?.success?.success.value ?? getColorValueFromTheme("--su") ?? "#10b981",
        locked: theme?.success?.success?.locked ?? false,
      },
      "success-content": {
        name: "success-content",
        variable: "--suc",
        value:
          theme?.success?.["success-content"].value ?? getColorValueFromTheme("--suc") ?? "#fff",
        locked: theme?.success?.["success-content"].locked ?? false,
      },
    },
    secondary: {
      secondary: {
        name: "secondary",
        variable: "--s",
        value: theme?.secondary?.secondary.value ?? getColorValueFromTheme("--s") ?? "#64748b",
        locked: theme?.secondary?.secondary?.locked ?? false,
      },
      "secondary-content": {
        name: "secondary-content",
        variable: "--sc",
        value:
          theme?.secondary?.["secondary-content"].value ?? getColorValueFromTheme("--sc") ?? "#fff",
        locked: false,
      },
    },
    warning: {
      warning: {
        name: "warning",
        variable: "--wa",
        value: theme?.warning?.warning.value ?? getColorValueFromTheme("--wa") ?? "#f59e0b",
        locked: theme?.warning?.warning?.locked ?? false,
      },
      "warning-content": {
        name: "warning-content",
        variable: "--wac",
        value:
          theme?.warning?.["warning-content"].value ?? getColorValueFromTheme("--wac") ?? "#fff",
        locked: theme?.warning?.["warning-content"].locked ?? false,
      },
    },
    curves: {
      rounded_box: {
        name: "rounded-box",
        variable: "--rounded-box",
        value: theme?.curves?.rounded_box?.value ?? getThemeVariable("--rounded-box"),
        locked: theme?.curves?.rounded_box?.locked ?? false,
      },
      rounded_btn: {
        name: "rounded-btn",
        variable: "--rounded-btn",
        value: theme?.curves?.rounded_btn?.value ?? getThemeVariable("--rounded-btn"),
        locked: theme?.curves?.rounded_btn?.locked ?? false,
      },
      rounded_badge:{
        name: "rounded-badge",
        variable: "--rounded-badge",
        value: theme?.curves?.rounded_badge?.value ?? getThemeVariable("--rounded-badge"),
        locked: theme?.curves?.rounded_badge?.locked ?? false,
      },
      animation_btn: {
        name: "animation-btn",
        variable: "--animation-btn",
        value: theme?.curves?.animation_btn?.value ?? getThemeVariable("--animation-btn"),
        locked: theme?.curves?.animation_btn?.locked ?? false,
      },
      animation_input: {
        name: "animation-input",
        variable: "--animation-input",
        value: theme?.curves?.animation_input?.value ?? getThemeVariable("--animation-input"),
        locked: theme?.curves?.animation_input?.locked ?? false,
      },
      border_btn: {
        name: "border-btn",
        variable: "--border-btn",
        value: theme?.curves?.border_btn?.value ?? getThemeVariable("--border-btn"),
        locked: theme?.curves?.border_btn?.locked ?? false,
      },
      tab_border: {
        name: "tab-border",
        variable: "--tab-border",
        value: theme?.curves?.tab_border?.value ?? getThemeVariable("--tab-border"),
        locked: theme?.curves?.tab_border?.locked ?? false,
      },
      tab_radius: {
        name: "tab-radius",
        variable: "--tab-radius",
        value: theme?.curves?.tab_radius?.value ?? getThemeVariable("--tab-radius"),
        locked: theme?.curves?.tab_radius?.locked ?? false,
      }
      

    },

  };
}

//   curves: z.object({
//     rounded_box: z
//       .object({
//         name: z.literal("rounded-box"),
//         variable: z.literal("--rounded-box"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     rounded_btn: z
//       .object({
//         name: z.literal("rounded-btn"),
//         variable: z.literal("--rounded-btn"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     rounded_badge: z
//       .object({
//         name: z.literal("rounded-badge"),
//         variable: z.literal("--rounded-badge"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),

//     animation_btn: z
//       .object({
//         name: z.literal("animation-btn"),
//         variable: z.literal("--animation-btn"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     animation_input: z
//       .object({
//         name: z.literal("animation-input"),
//         variable: z.literal("--animation-input"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     btn_focus_scale: z
//       .object({
//         name: z.literal("btn-focus-scale"),
//         variable: z.literal("--btn-focus-scale"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     border_btn: z
//       .object({
//         name: z.literal("border-btn"),
//         variable: z.literal("--border-btn"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     tab_border: z
//       .object({
//         name: z.literal("tab-border"),
//         variable: z.literal("--tab-border"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//     tab_radius: z
//       .object({
//         name: z.literal("tab-radius"),
//         variable: z.literal("--tab-radius"),
//         value: z.string(),
//         locked: z.boolean().optional(),
//       })
//       .optional(),
//   }),


// getThemeVariable()

export function useUpdateTheme() {
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
