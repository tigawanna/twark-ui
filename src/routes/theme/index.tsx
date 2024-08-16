import { createFileRoute } from '@tanstack/react-router'
import { DaisyUiThemePage } from "./-components/DaisyUiThemes";
import { daisyUIThemeSchema } from '@/components/daisyui/helpers/daisy-ui-schema';

export const Route = createFileRoute("/theme/")({
  component: ThemePage,
  // validateSearch(input) {
  //   return daisyUIThemeSchema.parse(input);
  // },
});


export function ThemePage(){
return (
  <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
    <h1>Theme</h1>
    <DaisyUiThemePage />
  </div>
);
}
