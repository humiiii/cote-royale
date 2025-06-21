import React from "react";
import { Link } from "react-router-dom";

const fragrances = ["ignis", "aqua", "terra"];

const OtherFragrances = ({ name }) => {
  const otherFragrances = fragrances.filter((fragrance) => fragrance !== name);
  return (
    <div className="container mx-auto px-4">
      <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
        You may also like
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherFragrances.map((fragrances, index) => (
          <li key={index}>
            <div className="group">
              <Link to={`/cote-royale/fragrance/${fragrances}`}>
                <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={`/cote-royale/images/${fragrances}-bottle.png`}
                    width={600}
                    height={600}
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-8 space-y-1 text-white">
                  <h3 className="font-display text-2xl capitalize">
                    {fragrances}
                  </h3>
                  <p className="text-sm text-neutral-400">Eau de Parfum</p>
                  <p className="text-base font-light">$110</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherFragrances;
