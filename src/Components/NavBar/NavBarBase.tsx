import { HStack, IconButton, Text } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBarBase = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <Text>Fairy Tales</Text>
        <HStack>
          <ColorModeSwitch />
          <IconButton aria-label="list" icon={<BsList />} size="xs" />
        </HStack>
      </HStack>
    </>
  );
};

export default NavBarBase;
