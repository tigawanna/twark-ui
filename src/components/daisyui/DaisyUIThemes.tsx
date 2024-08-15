import { useEffect, useState } from "react";
import {
  type base_daisyui_theme_names,
  getDaisyUiColors,
  getTailwindBg,
} from "./daisyui-css-variables";
import { twMerge } from "tailwind-merge";
import { ThemeGroupCards } from "@/routes/theme/-Components/ThemeGroup";


export function DaisyUIThemes() {
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

  type GroupItemKey = keyof typeof base_daisyui_theme_names;
  type GroupItem = (typeof colors)[number];
  type GroupedThems = Record<GroupItemKey, GroupItem[]>;

  const groupedThemes = colors.reduce((acc: GroupedThems, curr) => {
    const [key] = curr.name.split("-");

    if (curr.name.includes(key)) {
      acc[key as GroupItemKey] = acc[key as GroupItemKey]
        ? [...acc[key as GroupItemKey], curr]
        : [curr];
    }
    return acc;
  }, {} as GroupedThems);

  const groupedThemesArray = Object.entries(groupedThemes);
  // console.log("==========  grouped them object =================",groupedThemes);
  // console.log("==========  grouped them object primary =================",groupedThemes.primary);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold ">Daisy UI theme</h1>
      <ThemeGroupCards<"primary">
        group={{
          primary: {
            name: "primary",
            value: "uw",
            variable: "uwu",
          },
          "primary-content": {
            name: "primary-content",
            value: "uw",
            variable: "uwu",
          },
        }}
      />
      <ul className="w-full h-full flex flex-wrap items-center justify-center p-5 gap-5 divide-y">
        {groupedThemesArray.map(([key, value]) => {
          return (
            <li
              key={key}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2  flex flex-wrap justify-center  gap-2">
              <span className="text-3xl font-bold">{key}</span>
              <ul className="w-full flex flex-col justify-center rounded-lg gap-2">
                {value.map((theme) => {
                  const value = theme.value;
                  const { bg, content } = getTailwindBg(theme.name);
                  return (
                    <li                      key={theme.variable}
                      className="w-full h-24 flex flex-col justify-center rounded-lg hover:scale-110">
                      <div
                        key={value}
                        className={twMerge(
                          bg,
                          content,
                          "w-full h-full rounded-lg flex flex-col  justify-center items-center"
                        )}>
                        {value}
                        <span className="text-xs">{theme.name}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
