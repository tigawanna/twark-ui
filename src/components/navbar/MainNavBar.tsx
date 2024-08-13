import { DaisyuiThemesSelect } from "./DaisyuiThemesSelect";

interface MainNavBarProps {

}

export function MainNavBar({}:MainNavBarProps){
return (
 <div className='w-full sticky top-0 flex  items-center justify-between p-5'>
 <h1 className='text-xl font-bold '>TWARK UI</h1>
    <DaisyuiThemesSelect/>
 </div>
);
}
