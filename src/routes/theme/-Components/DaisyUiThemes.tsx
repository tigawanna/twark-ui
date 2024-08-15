import { useSearch } from "@tanstack/react-router";
import { ThemeGroupCards } from "./ThemeGroup";

interface DaisyUiThemesProps {}

export function DaisyUiThemes({}: DaisyUiThemesProps) {
  const {primary,secondary,neutral,accent,base,info,success,warning,error} = useSearch({
    from: "/theme/",
  });
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold ">DaisyUI Themes</h1>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold ">Primary</h1>
        <ThemeGroupCards<"primary"> group={primary} />
        <h1 className="text-xl font-bold ">Secondary</h1>
        <ThemeGroupCards<"secondary"> group={secondary} />
      </div>
    </div>
  );
}
