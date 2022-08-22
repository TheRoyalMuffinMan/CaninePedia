import { chakra } from "@chakra-ui/system";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Footer from "./component/Footer";

const App = () => {
  return (
    <chakra.div 
      display="flex" 
      flexDirection="column" 
      minHeight="100vh"
      bgColor="rgb(247, 247, 247)"
    >
      <Hero />
      <Main />
      <Footer />
    </chakra.div>
  );
}

export default App;
