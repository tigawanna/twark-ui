import { twMerge } from "tailwind-merge";
import { getTailwindBg } from "./helpers/daisy-ui-css-variables";
import type { BaseDaisyUiThemeKeysWithoutBase, GenericThemeState } from "./helpers/types";

export type BGandContentObject<T extends BaseDaisyUiThemeKeysWithoutBase> = {
  [key in T]: GenericThemeState;
};

interface DaisyUIColorThemeCardProps<T extends BaseDaisyUiThemeKeysWithoutBase> {
    group_name: T;
  theme_group: BGandContentObject<T>;
}

export function DaisyUIColorThemeCard<T extends BaseDaisyUiThemeKeysWithoutBase>({theme_group,group_name}:DaisyUIColorThemeCardProps<T>){
const themes = Object.entries < GenericThemeState>(theme_group);
    return (
      <div className="w-full   xs:w-1/2 sm:w-1/3  lg:w-1/4  flex flex-col items-center justify-center gap-1">
        <h1 className="text-xl font-bold">{group_name}</h1>
        <ul className="w-full h-full flex flex-col items-center justify-center">
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
