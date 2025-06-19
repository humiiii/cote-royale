import React from "react";
import {
  LuCrown,
  LuDroplet,
  LuFlame,
  LuGem,
  LuTreePine,
  LuZap,
} from "react-icons/lu";

const sentProfiles = {
  spicy: { label: "Spicy & Smoky", icon: LuFlame },
  woody: { label: "Woody & Herbal", icon: LuTreePine },
  fresh: { label: "Fresh & Aquatic", icon: LuDroplet },
};

const moods = {
  bold: { label: "Bold & Seductive", icon: LuCrown },
  grounded: { label: "Grounded & Sophisticated", icon: LuGem },
  refreshing: { label: "Refreshing & Invigorating", icon: LuZap },
};

const FragranceAttribute = ({
  mood: providedMood,
  scentProfile: providedScentProfile,
  className,
}) => {
  const scent = sentProfiles[providedScentProfile];
  const mood = moods[providedMood];

  console.log(scent, mood);

  if (!scent || !mood) return null;

  const ScentIcon = scent.icon;
  const MoodIcon = mood.icon;

  return (
    <div className={className}>
      <p className="mb-2 text-base font-semibold uppercase">Features</p>
      <div className="grid gap-2">
        <p className="flex items-center gap-2">
          <ScentIcon className="text-xl" /> {scent.label}
        </p>
        <p className="flex items-center gap-2">
          <MoodIcon className="text-xl" /> {mood.label}
        </p>
      </div>
    </div>
  );
};

export default FragranceAttribute;
