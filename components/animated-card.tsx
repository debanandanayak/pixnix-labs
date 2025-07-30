'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function AnimatedCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      duration: 0.4,
      rotateY: -15,
      z: -50,
      transformPerspective: 1000,
      ease: "power3.out",
    });

    gsap.to(cardRef.current, {
      delay: 0.4,
      duration: 0.6,
      rotateY: 0,
      z: 0,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleHover}
      className="w-64 h-80 bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center text-xl font-semibold shadow-xl transition-transform will-change-transform"
      style={{
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
    >
      <CardContent className="flex items-center justify-center h-full">
        Hover me
      </CardContent>
    </Card>
  );
}


export function AnimatedCardOverlap() {
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const [isCardAFront, setIsCardAFront] = useState(true);

  const swapCards = () => {
    const frontRef = isCardAFront ? cardARef : cardBRef;
    const backRef = isCardAFront ? cardBRef : cardARef;

    // Animate a left-to-right swing of front card
    gsap.timeline({
      onComplete: () => {
        // Send front card behind and bring the other card forward
        gsap.set(frontRef.current, { zIndex: 1, rotateY: 0 });
        gsap.to(backRef.current, {
          x: "0%",
          translateX:30,
          scale: 1,
          zIndex: 2,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });

        setIsCardAFront(!isCardAFront);
      },
    })
      .to(frontRef.current, {
        rotateY: -45,
        duration: 0.25,
        ease: "power2.in",
        transformOrigin: "left center",
      })
      .to(frontRef.current, {
        rotateY: 60,
        x: "-20%",
        scale: 0.9,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "left center",
      });
  };

  const cardStyle = {
    position: "absolute" as const,
    width: "16rem",
    height: "20rem",
    top: 0,
    left: 0,
    cursor: "pointer",
    transformStyle: "preserve-3d" as const,
  };

  return (
    <div
      className="relative w-[16rem] h-[20rem] mx-auto mt-20"
      onClick={swapCards}
      style={{ perspective: 1000 }}
    >
      <Card
        ref={cardARef}
        style={{ ...cardStyle, zIndex: isCardAFront ? 2 : 1 }}
        className="bg-indigo-500 text-white shadow-xl transition-transform"
      >
        <CardContent className="flex items-center justify-center h-full text-xl font-bold">
          Card A
        </CardContent>
      </Card>

      <Card
        ref={cardBRef}
        style={{
          ...cardStyle,
          zIndex: isCardAFront ? 1 : 2,
          transform: "translateX(-20%)",
        }}
        className="bg-violet-600 text-white shadow-xl transition-transform"
      >
        <CardContent className="flex items-center justify-center h-full text-xl font-bold">
          Card B
        </CardContent>
      </Card>
    </div>

  );
}
