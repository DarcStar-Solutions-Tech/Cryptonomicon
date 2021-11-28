import { extendTheme, theme as base, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    "gray.dark": "#1C1C1C",
    "gray.light": "#646464",
    "brand.red": "#E14949",
  },
  fonts: {
    heading: `Asimov Std Bold, ${base.fonts?.heading}`,
    body: `Asimov Std Book, ${base.fonts?.body}`,
  },
});
