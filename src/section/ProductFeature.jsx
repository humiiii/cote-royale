import React from "react";
import { Bounded } from "../components/Bounded";
import FadeIn from "../components/FadeIn";
import Button from "../components/Button";

const ProductFeature = () => {
  return (
    <Bounded className={"overflow-hidden bg-black py-16 text-white md:py-24"}>
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
        <FadeIn
          className={"translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"}
          vars={{ duration: 1 }}
        >
          <img
            src="/cote-royale/images/grid-picture.jpg"
            alt="A loving couple caressing one another"
            className="h-auto w-full object-cover"
          />
        </FadeIn>
        <FadeIn
          className={
            "translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-3 lg:row-start-1"
          }
        >
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
            Powerful Simplicity.
          </h2>
          <p className="max-w-lg text-base text-gray-300">
            An expression of quiet luxury, Côte Royale is designed for the man
            who commands attention without seeking it. A reflection of nature’s
            raw beauty, redefined for today.
          </p>
        </FadeIn>
        <FadeIn
          className={
            "animate-in relative translate-y-16 self-end bg-white/10 opacity-0 will-change-transform"
          }
          vars={{ duration: 1, delay: 1 }}
        >
          <img
            src="/cote-royale/images/ignis-bottle.png"
            alt="Ignis fragrance bottle"
            className="mx-auto -mt-10 w-full -rotate-12 md:-mt-20"
          />
          <div className="flex justify-between p-10 pt-4">
            <div className="space-y-1">
              <h3 className="font-display text-4xl">Ignis</h3>
              <p className="mt-2 text-gray-400">Eau de Parfum</p>
              <Button
                styles={"border border-white text-white hover:bg-white/20"}
              >
                Buy Now
              </Button>
            </div>
            <p className="mt-4 text-gray-400">
              <span>$110</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default ProductFeature;
