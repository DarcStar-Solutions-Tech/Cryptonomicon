import Head from "next/head";
import { Divider, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DefaultLayoutComponent = ({children}:React.PropsWithChildren<any>) => {
  return (
    <VStack  h={"100%"} alignItems={"center"}>
      <Head>
        <title>Cryptonomicon</title>
      </Head>
      <Heading>Cryptonomicon</Heading>
      <Spacer />
      <VStack h={"75vh"} w={"100%"} overflow={"hidden"} alignItems={"center"}>
        {children}
      </VStack>
      <Divider w={"95%"} />
      <Flex direction={"column"}>
        <Text>Powered by </Text>
      </Flex>
    </VStack>
  );
}

export default DefaultLayoutComponent;
