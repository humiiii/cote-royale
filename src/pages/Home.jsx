import React from "react";
import Hero from "../section/Hero";
import ScrollText from "../section/ScrollText";
import ProductFeature from "../section/ProductFeature";
import FragranceList from "../section/FragranceList";
import CallToAction from "../section/CallToAction";
import YtVideo from "../section/YtVideo";

function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <ProductFeature />
      <FragranceList />
      <CallToAction />
      <YtVideo />
    </>
  );
}

export default Home;
