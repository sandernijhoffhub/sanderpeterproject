"use client";

import { useState } from "react";

import type { ImageAsset } from "@/data/site";

type BeforeAfterSliderProps = {
  before: ImageAsset;
  after: ImageAsset;
};

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(56);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted shadow-soft">
      <img
        src={after.src}
        alt={after.alt}
        width={after.width}
        height={after.height}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before.src}
        alt={before.alt}
        width={before.width}
        height={before.height}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />
      <div
        className="absolute inset-y-0 w-px bg-primary-foreground shadow-premium"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />
      <div className="absolute left-4 top-4 rounded-md bg-background/84 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-md">
        Voor
      </div>
      <div className="absolute right-4 top-4 rounded-md bg-background/84 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-md">
        Na
      </div>
      <input
        aria-label="Vergelijk voor en na"
        type="range"
        min="15"
        max="85"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-x-6 bottom-6 accent-primary"
      />
    </div>
  );
}
