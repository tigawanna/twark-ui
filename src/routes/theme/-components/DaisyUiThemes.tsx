import { useSearch } from "@tanstack/react-router";

interface DaisyUiThemesProps {}

export function DaisyUiThemes({}: DaisyUiThemesProps) {
  const {primary,secondary,neutral,accent,base,info,success,warning,error} = useSearch({
    from: "/",
  });

console.log(primary,secondary,neutral,accent,base,info,success,warning,error)

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold ">DaisyUI Themes</h1>
      <div className="w-full h-full flex flex-col items-center justify-center">
         {primary?.primary.value}
      </div>
    </div>
  );
}
