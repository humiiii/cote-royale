import React from "react";
import { Bounded } from "../components/Bounded";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";

const Hero = () => {
  return (
    <Bounded className="relative min-h-screen overflow-hidden bg-neutral-950">
      <FadeIn
        vars={{ scale: 1, opacity: 0.5 }}
        className="absolute inset-0 scale-125"
      >
        <img
          src="/cote-royale/images/hero.jpg"
          className="absolute top-0 left-0 object-cover"
        />
      </FadeIn>

      <div className="relative flex h-screen flex-col justify-center">
        <h1 className="font-gambarino max-w-xl text-6xl leading-tight text-neutral-50 md:text-7xl lg:text-8xl">
          Effortless Elegance
        </h1>
        <FadeIn
          vars={{ delay: 1, duration: 1.3 }}
          className="font-raleway mt-6 max-w-md translate-y-8 text-lg text-neutral-50"
        >
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it. A reflection of nature’s raw
          beauty.
        </FadeIn>
        <FadeIn
          vars={{ delay: 1.7, duration: 1.1 }}
          className={"translate-y-5"}
        >
          <Button
            text={"shop now"}
            styles={"border border-white text-white hover:bg-white/20"}
          />
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;
