
import { oklch } from "culori";
import type { ThemeSearchParmsTypes } from "./daisy-ui-schema";
import {useOklchConverter} from "@builtwithjavascript/oklch-converter";
import { oklchColorObjectToString } from "./quolla";


export function updateCSSVariable({ key, value }: { key: string; value: string }) {
  const oklchValue = oklch(value);
  if(!oklchValue) return
  document.documentElement.style.setProperty(key, oklchColorObjectToString(oklchValue));
}

export function loadCSSVariablesFromThemeObject({ theme }: { theme: ThemeSearchParmsTypes }) {
  const { primary, secondary, accent, neutral, base, info, success, warning, error, curves } =
    theme;
  //  set html data-theme attribute
  if (theme.theme) {
    document.documentElement.setAttribute("data-theme", theme.theme);
  }
  if (base) {
    if (base?.["base-100"]) {
      updateCSSVariable({ key: base["base-100"].variable, value: base["base-100"].value });
    }

    if (base?.["base-200"]) {
      updateCSSVariable({ key: base["base-200"].variable, value: base["base-200"].value });
    }

    if (base?.["base-300"]) {
      updateCSSVariable({ key: base["base-300"].variable, value: base["base-300"].value });
    }

    if (base?.["base-content"]) {
      updateCSSVariable({ key: base["base-content"].variable, value: base["base-content"].value });
    }
  }

  if (primary) {
    if (primary?.primary) {
      updateCSSVariable({ key: primary.primary.variable, value: primary.primary.value });
    }
    if (primary?.["primary-content"]) {
      updateCSSVariable({
        key: primary["primary-content"].variable,
        value: primary["primary-content"].value,
      });
    }
  }
  if (secondary) {
    if (secondary?.secondary) {
      updateCSSVariable({ key: secondary.secondary.variable, value: secondary.secondary.value });
    }
    if (secondary?.["secondary-content"]) {
      updateCSSVariable({
        key: secondary["secondary-content"].variable,
        value: secondary["secondary-content"].value,
      });
    }
  }

  if (accent) {
    if (accent?.accent) {
      updateCSSVariable({ key: accent.accent.variable, value: accent.accent.value });
    }
    if (accent?.["accent-content"]) {
      updateCSSVariable({
        key: accent["accent-content"].variable,
        value: accent["accent-content"].value,
      });
    }
  }

  if (neutral) {
    if (neutral?.neutral) {
      updateCSSVariable({ key: neutral.neutral.variable, value: neutral.neutral.value });
    }
    if (neutral?.["neutral-content"]) {
      updateCSSVariable({
        key: neutral["neutral-content"].variable,
        value: neutral["neutral-content"].value,
      });
    }
  }

  if (info) {
    if (info?.info) {
      updateCSSVariable({ key: info.info.variable, value: info.info.value });
    }
    if (info?.["info-content"]) {
      updateCSSVariable({ key: info["info-content"].variable, value: info["info-content"].value });
    }
  }

  if (success) {
    if (success?.success) {
      updateCSSVariable({ key: success.success.variable, value: success.success.value });
    }
    if (success?.["success-content"]) {
      updateCSSVariable({
        key: success["success-content"].variable,
        value: success["success-content"].value,
      });
    }
  }

  if (warning) {
    if (warning?.warning) {
      updateCSSVariable({ key: warning.warning.variable, value: warning.warning.value });
    }
    if (warning?.["warning-content"]) {
      updateCSSVariable({
        key: warning["warning-content"].variable,
        value: warning["warning-content"].value,
      });
    }
  }

  if (error) {
    if (error?.error) {
      updateCSSVariable({ key: error.error.variable, value: error.error.value });
    }
    if (error?.["error-content"]) {
      updateCSSVariable({
        key: error["error-content"].variable,
        value: error["error-content"].value,
      });
    }
  }

  if (curves) {
    if (curves?.animation_btn) {
      updateCSSVariable({ key: curves.animation_btn.variable, value: curves.animation_btn.value });
    }
    if (curves?.animation_input) {
      updateCSSVariable({
        key: curves.animation_input.variable,
        value: curves.animation_input.value,
      });
    }
    if (curves?.tab_border) {
      updateCSSVariable({ key: curves.tab_border.variable, value: curves.tab_border.value });
    }
    if (curves?.tab_radius) {
      updateCSSVariable({ key: curves.tab_radius.variable, value: curves.tab_radius.value });
    }
    if (curves?.border_btn) {
      updateCSSVariable({ key: curves.border_btn.variable, value: curves.border_btn.value });
    }
    if (curves.rounded_box) {
      updateCSSVariable({ key: curves.rounded_box.variable, value: curves.rounded_box.value });
    }
    if (curves.rounded_badge) {
      updateCSSVariable({ key: curves.rounded_badge.variable, value: curves.rounded_badge.value });
    }
    if (curves.btn_focus_scale) {
      updateCSSVariable({
        key: curves.btn_focus_scale.variable,
        value: curves.btn_focus_scale.value,
      });
    }
  }
}

export function hexToOKlch(hex: string) {
  const ok_lch = useOklchConverter().hexToOklchString(hex);
  const only_values_oklch = ok_lch.split("oklch")[1].replace(/\(|\)/g, "");
  return only_values_oklch;
}


// export function hexToOKlch(hex: string) {
//   // exmaple input ff0000;
//   const ok_lch = useOklchConverter().hexToOklchString(hex);
//   // console.log(ok_lch) oklch(0.57 0.35 41.7)'
//   const only_values_oklch = ok_lch.split("oklch")[1].replace(/\(|\)/g, "");
//   // console.log(only_values_oklch);0.57 0.35 41.7
//   return only_values_oklch;
// }

// export function changeColorValuesToObject(input: string): {
//   l: number;
//   c: number;
//   h: number;
//   a: number;
// } {
//   const match = input.match(/(\d+(?:\.\d+)?)%?/g);
//   const [lStr, cStr, hStr] = match ? match.map(Number.parseFloat) : [0, 0, 0];
//   return { l: lStr || 0, c: cStr || 0, h: hStr || 0, a: 1 };
//   // ex: changeColorValuesToObject("oklch(0.57 0.35 41.7)") returns { l: 0.57, c: 0.35, h: 41.7, a: 1 }
// }


  // "--p: 15 79.3% 17.1%; --pf: 64 86% 44.9%; --pc: 0 87.8% 48%; --s: 314 100% 47.1%; --sf: 314 100% 37.1%; --sc: 0 0% 100%; --a: 174 60% 51%; --af: 174 58.9% 41%; --ac: 0 0% 100%; --n: 218 13.9% 26.9%; --nf: 222 13.4% 19%; --nc: 0 0% 100%; --b1: 0 0% 100%; --b2: 210 20% 98%; --b3: 213 12.6% 82.9%; --bc: 215 26.8% 16.1%; --in: 207 89.2% 52.9%; --su: 174 100% 29%; --wa: 36 100% 50%; --er: 14 100% 57.1%; --border-color: 216 12.2% 83.9%; --rounded-box: 1rem; --rounded-btn: .5rem; --rounded-badge: 1.9rem; --animation-btn: .25s; --animation-input: .2s; --btn-text-case: uppercase; --btn-focus-scale: .95; --navbar-padding: .5rem; --border-btn: 1px; --tab-border: 1px; --tab-radius: .5rem;";
