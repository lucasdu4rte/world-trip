import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Flex, IconButton, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Flex py="4" justify="center" position="relative">
      {showBackButton && (
        <Link href="/" passHref>
          <a>
            <IconButton
              variant="unstyled"
              icon={<Icon as={FiChevronLeft} fontSize="20" />}
              aria-label="Botão voltar"
              position="absolute"
              left="1rem"
              top="0.20rem"
            />
          </a>
        </Link>
      )}
      <Image src="/logo.svg" w="20" />
    </Flex>
  );
};
