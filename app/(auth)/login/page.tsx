"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Image,
  Link as ChakraLink,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "@/shared/validation-schema/login.schema";
import ControlledInput from "@/components/form/controlled-input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async () => {
    await router.push("/");

    toast({
      title: "Welcome back",
      status: "success",
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
            <form onSubmit={handleSubmit(handleLogin)}>
              <ControlledInput
                control={control}
                errors={errors}
                name="email"
                placeholder="Email address"
                type="email"
              />
              <ControlledInput
                control={control}
                errors={errors}
                name="password"
                mt={4}
                placeholder="Password"
                type="password"
              />
              <Box mt={4}>
                <Button w="full" type="submit">
                  Login
                </Button>
                <Text
                  mt={2}
                  textColor="gray.500"
                  fontSize="xs"
                  textAlign="center"
                >
                  You don't have an account?{" "}
                  <ChakraLink as={Link} href="/register" textColor="purple.600">
                    Register
                  </ChakraLink>
                </Text>
                <Text
                  mt={2}
                  textColor="gray.500"
                  fontSize="xs"
                  textAlign="center"
                >
                  Forgot your password?{" "}
                  <ChakraLink
                    as={Link}
                    href="/reset-password"
                    textColor="purple.600"
                  >
                    Reset password
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

export default Login;
