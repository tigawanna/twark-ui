import { DaisyUIThemes } from "@/components/daisyui/DaisyUIThemes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <DaisyUIThemes />
    </div>
  );
}
