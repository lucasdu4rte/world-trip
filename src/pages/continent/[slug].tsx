import React from "react";
import {
  Flex,
  Text,
  Stack,
  Heading,
  Icon,
  Box,
  Image,
  useBreakpointValue,
  Grid,
  Tooltip,
} from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { FiAlertCircle } from "react-icons/fi";

const Continent: React.FC = () => {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Header showBackButton />
      <Banner imgSrc="/images/europe.jpg" title="Europa" />
      <Flex
        flexDirection="column"
        px="5"
        py="10"
        maxWidth="container.lg"
        margin="0 auto"
      >
        <Flex flexDirection={["column", null, "row"]} mb={["4", null, "12"]}>
          <Text flex="1" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <Flex
            flex="1"
            my="4"
            mx={["0", null, "14"]}
            justify="space-between"
            align="center"
          >
            <Stack orientation="vertical">
              <Text
                color="yellow.500"
                fontWeight="bold"
                fontSize="1.6rem"
                textAlign={[null, null, "center"]}
              >
                50
              </Text>
              <Text fontWeight={[null, null, "bold"]}>países</Text>
            </Stack>
            <Stack orientation="vertical">
              <Text
                color="yellow.500"
                fontWeight="bold"
                fontSize="1.6rem"
                textAlign={[null, null, "center"]}
              >
                60
              </Text>
              <Text fontWeight={[null, null, "bold"]}>línguas</Text>
            </Stack>
            <Stack orientation="vertical">
              <Text
                color="yellow.500"
                fontWeight="bold"
                fontSize="1.6rem"
                textAlign={[null, null, "center"]}
              >
                24
              </Text>
              <Text fontWeight={[null, null, "bold"]}>
                cidades +100
                <Tooltip
                  label="São mais de 100 cidades para visitar..."
                  fontSize="md"
                >
                  <Icon as={FiAlertCircle} color="gray.400" ml="1" />
                </Tooltip>
              </Text>
            </Stack>
          </Flex>
        </Flex>

        <Box>
          <Heading
            as="h2"
            fontSize="1.6rem"
            fontWeight="500"
            color="gray.600"
            mb="6"
          >
            Cidades +100
          </Heading>

          {isWideVersion ? (
            <Grid templateColumns="repeat(4, 1fr)" rowGap={10} columnGap={6}>
              {[1, 2, 3, 4, 5, 6, 7].map((city) => (
                <Flex
                  key={city}
                  w="full"
                  minW="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box maxW="sm" bg="white" rounded="lg" shadow="sm">
                    <Image src="/images/london.jpg" roundedTop="lg" />

                    <Flex p="6" justify="space-between">
                      <Box>
                        <Box
                          mt="1"
                          mb="2"
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
            </Grid>
          ) : (
            <Stack orientation="vertical" spacing="6">
              {[1, 2, 3, 4].map((city) => (
                <Flex
                  key={city}
                  px={6}
                  w="full"
                  minW="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box maxW="sm" bg="white" rounded="lg" shadow="sm">
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
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Continent;
