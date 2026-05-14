"use client";

import { motion } from 'framer-motion';
import LeadForm from '@/components/LeadForm';
import { ShieldCheck, Building2, Award } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const formLayerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Blobs parallax on different Z-planes
    gsap.to(blob1Ref.current, {
      yPercent: 35, z: 60,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true }
    });
    gsap.to(blob2Ref.current, {
      yPercent: -35, z: -40,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true }
    });
    // Text layer lifts as you scroll
    gsap.to(textLayerRef.current, {
      yPercent: -12, z: 40,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.2 }
    });
    // Form stays closer to camera, moves less
    gsap.to(formLayerRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.5 }
    });
  }, { scope: containerRef });

  return (
    <section
      id="open-account"
      ref={containerRef}
      className="relative overflow-hidden bg-transparent"
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      {/* Decorative blobs — different Z-planes */}
      <div ref={blob1Ref} className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#B0905F]/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none animate-[breathing_15s_ease-in-out_infinite]" />
      <div ref={blob2Ref} className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-[breathing_15s_ease-in-out_infinite_reverse]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Copy — front Z-plane */}
          <div ref={textLayerRef} style={{ transformStyle: 'preserve-3d' }}>
            {/* Trust badge — flips in from top */}
            <motion.div
              variants={{
                hidden: { opacity: 0, rotateX: 90, y: 10 },
                visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
              }}
              style={{ transformOrigin: 'bottom center', transformStyle: 'preserve-3d' }}
            >
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm mb-8">
                <ShieldCheck className="w-4 h-4 text-brand" />
                Licensed by Securities Commission Malaysia
              </div>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } }
              }}
              className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-6 leading-tight"
            >
              Trade the Markets. <br />
              <span className="text-brand">Zero Friction.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              Direct market access to Bursa Malaysia Derivatives (BMD) Futures and Options. Execution speed and precision engineered for the modern retail trader.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap gap-6 items-center text-sm text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-brand" /><span>Established 1995</span></div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-brand" /><span>Bursa Malaysia Participant</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /><span>SC Licensed Broker</span></div>
            </motion.div>
          </div>

          {/* Right: Lead Form — swings in from side */}
          <motion.div
            ref={formLayerRef}
            variants={{
              hidden: { opacity: 0, rotateY: -18, x: 60, scale: 0.94 },
              visible: { opacity: 1, rotateY: 0, x: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
            }}
            className="w-full max-w-md mx-auto lg:mx-0"
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
          >
            <LeadForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
