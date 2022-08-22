import { Flex, Stack, Image, Button, Heading, Text } from "@chakra-ui/react";
import { SiteTheme, heroImage } from "../util/global";
import "./hero.css"

const Hero = () => {
    return (
        <Flex    
            position="relative"
            justify="center"
        >
            <Image 
                width="100%"
                src={heroImage} 
                objectFit="cover"
            />
            <Flex
                className="header"
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
                    fontSize={["1rem", "1.5rem", "2rem", "3rem", "4rem"]}
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
                            fontSize={["0.8rem", "1rem", "1rem", "2rem", "3rem"]}
                            fontWeight="semibold"
                        >
                            Image Encyclopedia For Dogs
                        </Text>
                        <Text
                            fontSize={["0.6rem", "0.8rem", "0.8rem", "1.5rem", "2rem"]}
                            fontWeight="light"
                        >
                            A place to see more of your best friend
                        </Text>
                    </Stack>
                    <Button 
                        variant="outline"
                        width={["100px", "150px", "150px", "200px", "250px"]}
                        fontSize={["0.6rem", "0.8rem", "0.8rem", "1.5rem", "2rem"]}
                        padding={["0.8rem", "1rem", "1rem", "1.5rem", "2rem"]}
                        borderColor={SiteTheme.green}
                        _hover={{
                            bg: "white",
                            borderColor: "white",
                            color: SiteTheme.green
                        }}
                    >
                        What We Do
                    </Button>
                </Flex>
            </Flex>            
        </Flex>
    );
}

export default Hero;