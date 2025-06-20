import React, { useEffect, useRef, useState } from "react";

const Lazy = ({ rootMargin, children, ...restProps }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0, rootMargin },
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [rootMargin]);

  return (
    <div ref={ref} {...restProps}>
      {isInView ? children : null}
    </div>
  );
};

export default Lazy;
