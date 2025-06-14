import React, { useRef } from "react";
import { Bounded } from "../components/Bounded";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollText = () => {
  const componentRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const component = componentRef.current;
      const textElement = textRef.current;
      const contentElement = contentRef.current;
      const letters = textElement?.querySelectorAll("span");

      if (!component || !textElement || !letters || !contentElement) return;

      gsap.set(contentElement, { filter: "blur(40px)" });
      gsap.set(letters, { color: "hsl(220, 9%,20%" });

      gsap.to(contentElement, {
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 75%",
          end: "top 10%",
          scrub: 2,
          //   markers: true,
        },
      });

      const colorT1 = gsap.timeline({
        scrollTrigger: {
          trigger: component,
          start: "top top",
          end: "bottom -100%",
          pin: true,
          scrub: 2,
        },
      });

      colorT1.to(letters, {
        color: "white",
        stagger: {
          each: 0.01,
          from: "start",
          ease: "power1.in",
        },
      });

      colorT1.to(
        ".glow-background",
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      );
    },
    { scope: componentRef },
  );

  const text =
    "Côte Royale is designed for the man who commands attention without seeking it";
  const words = text.split(" ");
  return (
    <Bounded
      ref={componentRef}
      className="relative flex h-screen items-center justify-center bg-neutral-950"
    >
      <div className="glow-background absolute inset-0 z-0 h-full w-full opacity-0"></div>
      <div className="absolute inset-0 bg-[url('/cote-royale/images/noisetexture.jpg')] opacity-30 mix-blend-multiply"></div>
      <div className="" ref={contentRef}>
        <div className="mb-2 text-center text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base">
          <p>Defining Luxury</p>
        </div>
        <div ref={textRef} className="text-center">
          <p className="font-display flex flex-wrap justify-center text-5xl leading-tight text-balance md:text-7xl">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="inline">
                {word.split("").map((char, charIndex) => (
                  <span key={`${char}-${charIndex}`} className="inline">
                    {char}
                  </span>
                ))}
                {index < words.length - 1 ? (
                  <span className="inline">&nbsp;</span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default ScrollText;
