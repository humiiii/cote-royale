import React from "react";

export const TransitionLink = ({
  href,
  children,
  className,
  onClick,
  tabIndex,
}) => {
  if (!href) {
    console.warn("TransitionLink: No href provided.");
    return null;
  }

  return (
    <a href={href} className={className} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </a>
  );
};
