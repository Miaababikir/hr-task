"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Avatar,
  Text,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
  Button,
  Badge,
} from "@chakra-ui/react";
import Link from "next/link";
import { users } from "@/utils/data/users";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { DownloadIcon } from "@chakra-ui/icons";
import { format } from "date-fns";

const ViewCandidate = ({ params }: any) => {
  const { id } = params;

  const user = users.find((user) => user.id === id);
  const currentJob = user?.profile?.workExperience
    ? user?.profile?.workExperience[0]
    : undefined;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/dashboard">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/dashboard/candidates">
            Candidates
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>View</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        bg="white"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        mt={4}
        rounded="md"
      >
        <Flex alignItems="center">
          <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
          <Flex direction="column" ml={2}>
            <Text
              fontWeight="bold"
              fontSize="lg"
            >{`${user?.firstName} ${user?.lastName}`}</Text>
            <Text
              fontSize="xs"
              color="gray.500"
            >{`${currentJob?.company} . ${currentJob?.position}`}</Text>
          </Flex>
        </Flex>
        <ChakraLink
          bg="purple.500"
          px={3}
          py={1}
          color="white"
          rounded="sm"
          href={user?.profile?.cv}
          isExternal
          _hover={{ underline: "none" }}
        >
          Download CV <DownloadIcon ml={1} />
        </ChakraLink>
      </Flex>
      <Box bg="white" p={4} mt={4} rounded="md">
        <SimpleGrid columns={2}>
          <Box>
            <Heading as="h2" fontSize="2xl">
              Work experiences
            </Heading>
            {user?.profile?.workExperience?.map((item) => (
              <Box pb={2} mt={4}>
                <Flex direction="column">
                  <Text fontSize="lg" fontWeight="bold">
                    {item.company}
                  </Text>
                  <Text>
                    <Text as="span" fontSize="sm" fontWeight="light">
                      {item.position}
                    </Text>{" "}
                    -{" "}
                    <Text as="span" fontSize="sm" fontWeight="light">
                      {format(item.startDate, "MMM yyyy")} -
                      {format(item.endDate, "MMM yyyy")}
                    </Text>
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
          <Box>
            <Heading as="h2" fontSize="2xl">
              Knowledge & skills
            </Heading>
            <Box mt={2}>
              {user?.profile?.technicalKnowledge.map((skill) => (
                <Badge mr={2}>{skill}</Badge>
              ))}
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg="white" p={4} mt={4} rounded="md">
        <Heading as="h2" fontSize="2xl">
          Personal Information
        </Heading>
        <SimpleGrid columns={3} spacing={4} mt={4}>
          <Flex alignItems="center">
            <Box
              p={2}
              rounded="full"
              bg="gray.100"
              color="gray.500"
              display="inline"
            >
              <FiMail />
            </Box>
            <Text ml={2} fontSize="sm">
              {user?.email}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box
              p={2}
              rounded="full"
              bg="gray.100"
              color="gray.500"
              display="inline"
            >
              <FiPhone />
            </Box>
            <Text ml={2} fontSize="sm">
              {user?.profile?.contacts ? user?.profile?.contacts[0] : "NA"}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box
              p={2}
              rounded="full"
              bg="gray.100"
              color="gray.500"
              display="inline"
            >
              <FiMapPin />
            </Box>
            <Text ml={2} fontSize="sm">
              {user?.profile?.address}
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ViewCandidate;
