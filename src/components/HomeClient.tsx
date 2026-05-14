'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Entrance from "@/components/Entrance";
import { sceneState } from "@/utils/store";
import { useRef, useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const handleEntranceComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useGSAP(() => {
    if (!isLoaded) return;
    // ... rest of useGSAP logic

    // Entrance Animation for Hero
    const tl = gsap.timeline();
    
    tl.from(".hero-content-reveal", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.5,
    });

    // Scroll Animations for 3D Background
    gsap.to(sceneState, {
      scrollTrigger: {
        trigger: "#why-taf",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      positionX: 1.5,
      rotationY: Math.PI / 2,
    });

    gsap.to(sceneState, {
      scrollTrigger: {
        trigger: "#products",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      positionX: -1.5,
      rotationY: Math.PI,
    });

    gsap.to(sceneState, {
      scrollTrigger: {
        trigger: "#utilities",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      positionX: 0,
      rotationY: Math.PI * 1.5,
      scale: 1.5,
    });

    gsap.to(sceneState, {
      scrollTrigger: {
        trigger: "#market-intel",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      positionX: 0,
      rotationY: Math.PI * 2,
      scale: 2,
    });

  }, { scope: container, dependencies: [isLoaded] });

  return (
    <div ref={container} className="relative min-h-screen">
      <AnimatePresence>
        {!isLoaded && <Entrance key="entrance" onComplete={handleEntranceComplete} />}
      </AnimatePresence>
      <div className={isLoaded ? 'opacity-100' : 'opacity-0'}>
        {children}
      </div>
    </div>
  );
}
