import React from "react";
import FadeIn from "../components/FadeIn";
import { RevealText } from "../components/RevealText";
import Button from "../components/Button";
import { Bounded } from "../components/Bounded";

const CallToAction = () => {
  return (
    <Bounded
      className={
        "relative overflow-hidden bg-[url('/cote-royale/images/background.avif')] bg-cover bg-center p-16 text-gray-50 md:p-28"
      }
    >
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <FadeIn
          className={
            "translate-y-2 text-sm font-light tracking-[.2em] uppercase"
          }
          vars={{ duration: 0.8 }}
        >
          <p>Fragrance Quiz</p>
        </FadeIn>
        <RevealText
          id={"cta-heading"}
          text="The Cote Royale Fragrance Finder"
          as="h2"
          className={
            "font-display mx-auto max-w-3xl text-4xl sm:text-6xl md:text-7xl"
          }
          align="center"
          staggerAmount={0.1}
          duration={0.8}
        />
        <FadeIn
          className={"mx-auto max-w-2xl translate-y-2 text-lg text-gray-300"}
          vars={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Find your perfect scent with our personalized quiz.</p>
        </FadeIn>
        <div className="mt-10">
          <Button styles={"bg-white text-black hover:bg-white/80"}>
            See the Quiz
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default CallToAction;
