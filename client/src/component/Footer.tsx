import { Stack, Heading, Text } from "@chakra-ui/react";
import { SiteTheme, header, subheader } from "../util/global";

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
        fontSize={header}
      >
        CaninePedia
      </Heading>

      <Text
        fontSize={subheader}
      >
        Copyright © Andrew Hoyle
      </Text>
    </Stack>
  );
}

export default Footer;
