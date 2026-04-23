"use client";

import { useState, useCallback } from "react";

interface CursorTooltipProps {
  text: string;
  children: React.ReactNode;
}

export default function CursorTooltip({ text, children }: CursorTooltipProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
        style={{ cursor: "default" }}
      >
        {children}
      </span>
      {visible && (
        <span
          style={{
            position: "fixed",
            left: pos.x + 16,
            top: pos.y + 16,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          className="bg-foreground text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap font-sans"
        >
          {text}
        </span>
      )}
    </>
  );
}
