import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navbar/MainNavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
});

export function RootComponent() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <MainNavBar />
      <Outlet />
    </div>
  );
}
