import { Link } from "@tanstack/react-router";
import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";

interface MainNavBarProps {

}

export function MainNavBar({}:MainNavBarProps){
return (
  <div className="w-full sticky top-0 flex  items-center justify-between p-5">
    <Link to="/">
      <h1 className="text-xl font-bold ">TWARK UI</h1>
    </Link>
    <div className="px-2">
      <Link to="/" className="hover-:text-blue-500">
        <h1 className="">build</h1>
      </Link>
      <Link to="/editor" className="badge hover-:text-blue-500">
        <h1 className="">edito</h1>
      </Link>
    </div>
    <DaisyuiThemesSelect />
  </div>
);
}
