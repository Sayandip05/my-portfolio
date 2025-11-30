import React from 'react';
import { GradientBlur } from "./ui/gradient-blur";

export default function DemoTwo() {
  return (
    <div className="relative w-full h-screen overflow-hidden cursor-move bg-black">
      {/* The component itself */}
      <div className="absolute inset-0 z-10">
         <GradientBlur />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <h4 className="text-6xl font-bold text-white mix-blend-difference">
          Gradient Blur
        </h4>
      </div>
    </div>
  )
}
