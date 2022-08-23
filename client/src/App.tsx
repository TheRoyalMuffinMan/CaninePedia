import { useState } from "react";
import { Flex, Image} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { heroImage, SiteTheme } from "./util/global";

const App = () => {
  const [loaded, setLoaded]: [Boolean, Function] = useState<Boolean>(false);

  return (
    <chakra.div 
      display="flex" 
      flexDirection="column" 
      minHeight="100vh"
      bgColor={SiteTheme.white}
    >
      <Flex    
        position="relative"
        justify="center"
      >
        <Image 
          onLoad = {(): void => setLoaded(true)}
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
