import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Components/Header";
import "./App.css";
import ReadingAnimation from "./Components/ReadingAnimation";

function App() {
  return (
    <Grid
    templateAreas={{
      base: '"header" "main" "footer"',
      lg: ' "header header" "nav main" "footer footer"', //1024px
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
    >
      <GridItem bg="#D6EDFF" area={"header"}>
        <Header></Header>
      </GridItem>
      <GridItem bg="#BD4F6C" area={"nav"}>
        Nav
      </GridItem>
      <GridItem h="2000px" bg="#DDEDAA" area={"main"}>
        Main
      </GridItem>
      <GridItem bg="#D7816A" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
