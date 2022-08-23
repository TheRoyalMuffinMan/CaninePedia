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
        fontSize={["1rem", "1.5rem", "2rem", "3rem", "4rem"]}
      >
        CaninePedia
      </Heading>
      <Text
        fontSize={["0.6rem", "0.8rem", "0.8rem", "1.5rem", "2rem"]}
      >
        Copyright © TheGreatMuffinMan
      </Text>
    </Stack>
  );
}

export default Footer;