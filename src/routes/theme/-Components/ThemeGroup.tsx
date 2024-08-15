import {
  getTailwindBg,
  type BaseDaisyUiThemeKeys,
} from "@/components/daisyui/daisyui-css-variables";
import { twMerge } from "tailwind-merge";

type BaseDaisyUiThemeKeysWithoutBase = Exclude<BaseDaisyUiThemeKeys, "base">;

type PosiibleThemeKeys =
  | BaseDaisyUiThemeKeysWithoutBase
  | `${BaseDaisyUiThemeKeysWithoutBase}-content`
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-content"

interface ThemeGroupCardsProps {
  group: BaseDaisyUiThemeKeys;
  name: PosiibleThemeKeys;
  value: string;
  variable: string;
}

export function ThemeGroupCards({name,value,variable}: ThemeGroupCardsProps) {
     const { bg, content } = getTailwindBg(name);
  return (
    <li
      key={variable}
      className="w-full h-24 flex flex-col justify-center rounded-lg hover:scale-110">
      <div
        key={value}
        className={twMerge(
          bg,
          content,
          "w-full h-full rounded-lg flex flex-col  justify-center items-center"
        )}>
        {value}
        <span className="text-xs">{variable}</span>
      </div>
    </li>
  );
}
