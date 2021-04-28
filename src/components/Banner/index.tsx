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
      justifyContent={["center", null, "flex-end"]}
      alignItems={["center", null, "flex-start"]}
      height={["8rem", null, "35vh"]}
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
        filter="brightness(55%)"
      />
      <Text
        fontSize={["2xl", null, "3xl"]}
        fontWeight={["700", null, "600"]}
        color="gray.50"
        mb={["2", null, "14"]}
        ml={[null, null, "16"]}
      >
        {title}
      </Text>
    </Flex>
  );
};
