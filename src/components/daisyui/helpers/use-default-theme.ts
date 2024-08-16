import { useNavigate, useSearch } from "@tanstack/react-router";
import { getColorValueFromTheme } from "@/components/daisyui/helpers/daisy-ui-css-variables";
import type { ThemeSearchParmsTypes } from "@/components/daisyui/helpers/daisy-ui-schema";
import type { GenericThemeState } from "./types";

export function defaultThemes({ theme }: { theme?: ThemeSearchParmsTypes }): ThemeSearchParmsTypes {
  return {
    accent: {
      accent: {
        name: "accent",
        variable: "--a",
        value: getColorValueFromTheme("--a") ?? "#6366f1",
        locked: false,
      },
      "accent-content": {
        name: "accent-content",
        variable: "--ac",
        value: getColorValueFromTheme("--ac") ?? "#fff",
        locked: false,
      },
    },
    base: {
      "base-100": {
        name: "base-100",
        variable: "--b1",
        value: getColorValueFromTheme("--b1") ?? "#f8fafc",
        locked: false,
      },
      "base-200": {
        name: "base-200",
        variable: "--b2",
        value: getColorValueFromTheme("--b2") ?? "#f1f5f9",
        locked: false,
      },
      "base-300": {
        name: "base-300",
        variable: "--b3",
        value: getColorValueFromTheme("--b3") ?? "#e2e8f0",
        locked: false,
      },
      "base-content": {
        name: "base-content",
        variable: "--bc",
        value: getColorValueFromTheme("--bc") ?? "#1f2937",
        locked: false,
      },
    },
    error: {
      error: {
        name: "error",
        variable: "--er",
        value: getColorValueFromTheme("--er") ?? "#ef4444",
        locked: false,
      },
      "error-content": {
        name: "error-content",
        variable: "--erc",
        value: getColorValueFromTheme("--erc") ?? "#fff",
        locked: false,
      },
    },
    info: {
      info: {
        name: "info",
        variable: "--in",
        value: getColorValueFromTheme("--in") ?? "#3b82f6",
        locked: false,
      },
      "info-content": {
        name: "info-content",
        variable: "--inc",
        value: getColorValueFromTheme("--inc") ?? "#fff",
        locked: false,
      },
    },
    neutral: {
      neutral: {
        name: "neutral",
        variable: "--n",
        value: getColorValueFromTheme("--n") ?? "#64748b",
        locked: false,
      },
      "neutral-content": {
        name: "neutral-content",
        variable: "--nc",
        value: getColorValueFromTheme("--nc") ?? "#fff",
        locked: false,
      },
    },
    primary: {
      primary: {
        name: "primary",
        variable: "--p",
        value: getColorValueFromTheme("--p") ?? "#22d3ee",
        locked: false,
      },
      "primary-content": {
        name: "primary-content",
        variable: "--pc",
        value: getColorValueFromTheme("--pc") ?? "#fff",
        locked: false,
      },
    },
    success: {
      success: {
        name: "success",
        variable: "--su",
        value: getColorValueFromTheme("--su") ?? "#10b981",
        locked: false,
      },
      "success-content": {
        name: "success-content",
        variable: "--suc",
        value: getColorValueFromTheme("--suc") ?? "#fff",
        locked: false,
      },
    },
    secondary: {
      secondary: {
        name: "secondary",
        variable: "--s",
        value: getColorValueFromTheme("--s") ?? "#64748b",
        locked: false,
      },
      "secondary-content": {
        name: "secondary-content",
        variable: "--sc",
        value: getColorValueFromTheme("--sc") ?? "#fff",
        locked: false,
      },
    },
    warning: {
      warning: {
        name: "warning",
        variable: "--wa",
        value: getColorValueFromTheme("--wa") ?? "#f59e0b",
        locked: false,
      },
      "warning-content": {
        name: "warning-content",
        variable: "--wac",
        value: getColorValueFromTheme("--wac") ?? "#fff",
        locked: false,
      },
    },
    ...theme,
  };
}

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
