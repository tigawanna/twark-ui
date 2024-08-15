import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useDefaultTheme } from "./theme/-components/use-default-theme";
import { daisyUIThemeSchema } from "./theme/-components/helpers";

export const Route = createFileRoute("/")({
  component: HomePage,
  validateSearch(input) {
    return daisyUIThemeSchema.parse(input);
  },
});

export function HomePage() {
const theme = useDefaultTheme()
console.log(theme)
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <Link to="/theme" search={theme} className="hover-:text-blue-500 text-3xl">
        Remix
      </Link>
      <DaisyUIThemes />
    </div>
  );
}
