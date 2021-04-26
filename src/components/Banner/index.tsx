import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface BannerProps {
  imgSrc: string;
  title: string;
}

export const Banner = ({ imgSrc, title }: BannerProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="8rem"
      position="relative"
    >
      <Image
        position="absolute"
        top="0"
        zIndex="-1"
        width="100%"
        height="100%"
        objectFit="cover"
        src={imgSrc}
        filter="brightness(50%)"
      />
      <Text fontSize="2xl" fontWeight="700" color="gray.50" mb="2">
        {title}
      </Text>
    </Flex>
  );
};
