import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px" />
      <Text fontSize='2xl' textColor='black' textStyle="bold" whiteSpace='normal'>
        Fairy Tales
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
