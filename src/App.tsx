import { useEffect } from "react";
import { themeChange } from "theme-change";
import { MainNavBar } from "./components/navbar/MainNavBar";
import { CssvariablesView } from "./components/daisyui/DaisyUIThemes";
import { RadixColorPicker } from "./components/radix/RadixColorPicker";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-base-100">
      <MainNavBar />
      <RadixColorPicker/>
      <CssvariablesView/>
    </div>
  );
}

export default App;
