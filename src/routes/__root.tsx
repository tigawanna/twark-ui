import { createRootRouteWithContext, Outlet, useNavigate, useSearch } from "@tanstack/react-router";
import type { RouterCntextTypes } from "@/main";
import { MainNavBar } from "@/components/navbar/MainNavBar";
import { useEffect, useTransition } from "react";
import { themeChange } from "theme-change";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { daisyUIThemeSchema } from "@/components/daisyui/helpers/daisy-ui-schema";
import { defaultThemes } from "@/components/daisyui/helpers/use-default-theme";
import { TailwindIndicator } from "@/components/misc/tailwind-indicator";
import { loadCSSVariablesFromThemeObject } from "@/components/daisyui/helpers/css-variables";

export const Route = createRootRouteWithContext<RouterCntextTypes>()({
  component: RootComponent,
  validateSearch(input) {
    return daisyUIThemeSchema.parse(input);
  },
});

export function RootComponent() {
  const searchParams = useSearch({
    from: "/",
  });
  const navigate = useNavigate({
    from:"/"
  })
  const [, startTransition] = useTransition()


  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  
  useEffect(() => {
    // loadCSSVariablesFromThemeObject({theme:searchParams})
    const mutationObserver = new MutationObserver(() => {
      startTransition(() => {navigate({ search: { theme: searchParams.theme, ...defaultThemes({}) } })});
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
