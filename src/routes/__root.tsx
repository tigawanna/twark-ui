import { createRootRouteWithContext, Outlet, useNavigate } from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navbar/MainNavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { daisyUIThemeSchema } from "@/components/daisyui/helpers/daisy-ui-schema";
import { defaultThemes } from "@/components/daisyui/helpers/use-default-theme";
import { TailwindIndicator } from "@/components/misc/tailwind-indicator";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch(input) {
    return daisyUIThemeSchema.parse(input);
  },
});

export function RootComponent() {
  const navigate = useNavigate({
    from:"/"
  })
  
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  
  useEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      navigate({search: defaultThemes({}) });
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
      <MainNavBar />
      <Outlet />
      <TailwindIndicator/>
      <TanStackRouterDevtools position="bottom-left" />
    </div>
  );
}
