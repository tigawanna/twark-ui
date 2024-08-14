import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing


// interface BearState {
//   bears: number;
//   increase: (by: number) => void;

// }

// const useBearStore = create<BearState>()(
//   devtools(
//     persist(
//       (set) => ({
//         bears: 0,
//         increase: (by) => set((state) => ({ bears: state.bears + by })),
//       }),
//       {
//         name: "bear-storage",
//       }
//     )
//   )
// );
interface Theme{
  
}
interface ThemeState {
  themes: number;
  setTheme: (theme: number) => void;

}

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        themes: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
