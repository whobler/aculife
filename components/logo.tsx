import React from "react";
import "./logo.css";


export function Logo({ className = "", alt = "AcuLife" }) {
  return (
    <img
      src="/images/aculife-logo.png"
      alt={alt}
      className={`site-logo ${className}`}
      loading="lazy"
      width="160"
      height="60"
    />
  );
}
