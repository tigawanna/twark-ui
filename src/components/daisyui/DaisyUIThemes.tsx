import {
  DaisyUIColorThemeCard,
  DaisyUIABaseColorThemeCard,
  DaisyUIABaseCurvesThemeCard,
} from "./DaisyUIColorThemeCard";
import type { ThemeSearchParmsTypes } from "./helpers/daisy-ui-schema";

export function DaisyUIThemes({ theme }: { theme: ThemeSearchParmsTypes }) {
  const { primary, secondary, accent, neutral, base, info, success, warning, error, curves } =
    theme;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {primary && <DaisyUIColorThemeCard group_name="primary" theme_group={primary} />}
        {secondary && <DaisyUIColorThemeCard group_name="secondary" theme_group={secondary} />}
        {accent && <DaisyUIColorThemeCard group_name="accent" theme_group={accent} />}
        {neutral && <DaisyUIColorThemeCard group_name="neutral" theme_group={neutral} />}
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-2 p-2">
        {base && <DaisyUIABaseColorThemeCard theme_group={base} />}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {info && <DaisyUIColorThemeCard group_name="info" theme_group={info} />}
        {success && <DaisyUIColorThemeCard group_name="success" theme_group={success} />}
        {warning && <DaisyUIColorThemeCard group_name="warning" theme_group={warning} />}
        {error && <DaisyUIColorThemeCard group_name="error" theme_group={error} />}
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-2 p-2">
        {curves && <DaisyUIABaseCurvesThemeCard theme_group={curves} />}
      </div>
    </div>
  );
}
