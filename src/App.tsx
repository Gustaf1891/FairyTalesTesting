import {
  Grid,
  GridItem,
  Show,
  HStack,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import NavBarBase from "./Components/NavBar/NavBarBase";
import NavBarLG from "./Components/NavBar/NavBarLG";
import ReadingAnimationLottie from "./Components/ReadingAnimation";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "header" "main" "main2" "main3" "footer"`,
        lg: `"nav nav" "header header" "aside main" "main2 main2" "main3 main3" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "600px 1fr",
      }}
    >
      <GridItem area="nav">
        <Show below="lg">
          <NavBarBase />
        </Show>
        <Show above="lg">
          <NavBarLG />
        </Show>
      </GridItem>
      <GridItem area="header" bg="#D7816A">
        <Show above="lg">
          <HStack justifyContent="normal">
            <Box paddingX="10px">
              <Text fontStyle="oblique" color="Black" as="b" fontSize="6xl">
                Create customized children's books!
              </Text>
            </Box>
            <Box paddingX="150px">
              <ReadingAnimationLottie />
            </Box>
          </HStack>
        </Show>
        <Show below="lg">
          <VStack justifyContent="normal">
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              color="Black"
              as="b"
              fontSize="4xl"
            >
              Create customized children's books!
            </Text>
            <ReadingAnimationLottie />
          </VStack>
        </Show>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#DDEDAA">
          <VStack justifyContent="normal">
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              as="b"
              fontSize="4xl"
            >
              Use your own imagination
            </Text>
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              fontSize="sm"
            >
              Unleash your imagination with our AI-powered children's book
              creator, designed to help you craft unique, engaging stories.
              Using advanced technology and an intuitive interface, you can
              create a one-of-a-kind book in just a few minutes.
            </Text>
          </VStack>
        </GridItem>
        <GridItem area="main" bg="#D6EDFF">
          <ImageCarousel />
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="main" bg="white">
          <VStack justifyContent="normal">
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              as="b"
              fontSize="2xl"
            >
              Use your own imagination
            </Text>
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              fontSize="sm"
            >
              Unleash your imagination with our AI-powered children's book
              creator, designed to help you craft unique, engaging stories.
              Using advanced technology and an intuitive interface, you can
              create a one-of-a-kind book in just a few minutes.
            </Text>
            <ImageCarousel />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main2" bg="#D6EDFF">
        <Show above="lg">Main 2</Show>
        <Show below="lg">Main 2</Show>
      </GridItem>
      <GridItem area="main3" bg="#D6EDFF">
        Main 3
      </GridItem>
      <GridItem area="footer" bg="#BD4F6C">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
