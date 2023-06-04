"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { users as data } from "@/utils/data/users";
import Table from "@/components/table/table";
import { columns } from "@/app/dashboard/candidates/columns";
import { UserRole } from "@/shared/enums/user-role.enum";
import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { SiMicrosoftexcel } from "react-icons/si";

const users = data.filter((user) => user.role === UserRole.Candidate);
const Users = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/dashboard">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Candidates</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize="2xl" mt={4}>
          Candidates Table
        </Heading>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              rounded="sm"
              rightIcon={<ChevronDownIcon />}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem icon={<SiMicrosoftexcel />}>Export Candidates</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box p={2} bg="white" shadow="sm" mt={4} rounded="md">
        <Table idProperty="id" columns={columns} data={users} scrollable />
      </Box>
    </>
  );
};

export default Users;
