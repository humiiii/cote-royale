import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ProductFeature from "./section/ProductFeature";
import ScrollText from "./section/ScrollText";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollText />
      <ProductFeature/>
      <Footer />
    </>
  );
}

export default App;
