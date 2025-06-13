import React, { useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FadeIn = ({ children, vars = {}, className }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        duration: 5,
        opacity: 1,
        ease: "power3.out",
        y: 0,
        ...vars,
      });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className={clsx("opacity-0", className)}>
      {children}
    </div>
  );
};

export default FadeIn;
