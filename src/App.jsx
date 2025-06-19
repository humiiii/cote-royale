import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import CallToAction from "./section/CallToAction";
import FragranceList from "./section/FragranceList";
import Hero from "./section/Hero";
import ProductFeature from "./section/ProductFeature";
import ScrollText from "./section/ScrollText";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollText />
      <ProductFeature />
      <FragranceList />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
