import React from "react";


export function Logo({ className = "", alt = "AcuLife" }) {
  return (
    <img
      src="/aculife-logo.png"
      alt={alt}
      className={`site-logo ${className}`}
      loading="lazy"
      width="160"
      height="60"
    />
  );
}
