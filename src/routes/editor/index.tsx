import { daisyUIThemeSchema } from '@/components/daisyui/helpers/daisy-ui-schema';
import { OkLCHColor } from '@/components/oklch/OkLCHColor';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/editor/")({
  component: Editor,
  validateSearch(input) {
    return daisyUIThemeSchema.parse(input);
  },
});

export function Editor(){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
<OkLCHColor/>
 </div>
);
}
