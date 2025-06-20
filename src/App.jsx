import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import CallToAction from "./section/CallToAction";
import FragranceList from "./section/FragranceList";
import Hero from "./section/Hero";
import ProductFeature from "./section/ProductFeature";
import ScrollText from "./section/ScrollText";
import YtVideo from "./section/YtVideo";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollText />
      <ProductFeature />
      <FragranceList />
      <CallToAction />
      <YtVideo />
      <Footer />
    </>
  );
}

export default App;
