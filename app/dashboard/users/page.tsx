"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Badge,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  Th,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  FiEdit,
  FiEye,
  FiLock,
  FiMoreHorizontal,
  FiUserCheck,
} from "react-icons/fi";
import Link from "next/link";
import { formatDatetime } from "@/shared/helpers/helpers";
import { users } from "@/data/users";

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
            <option value="option1">Super Admin</option>
            <option value="option2">Admin</option>
            <option value="option3">Candidate</option>
          </Select>
        </Flex>
      </Flex>
      <Box p={2} bg="white" shadow="sm" mt={4} rounded="md">
        <TableContainer maxH="80vh" overflowY="scroll">
          <Table size="sm">
            <Thead position="sticky" top={0} bg="white">
              <Tr>
                <Th>Full name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Created at</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.email}>
                  <Td>{`${user.firstName} ${user.lastName}`}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>
                    <Badge colorScheme={user.isActive ? "green" : "red"}>
                      Active
                    </Badge>
                  </Td>
                  <Td>{formatDatetime(user.createdAt)}</Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<FiMoreHorizontal />}
                        variant="transparent"
                      />
                      <MenuList>
                        <MenuItem icon={<FiEye />}>View</MenuItem>
                        <MenuItem icon={<FiEdit />}>Edit</MenuItem>
                        <MenuItem icon={<FiLock />}>Change password</MenuItem>
                        <MenuItem icon={<FiUserCheck />}>Grant access</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Users;
