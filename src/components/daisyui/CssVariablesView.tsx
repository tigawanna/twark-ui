import { useEffect, useState } from "react";
import { getDaisyUiColors, getTailwindBg } from "./css-variables";
import { twMerge } from "tailwind-merge";

interface CssvariablesViewProps {}

export function CssvariablesView({}: CssvariablesViewProps) {
  const [colors, setColors] = useState(getDaisyUiColors());
  useEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      setColors(getDaisyUiColors());
    });
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold ">CSS Variables</h1>
      <div className="size-10 bg-secondary"></div>
      <ul className="w-full h-full flex flex-wrap items-center justify-center p-5">
        {colors.map((color) => {
          const value = color.value;
          const twStylsx = getTailwindBg(color.name);
          return (
            <li
              key={color.variable}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 h-16 flex flex-col justify-center rounded-lg">
              {color.name}
              <div key={value} className={twMerge(twStylsx, "w-full h-full rounded-lg")}>
                {value}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
