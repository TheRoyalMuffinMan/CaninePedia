import { Flex, Box, Image, Spinner, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Select } from "chakra-react-select";
import { SiteTheme, defaultImage } from "../util/global";

type Breed = {
  label: string,
  value: string[]
}

const Main = () => {
  const [breeds, setBreeds]: [Breed[] | undefined, Function] = useState<Breed[] | undefined>(undefined);
  const [image, setImage]: [any, Function] = useState<any>(defaultImage);

  const selectBreed = async (selected: Breed | null): Promise<any> => {
    const response: Response = await fetch(
      "/breed", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selected)
      }
    );

    const breedImage: any = (await response.json())["message"];
    setImage(breedImage);
  }

  useEffect(() => {
    const fetchDogList = async (): Promise<any> => {
      const response: Response = await fetch("/list");
      const result: any = (await response.json())["message"];
      let dogs: Breed[] = []
      
      Object.keys(result).forEach((breed: string) => {
        if (result[breed].length > 0) {

          result[breed].forEach((subBreed: string) => {
            const dog: string = subBreed.charAt(0).toUpperCase() + 
                                subBreed.slice(1) + ' ' +
                                breed.charAt(0).toUpperCase() +
                                breed.slice(1);
            dogs.push({
              label: dog,
              value: [breed, subBreed]
            })
          })

        } else {

          dogs.push({
            label: breed.charAt(0).toUpperCase() + breed.slice(1),
            value: [breed]
          })
        }
      });

      dogs.sort((a, b) => a.label.charAt(0).charCodeAt(0) - b.label.charAt(0).charCodeAt(0));
      setBreeds(dogs);
    }

    fetchDogList();
  }, [])

  return (
    <Flex 
      flex="1"
      flexDirection="column"
      justify="center"
      align="center"
      padding="4rem"
      gap="1rem"
    >
      {breeds === undefined && 
        <Spinner 
          boxSize={["600px"]}
          speed='1s'
          color={SiteTheme.green}
        />
      }
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
          onChange={(selected) => selectBreed(selected).then}
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
        src={image}
      />
    </Flex>
  );
}

export default Main;