import { twMerge } from "tailwind-merge";
import { type BaseDaisyUiThemeKeys, getTailwindBg } from "./helpers/daisy-ui-css-variables";
import type { GenericThemeState } from "./helpers/types";
import type { ThemeSearchParmsTypes } from "./helpers/daisy-ui-schema";
import { useNavigate } from "@tanstack/react-router";
import { useState, useTransition } from "react";

export type BGandContentObject<T extends BaseDaisyUiThemeKeys> = {
  [key in T]: GenericThemeState;
};

interface DaisyUIColorThemeCardProps<T extends BaseDaisyUiThemeKeys> {
  group_name: T;
  theme_group: BGandContentObject<T>;
}

export function DaisyUIColorThemeCard<T extends BaseDaisyUiThemeKeys>({
  theme_group,
  group_name,
}: DaisyUIColorThemeCardProps<T>) {
  const themes = Object.entries<GenericThemeState>(theme_group);
  return (
    <div className="w-full   xs:w-1/2 sm:w-1/3  lg:w-1/5  flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">{group_name}</h1>
      <ul className="w-full h-full flex flex-col items-center justify-center gap-1">
        {themes.map(([key, theme]) => {
          const { bg, content } = getTailwindBg(theme.name as any);
          return (
            <li
              key={key + theme.variable}
              className="w-full h-12 flex flex-col justify-center rounded-lg">
              <div
                key={theme.name}
                className={twMerge(
                  bg,
                  content,
                  "w-full h-full rounded-lg flex flex-col  justify-center items-center"
                )}>
                {theme.value}
                <span className="text-xs">{theme.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
interface DaisyUIBaseColorThemeCardProps {
  theme_group: {
    "base-100": GenericThemeState;
    "base-200": GenericThemeState;
    "base-300": GenericThemeState;
    "base-content": GenericThemeState;
  };
}
export function DaisyUIABaseColorThemeCard({ theme_group }: DaisyUIBaseColorThemeCardProps) {
  const themes = Object.entries<GenericThemeState>(theme_group);
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">base</h1>
      <ul className="w-full flex flex-wrap items-center justify-center gap-1">
        {themes.map(([key, theme]) => {
          const { bg, content } = getTailwindBg(theme.name as any);
          return (
            <li
              key={key + theme.variable}
              className="w-full h-12  xs:w-1/2 sm:w-1/3  lg:w-1/5  flex flex-col justify-center rounded-lg">
              <div
                key={theme.name}
                className={twMerge(
                  bg,
                  content,
                  "w-full h-full rounded-lg flex flex-col  justify-center items-center"
                )}>
                {theme.value}
                <span className="text-xs">{theme.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type ThemeCurves = ThemeSearchParmsTypes["curves"];
// type ThemeCurves = {
//     rounded_box?: {
//         value: string;
//         name: "rounded-box";
//         variable: "--rounded-box";
//         locked?: boolean | undefined;
//     } | undefined;
//     rounded_btn?: {
//         value: string;
//         name: "rounded-btn";
//         variable: "--rounded-btn";
//         locked?: boolean | undefined;
//     } | undefined;
//     ... 6 more ...;
//     tab_radius?: {
//         ...;
//     } | undefined;
// } | undefined

type ThemeCurveKeys = ThemeCurves extends undefined ? never : keyof ThemeCurves;

interface DaisyUIBaseCurvesThemeCardProps {
  theme_group:{
    [key in ThemeCurveKeys]: ThemeCurves[key]
  }
}
export function DaisyUIABaseCurvesThemeCard({ theme_group }: DaisyUIBaseCurvesThemeCardProps) {
  const curves = Object.entries<DaisyUIBaseCurvesThemeCardProps["theme_group"]>(theme_group);
  const navigate  = useNavigate()
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-1">
      <h1 className="text-xl font-bold">curves</h1>
      <ul className="w-full flex flex-wrap items-center justify-center gap-2 ">
        {curves.map(([key, theme]) => {
          const row = theme as  GenericThemeState
         const [input,setInput]=useState(row.value)
          const [,startTransition] = useTransition()
          return (
            <div
              key={key + row.variable}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-12   flex flex-col justify-center rounded-lg">
              <h2 className="text-sm font-bold">{key}</h2>
              <input
               key={input}
                className="w-full input input-sm flex flex-col justify-center rounded-lg"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  startTransition(() => {
                    navigate({
                      search: {
                        curves: {
                          ...theme_group,
                          [row.name]: {
                            ...theme,
                            [key]: e.target.value,
                          },
                        },
                      },
                    });
                  });
                }}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
