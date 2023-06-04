"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailIcon } from "@chakra-ui/icons";
import ControlledInput from "@/components/form/controlled-input";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirmation: yup.string().required(),
});

const Register = () => {
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = () => {
    toast({
      title: "Access requested",
      status: "success",
      description: "You request is pending approval.",
    });
  };

  return (
    <Box bgGradient="linear(to-br, purple.500, purple.700)" minH="100vh" px={4}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Box
          bg="white"
          px={{ base: 4, sm: 10 }}
          py={10}
          borderRadius={5}
          w={{ base: "full", sm: "2xl" }}
          shadow="xl"
        >
          <Flex justifyContent="center" alignItems="center">
            <Image
              src="/logo-dark.svg"
              alt="Logo"
              width="16"
              borderRadius="full"
            />
          </Flex>
          <Box mt={4}>
            <Heading as="h2" fontSize="3xl" textAlign="center">
              Request Access
            </Heading>
            <Text textAlign="center" textColor="gray.500">
              It will take less than a minute
            </Text>
          </Box>
          <Box mt={4}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
                <FormControl>
                  <ControlledInput
                    control={control}
                    name="firstName"
                    errors={errors}
                    placeholder="First name"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <ControlledInput
                    control={control}
                    name="lastName"
                    errors={errors}
                    placeholder="Last name"
                    type="text"
                  />
                </FormControl>
              </SimpleGrid>
              <Box my={2}>
                <FormControl>
                  <ControlledInput
                    control={control}
                    name="email"
                    errors={errors}
                    icon={<EmailIcon color="purple.300" />}
                    placeholder="Email address"
                    type="email"
                  />
                </FormControl>
              </Box>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2}>
                <FormControl>
                  <ControlledInput
                    control={control}
                    name="password"
                    errors={errors}
                    placeholder="Password"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <ControlledInput
                    control={control}
                    name="passwordConfirmation"
                    errors={errors}
                    placeholder="Password Confirmation"
                    type="password"
                  />
                </FormControl>
              </SimpleGrid>

              <Box mt={4}>
                <Button w="full" type="submit">
                  Register
                </Button>
                <Text
                  mt={2}
                  textColor="gray.500"
                  fontSize="xs"
                  textAlign="center"
                >
                  Already have an account?{" "}
                  <ChakraLink
                    as={Link}
                    href="/admins/login"
                    textColor="purple.600"
                  >
                    Login
                  </ChakraLink>
                </Text>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
