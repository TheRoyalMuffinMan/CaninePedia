import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Select } from "chakra-react-select";
import { SiteTheme, defaultImage } from "../util/global";

type Breed = {
  label: string,
  value: string,
}

const Main = () => {
  const [breeds, setBreeds]: [Breed[] | undefined, Function] = useState<Breed[] | undefined>(undefined)

  useEffect(() => {
    const fetchDogList = async () => {
      const response = await fetch("/doglist");
      const result = (await response.json())["message"];
      let dogs: Breed[] = []
      
      Object.keys(result).forEach((breed: string) => {
        if (result[breed].length > 0) {

          result[breed].forEach((subBreed: string) => {
            dogs.push({
              label: breed + ' ' + subBreed,
              value: breed + ' ' + subBreed
            })
          })

        } else {

          dogs.push({
            label: breed,
            value: breed
          })

        }
      });

      setBreeds(dogs);
    }

    fetchDogList().catch(console.error);;
  }, [])

  if (breeds === undefined) {
    return (
      <Heading>Waiting....</Heading>
    );
  }

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
          errorBorderColor="red"
          useBasicStyles={true}
          options={breeds}
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