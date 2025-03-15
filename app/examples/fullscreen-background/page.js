"use client";

import FullScreenBackground from "@/components/FullScreenBackground";

export default function FullScreenBackgroundExample() {
  return (
    <div className="bg-black">
      <main>
        <FullScreenBackground
          backgroundImage="/images/global/Background.jpg"
          overlayImage="/images/global/pa.png"
          headline="Project Alchemy"
          headlineColor="text-black"
          headlineSize="text-7xl md:text-8xl"
          headlineWeight="font-black"
          headlineTracking="tracking-tighter"
          sensitivity={0.5}
          maxMovement={10}
        />
      </main>
    </div>
  );
}
