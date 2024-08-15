
import { useEffect, useState } from "react";
import { defaultThemes } from "./helpers";

export function useDefaultTheme() {
    const [themes, setThems] = useState(defaultThemes({}));
      useEffect(() => {
        const mutationObserver = new MutationObserver(() => {
          setThems(defaultThemes({}));
        });
        mutationObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["data-theme"],
        });
        return () => {
          mutationObserver.disconnect();
        };
      }, []);

      return themes;
}
