"use client";

import { Typewriter } from "react-simple-typewriter";

export default function CollaborateTitles() {
  return (
    <Typewriter
      words={[
        "product owners",
        "project managers",
        "researchers",
        "govt officials",
        "data engineers",
        "developers",
      ]}
      loop={true}
    />
  );
}
