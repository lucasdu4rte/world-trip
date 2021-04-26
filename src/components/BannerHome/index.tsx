import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";

export const BannerHome: React.FC = () => {
  return (
    <Box p="2rem 1rem" backgroundImage="url('/images/bg-banner-home.png')">
      <Heading as="h1" size="md" fontWeight="500" color="white" mb="3">
        5 Continentes, infinitas possibilidades.
      </Heading>
      <Text fontSize="xs" fontWeight="400" color="gray.50">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
  );
};

