import { useState, useEffect } from "react";
import { Flex, Box, Spinner, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { Select } from "chakra-react-select";
import { SiteTheme, defaultImage, header, subheader } from "../util/global";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/css/main.css";

type Breed = {
  label: string,
  value: string[]
}

type Breeds = {
  [key: string]: Array<string>
}

type BreedImages = string[];

const Main = () => {
  const [breeds, setBreeds]: [Breed[] | undefined, Function] = useState<Breed[] | undefined>(undefined);
  const [images, setImages]: [any, Function] = useState<BreedImages | undefined>([defaultImage]);

  const selectBreed = async (selected: Breed | null): Promise<any> => {
    const response: Response = await fetch(
      "/breed", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(selected)
      }
    );

    const breedImages: string[] = (await response.json())["message"];
    setImages(breedImages);
  }

  useEffect(() => {
    const fetchDogList = async (): Promise<any> => {
      const response: Response = await fetch("/list");
      const result: Breeds = (await response.json())["message"];
      let dogs: Breed[] = []
      
      Object.keys(result).forEach((breed: string) => {
        if (result[breed].length > 0) {

          result[breed].forEach((subBreed: string) => {
            const dog: string = 
              subBreed.charAt(0).toUpperCase() + 
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

      dogs.sort((a: Breed, b: Breed) => {
        return a.label.charAt(0).charCodeAt(0) - b.label.charAt(0).charCodeAt(0)
      });
      setBreeds(dogs);
    }

    fetchDogList();
  }, [])

  return (
    <Flex
      as="main" 
      id="main"
      flex="1"
      flexDirection="column"
      justify="center"
      align="center"
      padding="2rem"
      paddingTop={["2rem","2rem", "3rem", "4rem", "4rem"]}
      paddingBottom={["2rem","2rem", "3rem", "4rem", "4rem"]}
      gap="1rem"
    >
      {breeds === undefined &&
        <Spinner 
          boxSize={["150px","200px", "300px", "500px", "500px"]}
          speed="1s"
          color={SiteTheme.green}
        />}
        
      {breeds !== undefined &&
        <>
          <Heading 
            fontSize={header}
            fontWeight="black"
            color={SiteTheme.green}
          >
            The Search Is Over
          </Heading>
          <Text
            fontSize={subheader}
            fontWeight="light"
            color="black"
          >
            Simply select the dog breed and let us find the photos
          </Text>

          <Box width={["200px", "300px", "400px", "500px", "500px"]}>
            <Select
              onChange={(selected: Breed | null): void => {
                setImages(undefined)
                selectBreed(selected)
              }}
              hasStickyGroupHeaders
              placeholder="Select an Option"
              size="md"
              focusBorderColor={SiteTheme.green}
              errorBorderColor="red"
              useBasicStyles={true}
              options={breeds}
            />
          </Box>

          {images === undefined &&
            <Spinner 
              boxSize={["150px","200px", "300px", "500px", "500px"]}
              speed="1s"
              color={SiteTheme.green}
            />}
          
          {images !== undefined &&
            <Box className="image-container" >
              <Carousel 
                showArrows={true} 
                showIndicators={false} 
                showStatus={false}
              >
                {images.map((img: string, index: number) => (
                    <img src={img} key={index} alt="A cute dog." />
                ))}
              </Carousel>
            </Box>}
        </>}
    </Flex>
  );
}

export default Main;