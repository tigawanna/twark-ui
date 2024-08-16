import { defaultThemes } from "@/components/daisyui/helpers/use-default-theme";
import { useSearch } from "@tanstack/react-router";
import {  useState } from "react";

export function useDefaultTheme() {
  const themeSearchParams = useSearch({
    from: "/",
  });
  const [themes,] = useState(defaultThemes({ theme: themeSearchParams }));
  // useEffect(() => {
  //   const mutationObserver = new MutationObserver(() => {
  //     setThems(defaultThemes({}));
  //   });
  //   mutationObserver.observe(document.documentElement, {
  //     attributes: true,
  //     attributeFilter: ["data-theme"],
  //   });
  //   return () => {
  //     mutationObserver.disconnect();
  //   };
  // }, []);

  return themes;
}
