/* eslint-disable react/no-array-index-key */

"use client";

import React, { useState } from "react";

interface SelectQuantityProps {
  onClick: (value: number) => void;
  value: number;
}

export function SelectQuantityBar({ onClick, value }: SelectQuantityProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled =
          (hoveredIndex !== null && i <= hoveredIndex) ||
          (value && i <= value - 1);

        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            className="rounded-full p-[2px] border border-secondary-foreground cursor-pointer"
            key={`quantity-bar-${i}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onClick(i + 1)}
          >
            <div
              className="rounded-full h-3 w-3 p-[2px] data-[filled=true]:bg-primary"
              data-filled={isFilled}
            />
          </div>
        );
      })}
    </div>
  );
}
