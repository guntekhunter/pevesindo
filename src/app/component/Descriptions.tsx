import React from "react";

// @ts-ignore
export default function Descriptions({ className, children }) {
  return <div className={`${className} text-[.8rem]`}>{children}</div>;
}
