import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const RevealText = ({
  text = "",
  id,
  align = "start",
  as: Component = "div",
  duration = 0.8,
  className,
  staggerAmount = 0.1,
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
}) => {
  const componentRef = useRef(null);

  const words = text.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: staggerAmount,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: componentRef.current,
            start: triggerStart,
            end: triggerEnd,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(".reveal-text-word", {
          duration: 0.5,
          opacity: 1,
          ease: "none",
          y: 0,
          stagger: 0,
        });
      });
    },
    { scope: componentRef },
  );

  return (
    <Component
      className={`reveal-text text-balance ${
        align === "center"
          ? "text-center"
          : align === "end"
            ? "text-right"
            : "text-left"
      } ${className || ""}`}
      ref={componentRef}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
            {index < words.length - 1 ? <>&nbsp;</> : null}
          </span>
        </span>
      ))}
    </Component>
  );
};
