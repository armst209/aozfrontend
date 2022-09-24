import { createTheme } from "@mui/material";
import components from "./config/components";
import palette from "./config/palette";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const aozTheme = createTheme({ components, palette });

console.log(aozTheme);
