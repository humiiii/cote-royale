import clsx from "clsx";
import React from "react";

const Button = ({ children, styles }) => {
  return (
    <button
      className={clsx(
        `mt-8 inline-flex w-fit cursor-pointer items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300 ${styles}`,
      )}
    >
      {children}
    </button>
  );
};


export default Button;
