import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { type daisyUiColors, getDaisyUiColors } from "@/components/daisyui/daisyui-css-variables";



type DaisyUIThemeVariables = typeof daisyUiColors;
interface DaisyUITheme {
  lightTheme: DaisyUIThemeVariables;
  setLightTheme: (theme: DaisyUIThemeVariables) => void;
  darkTheme: DaisyUIThemeVariables;
  setDarkTheme: (theme: DaisyUIThemeVariables) => void;
}

export const useThemeStore = create<DaisyUITheme>()(
  devtools(
    persist(
      (set) => ({
        lightTheme: getDaisyUiColors(false),
        setLightTheme: (theme) => set(() => ({ lightTheme: theme })),
        darkTheme: getDaisyUiColors(true),
        setDarkTheme: (theme) => set(() => ({ darkTheme: theme })),
      }),
      {
        name: "thme-storage",
      }
    )
  )
);
