import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Flex, IconButton, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Flex bg="white" py={["4", null, "8"]} justify="center" position="relative">
      {showBackButton && (
        <Link href="/" passHref>
          <a>
            <IconButton
              variant="unstyled"
              icon={<Icon as={FiChevronLeft} fontSize={['2xl', null, "4xl"]} />}
              aria-label="Botão voltar"
              position="absolute"
              top="50%"
              left={["0", null, "1rem"]}
              transform="translate(0, -50%)"
            />
          </a>
        </Link>
      )}
      <Image src="/logo.svg" w={["20", null, "36"]} />
    </Flex>
  );
};
