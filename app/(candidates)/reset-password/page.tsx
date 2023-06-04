"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "@/shared/validation-schema/login.schema";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useToast,
} from "@chakra-ui/react";
import ControlledInput from "@/components/form/controlled-input";
import Link from "next/link";
import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ResetPassword = () => {
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleResetPassword = () => {
    toast({
      title: "Reset link is send to your email",
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
          px={{ base: 4, sm: 6 }}
          py={6}
          borderRadius={5}
          w={{ base: "full", sm: "xl" }}
          shadow="xl"
        >
          <Box>
            <Heading as="h2" fontSize="3xl">
              Forgot your password?
            </Heading>
            <Text mt={1}>You'll get an email with a reset link</Text>
          </Box>
          <Box mt={2}>
            <form onSubmit={handleSubmit(handleResetPassword)}>
              <ControlledInput
                control={control}
                errors={errors}
                name="email"
                placeholder="Email address"
                type="email"
              />
              <Box mt={4}>
                <Button w="full" type="submit">
                  Reset password
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
