import React from "react";
import FadeIn from "./FadeIn";
import Button from "./Button";
import FragranceAttribute from "./FragranceAttribute";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";

const FragranceDisplay = ({ title, desc, imgSrc, mood, scentProfile }) => {
  return (
    <FadeIn
      className={
        "relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      }
      vars={{ duration: 2.5, start: "top 50%" }}
    >
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover opacity-40 md:opacity-100"
          src={imgSrc}
          alt="Ignis Fragrance"
        />
      </div>
      <FadeIn
        className={"relative z-10 grid translate-y-8"}
        vars={{ duration: 3, delay: 0.8, start: "top 50%" }}
      >
        <h3 className="font-display mb-3 text-5xl capitalize md:text-6xl lg:text-7xl">
          {title}
        </h3>
        <p className="mb-8 text-base font-semibold text-gray-300">
          Eau de Parfum
        </p>
        <div className="mb-10 max-w-md text-lg text-gray-300">
          <p>{desc}</p>
        </div>
        <FragranceAttribute
          className={"mb-6"}
          mood={mood}
          scentProfile={scentProfile}
        />
        <div className="flex flex-wrap gap-4">
          <Button styles={"border border-white text-white hover:bg-white/20"}>
            <Link to={`/cote-royale/fragrance/${title}`}>Discover</Link>
          </Button>
          <Button styles={"bg-white text-black hover:bg-white/80"}>
            <PiPlus /> &nbsp;Add to Bag
          </Button>
        </div>
      </FadeIn>
    </FadeIn>
  );
};

export default FragranceDisplay;
