import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { useSearch } from "@tanstack/react-router";

interface DaisyUiThemesProps {}

export function DaisyUiThemePage({}: DaisyUiThemesProps) {
  const themeValues = useSearch({
    from: "/",
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold ">DaisyUI Themes</h1>
      <DaisyUIThemes theme={themeValues} />
    </div>
  );
}
