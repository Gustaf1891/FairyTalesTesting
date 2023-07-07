import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch";
import { FaBookReader } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { BsCreditCardFill } from "react-icons/bs";

const NavBarLG = () => {
  return (
    <>
      <HStack
        justifyContent="space-between"
        whiteSpace="normal"
        paddingY="10px"
      >
        <HStack paddingX="10px">
          <Text fontSize="xl" textStyle="bold" whiteSpace="normal">
            Fairy Tales
          </Text>
          <IconButton
            aria-label="Create"
            icon={<IoMdCreate />}
            boxSize="20px"
          />
          <IconButton
            aria-label="Library"
            icon={<FaBookReader />}
            boxSize="20px"
          />
          <IconButton
            aria-label="Pricing"
            icon={<BsCreditCardFill />}
            boxSize="20px"
          />
        </HStack>
        <HStack paddingX="10px">
          <ColorModeSwitch />
          <Button size="sm">Login</Button>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBarLG;
