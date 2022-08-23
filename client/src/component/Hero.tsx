import { Flex, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { SiteTheme, title, header, subheader } from "../util/global";
import "../style/css/hero.css";
import React from "react";

const Hero = () => {
  return (
    <Flex
      className="hero"
      position="absolute"
      flexDirection="column"
      width="full"
      height="full"
      gap="2rem"
      padding="2rem"
      paddingLeft={["1rem","2rem","3rem","3rem", "4rem"]}
      paddingRight={["1rem","2rem","3rem","3rem", "4rem"]}
      color="white"
    >
      <Heading 
        fontSize={title}
        fontWeight="black"
        color={SiteTheme.green}
      >
        CaninePedia
      </Heading>

      <Flex
        flex="0.7"
        flexDirection="column"
        justify="center"
        gap="1rem"
      >
        <Stack spacing="0.1rem">
          <Text
            fontSize={header}
            fontWeight="semibold"
          >
            Image Encyclopedia For Dogs
          </Text>
          <Text
            fontSize={subheader}
            fontWeight="light"
          >
            A place to see more of your best friend
          </Text>
        </Stack>

        <Button
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            document.getElementById("main")?.scrollIntoView({ behavior: 'smooth'});
          }} 
          variant="outline"
          width={["100px", "150px", "150px", "200px", "250px"]}
          fontSize={subheader}
          padding={["0.5rem", "0.8rem", "1rem", "1.5rem", "2rem"]}
          borderColor={SiteTheme.green}
          _hover={{
            bg: "white",
            borderColor: "white",
            color: SiteTheme.green
          }}
        >
          Start Viewing
        </Button>
      </Flex>
    </Flex>       
  );
}

export default Hero;
