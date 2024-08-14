import * as radixColors from "@radix-ui/colors";
import { baseColorNames } from "./helpers";
interface RadixColorPickerProps {}

export function RadixColorPicker({}: RadixColorPickerProps) {
 const radixColorsArray = Object.entries(radixColors);
  const onlyBaseColors = radixColorsArray.filter(([k, v]) => {
    return baseColorNames.includes(k as any);
  })
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[2%]">
      <h1 className="text-3xl font-bold ">Radix colors</h1>
      <ul className="w-full flex flex-col  justify-center items-center">
        {onlyBaseColors.map(([k, v]) => {
          return (
            <li
              key={k}
              className="w-full flex flex-col justify-center items-center rounded-lg gap-1">
              <div className="">{k}</div>
              <ul className="w-full flex flex-wrap justify-center items-center gap-1">
                {Object.entries(v).map(([k2, v2]) => {
                  return (
                    <li
                      style={{ backgroundColor: v2 }}
                      className="size-10 rounded-lg"
                      key={`${k}-${k2}`}></li>
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
