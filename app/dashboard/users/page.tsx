"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";
import Link from "next/link";
import { users } from "@/utils/data/users";
import Table from "@/components/table/table";
import { columns } from "@/app/dashboard/users/columns";
import { UserRole } from "@/shared/enums/user-role.enum";

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
          <BreadcrumbLink>Users</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize="2xl" mt={4}>
          Users Table
        </Heading>
        <Flex alignItems="center">
          <Input size="sm" bg="white" placeholder="Search..." />
          <Select ml={2} size="sm" bg="white" placeholder="Role">
            <option value={UserRole.SuperAdmin}>Super Admin</option>
            <option value={UserRole.Admin}>Admin</option>
            <option value={UserRole.Candidate}>Candidate</option>
          </Select>
        </Flex>
      </Flex>
      <Box p={2} bg="white" shadow="sm" mt={4} rounded="md">
        <Table idProperty="id" columns={columns} data={users} scrollable />
      </Box>
    </>
  );
};

export default Users;
