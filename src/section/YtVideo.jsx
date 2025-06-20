import React from "react";
import Lazy from "../components/Lazy";

const YtVideo = () => {
  return (
    <section className="bg-black">
      <h2 className="sr-only">Cote Royale Video Reel</h2>
      <Lazy rootMargin="1500px" className="relative w-full pt-[56.25%]">
        <video
          src="/cote-royale/videos/videoplayback.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </Lazy>
    </section>
  );
};

export default YtVideo;
