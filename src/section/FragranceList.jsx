import React from "react";
import { Bounded } from "../components/Bounded";
import { RevealText } from "../components/RevealText";
import FragranceDisplay from "../components/FragranceDisplay";

const FragranceList = () => {
  return (
    <Bounded
      className={"space-y-8 bg-black py-16 text-center text-white md:py-24"}
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[.2em] uppercase">
          Our Fragrances
        </p>
        <RevealText
          text="An Essence for Every Man"
          as="h2"
          id={"Fragrance-list-heading"}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className={
            "font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          }
        />
        <p className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12">
          <FragranceDisplay
            title={"terra"}
            desc={
              "Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, effort, Terra embodies the beauty of balance."
            }
            imgSrc={"/cote-royale/images/terra-ad.png"}
            mood={"grounded"}
            scentProfile={"woody"}
          />
          <FragranceDisplay
            title={"aqua"}
            desc={
              "Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength."
            }
            imgSrc={"/cote-royale/images/aqua-ad.png"}
            mood={"refreshing"}
            scentProfile={"fresh"}
          />
          <FragranceDisplay
            title={"ignis"}
            desc={
              "Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable."
            }
            imgSrc={"/cote-royale/images/ignis-ad.png"}
            mood={"bold"}
            scentProfile={"spicy"}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default FragranceList;
