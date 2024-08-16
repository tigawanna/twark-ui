import { DaisyUIColorThemeCard } from "@/components/daisyui/DaisyUIColorThemeCard";
import { createFileRoute} from "@tanstack/react-router";
import { useDefaultTheme } from "./theme/-components/use-default-theme";

export const Route = createFileRoute("/")({
  component: HomePage,
});

interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  const { primary, secondary, neutral, accent, base, info, success, warning, error } =
    useDefaultTheme();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {primary && <DaisyUIColorThemeCard group_name="primary" theme_group={primary} />}
        {secondary && <DaisyUIColorThemeCard group_name="secondary" theme_group={secondary} />}
        {accent && <DaisyUIColorThemeCard group_name="accent" theme_group={accent} />}
        {neutral && <DaisyUIColorThemeCard group_name="neutral" theme_group={neutral} />}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {info && <DaisyUIColorThemeCard group_name="info" theme_group={info} />}
        {info && <DaisyUIColorThemeCard group_name="info" theme_group={info} />}
        {success && <DaisyUIColorThemeCard group_name="success" theme_group={success} />}
        {warning && <DaisyUIColorThemeCard group_name="warning" theme_group={warning} />}
        {error && <DaisyUIColorThemeCard group_name="error" theme_group={error} />}
      </div>
    </div>
  );
}
