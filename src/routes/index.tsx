import {
  DaisyUIABaseColorThemeCard,
  DaisyUIABaseCurvesThemeCard,
  DaisyUIColorThemeCard,
} from "@/components/daisyui/DaisyUIColorThemeCard";
import { createFileRoute } from "@tanstack/react-router";
import { useDefaultTheme } from "./theme/-components/use-default-theme";
import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const defaultTheme = useDefaultTheme();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        <DaisyUIThemes theme={defaultTheme}/>
    </div>
  );
}
