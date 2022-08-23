import { Flex, Image} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import { useState } from "react";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { heroImage } from "./util/global";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <chakra.div 
      display="flex" 
      flexDirection="column" 
      minHeight="100vh"
      bgColor="rgb(247, 247, 247)"
    >
      <Flex    
        position="relative"
        justify="center"
      >
        <Image 
          onLoad = {() => setLoaded(true)}
          width="100%"
          loading="eager"
          src={heroImage} 
          objectFit="cover"
        />
        {loaded && <Hero />}
      </Flex>

      {loaded && <Main />}

      {loaded && <Footer />}
    </chakra.div>
  );
}

export default App;
