import {
  DaisyUIABaseColorThemeCard,
  DaisyUIABaseCurvesThemeCard,
  DaisyUIColorThemeCard,
} from "@/components/daisyui/DaisyUIColorThemeCards";
import { createFileRoute } from "@tanstack/react-router";
import { useDefaultTheme } from "./theme/-components/use-default-theme";
import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { useDefaultStore } from "@/components/daisyui/them-defaults";
import { OkLCHColor } from "@/components/oklch/OkLCHColor";

export const Route = createFileRoute("/")({
  component: HomePage,


});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const defaultTheme = useDefaultTheme();
  const {themes,setTheme} = useDefaultStore((state) => state);
  console.log(themes.cupcake.primary)
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <OkLCHColor/>
      <DaisyUIThemes theme={defaultTheme} />
    </div>
  );
}
