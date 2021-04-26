import React from "react";
import { Flex, Text, Stack, Heading, Icon, Box, Image } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { FiAlertCircle } from "react-icons/fi";

const Continent: React.FC = () => {
  return (
    <>
      <Header showBackButton />
      <Banner imgSrc="/images/europe.jpg" title="Europa" />
      <Flex flexDirection="column" px="5" py="5">
        <Text textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex my="4" justify="space-between">
          <Stack orientation="vertical">
            <Text color="yellow.500" fontWeight="bold" fontSize="1.6rem">
              50
            </Text>
            <Text>países</Text>
          </Stack>
          <Stack orientation="vertical">
            <Text color="yellow.500" fontWeight="bold" fontSize="1.6rem">
              60
            </Text>
            <Text>línguas</Text>
          </Stack>
          <Stack orientation="vertical">
            <Text color="yellow.500" fontWeight="bold" fontSize="1.6rem">
              24
            </Text>
            <Text>
              cidades +100 <Icon as={FiAlertCircle} color="gray.400" />
            </Text>
          </Stack>
        </Flex>

        <Box>
          <Heading as="h2" fontSize="1.6rem" fontWeight="500" color="gray.600">
            Cidades +100
          </Heading>

          <Stack orientation="vertical" spacing="6" mt="6">
            {[1, 2, 3, 4].map((city) => (
              <Flex
                key={city}
                px={6}
                w="full"
                minW="full"
                alignItems="center"
                justifyContent="center"
              >
                <Box maxW="sm" borderWidth="1px" rounded="lg" shadow="sm">
                  <Image src="/images/london.jpg" roundedTop="lg" />

                  <Flex p="6" justify="space-between">
                    <Box>
                      <Box
                        mt="1"
                        fontWeight="600"
                        fontSize="lg"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        Londres
                      </Box>
                      <Box as="span" fontWeight="500" color="gray.400">
                        Reino Unido
                      </Box>
                    </Box>

                    <Image
                      src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                      w="2.5rem"
                    />
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Continent;
