import React, { ReactText } from "react";
import { Flex, Link as ChakraLink, FlexProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icon";
import Link from "next/link";

interface Props extends FlexProps {
  icon: any;
  href: string;
  children: ReactText;
}
const SidebarItem = ({ href, icon, children, ...rest }: Props) => {
  return (
    <ChakraLink
      as={Link}
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        transition=".5s ease"
        align="center"
        p="4"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "purple.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </ChakraLink>
  );
};

export default SidebarItem;
