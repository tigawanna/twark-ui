

import { ChromePicker, ColorResult } from "react-color";
import { useState } from "react";
interface OkLCHColorProps {

}

export function OkLCHColor({}:OkLCHColorProps){
  const [color, setColor] = useState({ r: 255, g: 0, b: 0 });
  const [oklchColor, setOklchColor] = useState("");
  const handleChangeComplete = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(color.rgb);
    const oklch = rgb2oklch({ r: color.rgb.r, g: color.rgb.g, b: color.rgb.b });
    setOklchColor(`oklch(${oklch.l.toFixed(3)} ${oklch.c.toFixed(3)} ${oklch.h.toFixed(3)})`);
  };
return (
  <div className="w-full h-full flex min-h-[50vh] flex-col items-center justify-center">
    <h1>oklch color picker</h1>
    <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
    <p>Selected color in OKLCH: {oklchColor}</p>
  </div>
);
}
