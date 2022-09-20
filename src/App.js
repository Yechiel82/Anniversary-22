import HeroSection from "./sections/HeroSection";
import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import End from "./sections/End";
function App() {
  return (
    <>
        <GlobalStyle />
        <Quote />
        <HeroSection />
        <DesignSection/>  
        <DisplaySection />
        <ProcessorSection/>
        <BatterySection />
        <End />
    </>
  );
}

export default App;
