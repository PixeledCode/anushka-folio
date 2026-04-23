"use client";

import { collaborateTitles } from "@/lib/data";
import { Typewriter } from "react-simple-typewriter";

export default function CollaborateTitles() {
  return <Typewriter words={collaborateTitles} loop={true} />;
}
