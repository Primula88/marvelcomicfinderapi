import React from "react";

export default function Logo({ text, src, altText }) {
  if (src) {
    return <img src={src} alt={altText} />;
  }

  return <h1 className="absolute top-0 left-0">{text}</h1>;
}