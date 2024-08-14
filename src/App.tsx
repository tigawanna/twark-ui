import { useEffect } from "react";
import { themeChange } from "theme-change";
import { MainNavBar } from "./components/navbar/MainNavBar";
import { CssvariablesView } from "./components/daisyui/CssVariablesView";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-base-100">
      <MainNavBar />
      <CssvariablesView/>
    </div>
  );
}

export default App;
