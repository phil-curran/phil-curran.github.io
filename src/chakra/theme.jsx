import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'JetBrains Mono', monospace`,
    heading: `'JetBrains Mono', monospace`,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
        backgroundColor: "black", // Use the custom gray color from the theme
        color: "#f8f8f2",
      },
    },
  },
  colors: {
    black: "#1f1f1f",
    gray: "#242424", // Assign a shade for gray
  },
});

export default theme;
