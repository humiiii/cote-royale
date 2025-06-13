import { forwardRef } from "react";
import clsx from "clsx";

export const Bounded = forwardRef(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-6 [.header+&]:pt-44 [.header+&]:md:pt-32",
          className,
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
