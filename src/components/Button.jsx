import clsx from "clsx";
import React from "react";

const Button = ({ text, styles }) => {
  // bg-white text-black hover:bg-white/80
  return (
    <button
      className={clsx(
        `mt-8 inline-flex w-fit cursor-pointer items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300 ${styles}`,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
