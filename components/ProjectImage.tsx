"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/assets/icons";

export default function ProjectImage({
  src,
  link,
}: {
  src: string;
  link?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const imageEl = (
    <Image
      src={src}
      width={845}
      height={440}
      alt=""
      className="rounded-xl object-cover w-full max-h-[440px]"
    />
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {imageEl}
        </a>
      ) : (
        imageEl
      )}
      {link && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-medium px-4 py-2 rounded-full shadow-md transition-opacity duration-150 uppercase whitespace-nowrap flex items-center justify-center gap-1"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: hovered ? 1 : 0,
          }}
        >
          view official case study
          <span className="w-4 h-4 shrink-0 [&_svg]:fill-white">
            <ArrowUpRight />
          </span>
        </div>
      )}
    </div>
  );
}
