import {
  Box,
  Divider,
  Flex,
  Grid,
  Icon,
  Text,
  Stack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import { BannerHome } from "../components/BannerHome";
import { Header } from "../components/Header";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Header />
      <BannerHome />
      <Box maxWidth="container.lg" margin="0 auto">
        {isWideVersion ? (
          <Box px="3" py="20">
            <Flex justify="space-between">
              <Stack direction="column">
                <Image
                  src="/travel_types/cocktail.svg"
                  color="yellow.500"
                  alignSelf="center"
                  w="20"
                  mb="4"
                />
                <Text fontSize="2xl" fontWeight="600" textAlign="center">
                  vida noturna
                </Text>
              </Stack>
               <Stack direction="column">
                <Image
                  src="/travel_types/surf.svg"
                  color="yellow.500"
                  alignSelf="center"
                  w="20"
                  mb="4"
                />
                <Text fontSize="2xl" fontWeight="600" textAlign="center">
                  praia
                </Text>
              </Stack>
              <Stack direction="column">
                <Image
                  src="/travel_types/building.svg"
                  color="yellow.500"
                  alignSelf="center"
                  w="20"
                  mb="4"
                />
                <Text fontSize="2xl" fontWeight="600" textAlign="center">
                  moderno
                </Text>
              </Stack>
               <Stack direction="column">
                <Image
                  src="/travel_types/museum.svg"
                  color="yellow.500"
                  alignSelf="center"
                  w="20"
                  mb="4"
                />
                <Text fontSize="2xl" fontWeight="600" textAlign="center">
                  clássico
                </Text>
              </Stack>
               <Stack direction="column">
                <Image
                  src="/travel_types/earth.svg"
                  color="yellow.500"
                  alignSelf="center"
                  w="20"
                  mb="4"
                />
                <Text fontSize="2xl" fontWeight="600" textAlign="center">
                  e mais...
                </Text>
              </Stack>
            </Flex>
          </Box>
        ) : (
          <Box px="12" py="5">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap="1rem"
              fontWeight="500"
              justify="center"
            >
              <Box>
                <Icon as={GoPrimitiveDot} color="yellow.500" /> vida noturna
              </Box>
              <Box textAlign="right">
                <Icon as={GoPrimitiveDot} color="yellow.500" /> praia
              </Box>
              <Box>
                <Icon as={GoPrimitiveDot} color="yellow.500" /> moderno
              </Box>
              <Box textAlign="right">
                <Icon as={GoPrimitiveDot} color="yellow.500" /> clássico
              </Box>
            </Grid>
            <Box mt="1rem" align="center" fontWeight="500">
              <Icon as={GoPrimitiveDot} color="yellow.500" /> e mais...
            </Box>
          </Box>
        )}
        <Flex justify="center">
          <Divider
            borderBottomColor="black"
            borderBottomWidth="0.13rem"
            borderBottomRadius="4px"
            width="5rem"
          />
        </Flex>

        <Flex p={["5", null, "12"]} justify="center">
          <Text fontSize={[null, null, "3xl"]} align="center" fontWeight="500">
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </Flex>

        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {[
            {
              name: "Europa",
              description: "O continente mais antigo.",
              image: "/images/europe.jpg",
            },
            {
              name: "América",
              description: "O maior continente em extensão norte–sul.",
              image: "/images/american.jpg",
            },
            {
              name: "África",
              description: "O continente mais rico em biodiversidades e multiculturas.",
              image: "/images/africa.jpg",
            },
            {
              name: "Ásia",
              description: "O continente com a maior quantidade de habitantes.",
              image: "/images/asia.jpg",
            },
          ].map((continent) => (
            <SwiperSlide key={continent.name}>
              <Link href={`/continent/${continent.name}`} passHref>
                <a>
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height={["17rem", null, "28rem"]}
                    position="relative"
                  >
                    <Image
                      position="absolute"
                      top="0"
                      zIndex="-1"
                      src={continent.image}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      filter="brightness(40%)"
                    />
                    <Text
                      fontSize={["2xl", null, "4xl"]}
                      fontWeight="700"
                      color="gray.50"
                      mb="2"
                    >
                      {continent.name}
                    </Text>
                    <Text fontSize={[null, null, "xl"]} fontWeight="700" color="gray.100">
                      {continent.description}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
