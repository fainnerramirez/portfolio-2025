import { extendTheme } from "@chakra-ui/react";
import "@fontsource/m-plus-rounded-1c/100.css";
import "@fontsource/m-plus-rounded-1c/300.css";
import "@fontsource/m-plus-rounded-1c/400.css";
import "@fontsource/m-plus-rounded-1c/500.css";
import "@fontsource/m-plus-rounded-1c/700.css";
import "@fontsource/m-plus-rounded-1c/800.css";
import "@fontsource/m-plus-rounded-1c/900.css";

const theme = extendTheme({
  fonts: {
    heading: `'M PLUS Rounded 1c', sans-serif;`,
    body: `'M PLUS Rounded 1c', sans-serif;`,
  },
  initialColorMode: "dark",
});

export default theme;
