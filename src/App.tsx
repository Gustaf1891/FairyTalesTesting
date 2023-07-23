import {
  Grid,
  GridItem,
  Show,
  HStack,
  Text,
  VStack,
  Box,
  Button,
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
        lg: `"nav nav" "header header" "main main" "main2 main2" "main3 main3" "footer footer"`,
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
            <VStack paddingX="20px" justifyContent="normal">
              <Text fontStyle="oblique" color="Black" as="b" fontSize="6xl">
                Create your own Children's Book!
              </Text>
              <Text
                textAlign="center"
                fontStyle="oblique"
                color="Black"
                fontSize="sm"
              >
                Unleash your imagination with our AI-powered children's book
                creator, designed to help you craft unique, engaging stories.
                Using advanced technology and an intuitive interface, you can
                create a one-of-a-kind book in just a few minutes.
              </Text>
            </VStack>
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
              Create your own Children's Book!
            </Text>
            <Text
              textAlign="center"
              paddingY="10px"
              color="Black"
              fontStyle="oblique"
              fontSize="xs"
            >
              Unleash your imagination with our AI-powered children's book
              creator, designed to help you craft unique, engaging stories.
              Using advanced technology and an intuitive interface, you can
              create a one-of-a-kind book in just a few minutes.
            </Text>
            <ReadingAnimationLottie />
          </VStack>
        </Show>
      </GridItem>
      <GridItem area="main" bg="#D6EDFF">
        <Show above="lg">
          <HStack justifyContent="normal">
            <VStack justifyContent="normal" paddingY="10px">
              <Text
                textAlign="center"
                paddingY="10px"
                fontStyle="oblique"
                as="b"
                fontSize="4xl"
              >
                Custom-Made Storybook
              </Text>
              <Text
                textAlign="center"
                paddingY="10px"
                fontStyle="oblique"
                fontSize="sm"
              >
                Our custom storybook creator brings your stories to life, making
                them personal and tailored to your child's interests. Based on
                your input, we develop a unique storyline, ensuring your child
                sees themselves in every adventure.
              </Text>
              <Button>Create book</Button>
            </VStack>
            <Box paddingX="10px">
              <ImageCarousel />
            </Box>
          </HStack>
        </Show>
        <Show below="lg">
          <VStack justifyContent="normal">
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              as="b"
              fontSize="2xl"
            >
              Custom-Made Storybook
            </Text>
            <Text
              textAlign="center"
              paddingY="10px"
              fontStyle="oblique"
              fontSize="sm"
            >
              Our custom storybook creator brings your stories to life, making
              them personal and tailored to your child's interests. Based on
              your input, we develop a unique storyline, ensuring your child
              sees themselves in every adventure.
            </Text>
            <ImageCarousel />
          </VStack>
        </Show>
      </GridItem>
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
