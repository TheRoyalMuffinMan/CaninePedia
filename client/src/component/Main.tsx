import { Flex, Stack, Box, AspectRatio, Image, Heading, Text } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { SiteTheme, defaultImage } from "../util/global";
const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
    { label: 'Pulp Fiction', id: 2 },
];

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
            <Box width={["500px"]}>
                <Select
                    hasStickyGroupHeaders
                    placeholder="Select a Option"
                    size="lg"
                    focusBorderColor={SiteTheme.green}
                    colorScheme= "red"
                    errorBorderColor="red"
                    useBasicStyles={true}
                    options={[
                        {
                          label: "I am red",
                          value: "i-am-red",
                          colorScheme: "red", // The option color scheme overrides the global
                        },
                        {
                          label: "I fallback to purple",
                          value: "i-am-purple",
                        },
                      ]}
                />
            </Box>
            <Image
                width="1024px"
                height="768px"
                src={defaultImage}
            />
        </Flex>
    );
}

export default Main;