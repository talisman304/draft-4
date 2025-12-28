"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Hero3DScene"), { ssr: false });

export default function Hero3D() {
  return (
    <div className="glass relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-90">
        <Scene />
      </div>
      <div className="relative p-6">
        <div className="text-xs font-semibold text-white/70">3D accent</div>
        <div className="mt-1 text-sm text-white/80">
          Lightweight decorative geometry. Replace with a brand 3D asset later if desired.
        </div>
      </div>
    </div>
  );
}
