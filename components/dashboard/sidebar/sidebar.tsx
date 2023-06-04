import React from "react";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { FiBriefcase, FiHome, FiSettings, FiUsers } from "react-icons/fi";
import SidebarItem from "@/components/dashboard/sidebar/sidebar-item";

interface LinkItemProps {
  name: string;
  icon: any;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/dashboard" },
  { name: "Users", icon: FiUsers, href: "/dashboard/users" },
  { name: "Candidates", icon: FiBriefcase, href: "/dashboard/candidates" },
  { name: "Settings", icon: FiSettings, href: "/dashboard" },
];

interface Props extends BoxProps {
  onClose: () => void;
}

const Sidebar = ({ onClose, ...rest }: Props) => {
  return (
    <Box
      transition="3s ease"
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      color="gray.300"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex alignItems="center">
          <Image
            src="/logo-dark.svg"
            alt="Logo"
            width="10"
            borderRadius="full"
          />{" "}
          <Text ml="2" fontSize="xl" fontWeight="bold">
            Dashboard
          </Text>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <SidebarItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </SidebarItem>
      ))}
    </Box>
  );
};

export default Sidebar;
