import { Flex, AspectRatio, Image, Heading, Text } from "@chakra-ui/react";
import { SiteTheme } from "../util/global";

const Main = () => {
    return (
        <Flex 
            flex="1"
            flexDirection="column"
            justify="center"
            align="center"
            padding="2rem"
            gap="1rem"
        >
            <Heading 
                fontSize={["1rem", "1.5rem", "2rem", "3rem", "4rem"]}
                fontWeight="black"
                color={SiteTheme.green}
            >
                The Search Is Over
            </Heading>
            <Text
                fontSize={["0.6rem", "0.8rem", "0.8rem", "1.5rem", "2rem"]}
                fontWeight="light"
                color="black"
            >
                Simply select the dog breed and let us find the image
            </Text>
        </Flex>
    );
}

export default Main;