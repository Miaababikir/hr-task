"use client";
import Navbar from "@/components/navbar/navbar";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box mx={{ base: 4, sm: "auto" }} maxW="5xl" mt={4}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
