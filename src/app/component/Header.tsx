import React from "react";

// @ts-ignore
export default function Header({ children, className }) {
  return (
    <h2 className={`justify-center font-bold text-[1.2rem] ${className}`}>
      {children}
    </h2>
  );
}
