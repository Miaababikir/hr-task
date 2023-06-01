import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: "transparent",
    borderRadius: "md",
    borderColor: "transparent",
    boxShadow: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    _disabled: {
      cursor: "not-allowed",
    },
  },

  sizes: {
    sm: {
      px: "2",
      py: "1",
    },
    base: {
      px: "4",
      py: "3",
    },
  },
  variants: {
    primary: {
      bg: "purple.600",
      color: "white",
      _hover: {
        bg: "purple.700",
      },
    },
    secondary: {
      bg: "yellow.400",
      color: "white",
      _hover: {
        bg: "yellow.500",
      },
    },
    danger: {
      bg: "red.500",
      color: "white",
      _hover: {
        bg: "red.600",
      },
    },
    light: {
      bg: "gray.200",
      color: "gray.600",
      _hover: {
        bg: "gray.300",
      },
    },
    dark: {
      bg: "gray.700",
      color: "white",
      _hover: {
        bg: "gray.800",
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "base",
    variant: "primary",
  },
};

export default Button;
