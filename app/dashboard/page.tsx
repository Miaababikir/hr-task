"use client";

import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiBarChart, FiBriefcase, FiLoader, FiUsers } from "react-icons/fi";
import Bar from "@/components/charts/bar";
import { barChartDataset, pieChartDataset } from "@/utils/data/datasets";
import Pie from "@/components/charts/pie";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/dashboard">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt={4}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Flex alignItems="center">
              <Box p={4} bg="purple.400" color="white" rounded="full">
                <FiUsers size={20} />
              </Box>
              <Flex direction="column" ml={2}>
                <Text>Active users</Text>
                <Text fontSize="xl" fontWeight="bold">
                  14,577
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Flex alignItems="center">
              <Box p={4} bg="green.400" color="white" rounded="full">
                <FiBriefcase size={20} />
              </Box>
              <Flex direction="column" ml={2}>
                <Text>Job applications</Text>
                <Text fontSize="xl" fontWeight="bold">
                  54,157
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Flex alignItems="center">
              <Box p={4} bg="yellow.400" color="white" rounded="full">
                <FiLoader size={20} />
              </Box>
              <Flex direction="column" ml={2}>
                <Text>Pending requests</Text>
                <Text fontSize="xl" fontWeight="bold">
                  145
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Flex alignItems="center">
              <Box p={4} bg="teal.300" color="white" rounded="full">
                <FiBarChart size={20} />
              </Box>
              <Flex direction="column" ml={2}>
                <Text>Available jobs</Text>
                <Text fontSize="xl" fontWeight="bold">
                  4,588
                </Text>
              </Flex>
            </Flex>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Bar
              title="New registered users per month"
              data={barChartDataset}
            />
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Bar
              title="Job applications per month for the last year"
              data={barChartDataset}
            />
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Pie data={pieChartDataset} />
          </Box>
          <Box
            bg="white"
            p={4}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            color="gray.600"
            shadow="sm"
          >
            <Pie data={pieChartDataset} />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Dashboard;
