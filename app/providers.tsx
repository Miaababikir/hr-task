"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { index } from "@/utils/theme";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider theme={index}>{children}</ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default Providers;
