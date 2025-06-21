import { useParams } from "react-router-dom";
import { Bounded } from "../components/Bounded";
import { useEffect } from "react";
import FragranceAttribute from "../components/FragranceAttribute";
import { HiStar } from "react-icons/hi2";
import OtherFragrances from "../components/OtherFragrances";

const data = {
  ignis: {
    desc: "Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable.",
    mood: "bold",
    scentProfile: "spicy",
  },
  terra: {
    desc: "Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, effort, Terra embodies the beauty of balance.",
    mood: "grounded",
    scentProfile: "woody",
  },
  aqua: {
    desc: "Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength.",
    mood: "refreshing",
    scentProfile: "fresh",
  },
};

const Fragrance = () => {
  const { name } = useParams();
  const fragrance = data[name];

  useEffect(() => {
    if (name) {
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      document.title = `${capitalized} | Cote Royale`;
    }
  }, [name]);

  if (!fragrance) {
    return (
      <Bounded>
        <p className="text-xl text-white">Fragrance not found.</p>
      </Bounded>
    );
  }

  const { desc, mood, scentProfile } = fragrance;

  return (
    <Bounded className="py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
          <img
            src={`/cote-royale/images/${name}-bottle.png`}
            width={600}
            height={600}
            fetchPriority="high"
            className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
          />
          <img
            src={`/cote-royale/images/${name}-bottle.png`}
            width={600}
            height={600}
            fetchPriority="high"
            className="relative"
          />
        </div>

        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl capitalize md:text-5xl">
            {name}
          </h1>
          <div className="space-y-6">
            <p className="text-base font-semibold">Eau de Parfum Spray</p>
            <p>{desc}</p>
            <FragranceAttribute mood={mood} scentProfile={scentProfile} />
            <p className="mt-10 text-3xl font-light">$110</p>
            <button className="w-full cursor-pointer bg-white py-3 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200">
              Add to Bag
            </button>
            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <p className="hover:text-neutral-300">763 total reviews</p>
              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <HiStar key={index} size={20} className="text-white" />
                ))}
                <HiStar size={20} className="text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherFragrances name={name} />
    </Bounded>
  );
};

export default Fragrance;
