"use client";
import Navbar from "@/components/navbar/navbar";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box px={{ base: 4, md: 32 }} pb={8} mt={4}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
