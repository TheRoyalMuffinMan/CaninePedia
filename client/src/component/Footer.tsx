import { Stack, Heading, Text } from "@chakra-ui/react";
import { SiteTheme } from "../util/global";

const Footer = () => {
  return (
    <Stack 
      borderTop={`5px solid ${SiteTheme.green}`} 
      justify="center" 
      align="center"
      padding="1rem"
    >
      <Heading 
        color={SiteTheme.green}
      >
        CaninePedia
      </Heading>
      <Text>
        Copyright © TheGreatMuffinMan
      </Text>
    </Stack>
  );
}

export default Footer;