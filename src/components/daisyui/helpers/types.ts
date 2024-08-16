import type { BaseDaisyUiThemeKeys } from "@/components/daisyui/helpers/daisy-ui-css-variables";

export type BaseDaisyUiThemeKeysWithoutBase = Exclude<BaseDaisyUiThemeKeys, "base">;
export type BGColorRecord<T extends BaseDaisyUiThemeKeysWithoutBase> = Record<
  T,
  {
    name: T;
    value: string;
    variable: string;
    locked?: boolean;
  }
>;
export type ContentColorRecprdKey<T extends BaseDaisyUiThemeKeysWithoutBase> = `${T}-content`;
export type ContentColorRecord<T extends BaseDaisyUiThemeKeysWithoutBase> = Record<
  ContentColorRecprdKey<T>,
  {
    name: T;
    value: string;
    variable: string;
    locked?: boolean;
  }
>;
export type ColorGroupProps<T extends BaseDaisyUiThemeKeysWithoutBase> = BGColorRecord<T> &
  ContentColorRecord<T>;

export interface GenericThemeState {
  name: string;
  value: string;
  variable: string;
  locked?: boolean;
}

export type AllPOssibleThemeKeys =
  | BaseDaisyUiThemeKeysWithoutBase
  | `${BaseDaisyUiThemeKeysWithoutBase}-content`
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-content";


