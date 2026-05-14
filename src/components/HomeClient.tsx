'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneState } from "@/utils/store";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

  }, { scope: container });

  return (
    <div ref={container} className="relative min-h-screen">
      {children}
    </div>
  );
}
