import { useOklchConverter } from "@builtwithjavascript/oklch-converter";
import { oklch } from "culori";
export function whatTypeOfColor(color: string): "oklch" | "hsl" | "rgb" | "hex" {
  const rgbRegex = /^#([0-9A-F]{3}){1,2}$/i;
  const hslRegex = /^hsl\((\d{1,3}),\s?(\d{1,3})%,\s?(\d{1,3})%\)$/i;
  const oklchRegex = /^oklch\((\d+(?:\.\d+)?),\s?(\d+(?:\.\d+)?),\s?(\d+(?:\.\d+)?)\)$/i;
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;

  if (rgbRegex.test(color)) {
    return "rgb";
  }

  if (hslRegex.test(color)) {
    return "hsl";
  }

  if (oklchRegex.test(color)) {
    return "oklch";
  }
  if (hexRegex.test(color)) {
    return "hex";
  }

  throw new Error(`unknown color format: ${color}`);
}



export function hexToOKlch(hex: string) {
  // exmaple input ff0000;
  const ok_lch = useOklchConverter().hexToOklchString(hex);
  // console.log(ok_lch) oklch(0.57 0.35 41.7)'
  const only_values_oklch = ok_lch.split("oklch")[1].replace(/\(|\)/g, "");
  // console.log(only_values_oklch);0.57 0.35 41.7
  return only_values_oklch;
}

// console.log(whatTypeOfColor("oklch(15,79.3%,17.1%)"));

const cutNumber = (number: number) => {
  try {
    if (number) {
      return +number.toFixed(6);
    }
    return 0;
  } catch (e) {
    // colorIsInvalid(number)
    return false;
  }
};
export function oklchColorObjectToString(input:{l:number,c:number,h:number}){
  const { l, c, h } = input;
    return `${Number.parseFloat((cutNumber(l) * 100).toFixed(6))}% ${cutNumber(c)} ${cutNumber(h)}`;
    
}
export function oklchStringTohex(input:string){
  const { l, c, h } = oklchvariableToColorObject(input);
  return useOklchConverter().oklchToHex({ l, c, h })
}
// 76.6626% 0.135433 153.450024
const startingPointLCH ="76.6626% 0.135433 153.450024";
export function oklchvariableToColorObject(input:string){
  const match = input.match(/(\d+(?:\.\d+)?)%?/g);
  const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
  return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
}
const lchToRgb = oklchStringTohex(startingPointLCH);// #bdbdbd

console.log(lchToRgb);
 const backToLCH = hexToOKlch(lchToRgb);  //'0.798 0.03 214.4'
console.log(oklch(lchToRgb)); 
console.log(backToLCH);
