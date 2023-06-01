import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import { extendTheme } from "@chakra-ui/react";
import Button from "@/theme/button";

export const index = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
        color: "gray.700",
      },
    }),
  },
  components: {
    Button: Button,
  },
});
