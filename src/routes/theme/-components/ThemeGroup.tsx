import {getTailwindBg} from "@/components/daisyui/helpers/daisy-ui-css-variables";
import { twMerge } from "tailwind-merge";
import type { BaseDaisyUiThemeKeysWithoutBase, ColorGroupProps } from "../../../components/daisyui/helpers/types";



export function ThemeGroupCards<T extends BaseDaisyUiThemeKeysWithoutBase>(
  theme: ColorGroupProps<T>
) {
  const theme_variants = Object.entries<{ name: T; value: string; variable: string }>(theme);
  return (
    <ul className="w-full h-full flex flex-col items-center justify-center">
      {theme_variants.map(([key, value]) => {
        const { bg, content } = getTailwindBg(value.name);
        return (
          <li
            key={value.variable}
            className="w-full h-14 flex flex-col justify-center rounded-lg hover:scale-110">
              <div>{key}</div>
            <div
              key={value.name}
              className={twMerge(
                bg,
                content,
                "w-full h-full rounded-lg flex flex-col  justify-center items-center"
              )}>
              {value.variable}
              <span className="text-xs">{value.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
