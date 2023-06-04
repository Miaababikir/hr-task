"use client";

import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

const NavbarItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <ChakraLink
      as={Link}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      href={href}
    >
      {children}
    </ChakraLink>
  );
};

export default NavbarItem;
