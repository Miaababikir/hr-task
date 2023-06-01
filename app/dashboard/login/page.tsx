"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControlledInput from "@/components/form/controlled-input";
import LoginSchema from "@/shared/validation-schema/login.schema";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: any) => {};

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
          w={{ base: "full", sm: "xl" }}
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
              Login
            </Heading>
            <Text textAlign="center" textColor="gray.500">
              Welcome back
            </Text>
          </Box>
          <Box mt={4}>
            <form onSubmit={handleSubmit(() => {})}>
              <ControlledInput
                control={control}
                errors={errors}
                name="email"
                placeholder="Email address"
                type="email"
              />
              <ControlledInput
                mt={4}
                control={control}
                errors={errors}
                name="password"
                placeholder="Password"
                type="password"
              />
              <Box mt={4}>
                <Button w="full" type="submit">
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
