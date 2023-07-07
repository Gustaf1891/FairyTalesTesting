import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from 'react-icons/md'

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={MdDarkMode}/>
    </HStack>
  );
};

export default ColorModeSwitch;
