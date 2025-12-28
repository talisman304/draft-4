"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const [pct, setPct] = useState(55);

  const clip = useMemo(() => ({ clipPath: `inset(0 ${100 - pct}% 0 0)` }), [pct]);

  return (
    <div className="glass rounded-xl p-4">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={afterSrc}
          alt={alt}
          width={1200}
          height={800}
          className="h-[280px] w-full object-cover md:h-[360px]"
          priority={false}
        />
        <div className="absolute inset-0" style={clip}>
          <Image
            src={beforeSrc}
            alt={alt}
            width={1200}
            height={800}
            className="h-[280px] w-full object-cover md:h-[360px]"
            priority={false}
          />
        </div>
        <div
          className="absolute top-0 h-full w-0.5 bg-white/70"
          style={{ left: `${pct}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-3 py-1 text-xs ring-1 ring-white/20"
          style={{ left: `calc(${pct}% - 22px)` }}
        >
          Drag
        </div>
      </div>

      <div className="mt-4">
        <input
          aria-label="Before/after slider"
          type="range"
          min={5}
          max={95}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-2 flex justify-between text-xs text-white/60">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>
    </div>
  );
}
