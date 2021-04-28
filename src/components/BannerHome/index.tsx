import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

export const BannerHome: React.FC = () => {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      px={["4", null, "24"]}
      py={["8", null, "16"]}
      backgroundImage="url('/images/bg-banner-home.jpg')"
    >
      <Box w={["100%", null, "50%"]}>
        <Heading
          as="h1"
          fontSize={["md", null, "3xl"]}
          fontWeight="500"
          color="white"
          mb={["3", null, "7"]}
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Heading>
        <Text fontSize={["xs", null, "lg"]} fontWeight="400" color="gray.100">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Box w="50%" position="relative">
          <Image
            src="/images/airplane.svg"
            w="96"
            position="absolute"
            right="0"
            transform="rotate(3deg)"
          />
        </Box>
      )}
    </Flex>
  );
};
