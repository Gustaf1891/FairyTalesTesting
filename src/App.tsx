import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBarLG from "./Components/NavBarLG";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "main2" "main3" "footer"`,
        lg: `"nav nav" "aside main" "aside2 main2" "aside3 main3" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg="#D7816A">
        <NavBarLG />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#DDEDAA">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="#D6EDFF">
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside2" bg="#DDEDAA">
          Aside 2
        </GridItem>
      </Show>
      <GridItem area="main2" bg="#D6EDFF">
        Main 2
      </GridItem>
      <Show above="lg">
        <GridItem area="aside3" bg="#DDEDAA">
          Aside 3
        </GridItem>
      </Show>
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
