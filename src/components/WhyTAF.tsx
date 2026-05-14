"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { use3DTilt } from './use3DTilt';
import { ShieldCheck, TrendingUp, Headphones, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Regulated',
    desc: 'We are fully licensed by the Securities Commission Malaysia (SC). Trade with peace of mind — we follow all the rules.',
  },
  {
    icon: Building2,
    title: 'Established Since 1995',
    desc: 'Part of TA Enterprise since 1995. We have been helping traders for over 29 years.',
  },
  {
    icon: TrendingUp,
    title: 'Direct Bursa BMD Access',
    desc: 'Trade FCPO, FKLI, Gold and more on Bursa Malaysia directly. Fast order placement with no extra steps.',
  },
  {
    icon: Headphones,
    title: 'Professional Dealing Desk',
    desc: 'Our team is here to help you during all trading hours, including night sessions.',
  },
];

function ReasonCard({ icon: Icon, title, desc, index }: { icon: LucideIcon; title: string; desc: string; index: number }) {
  const tiltRef = useRef<HTMLDivElement>(null);
  use3DTilt(tiltRef, { maxAngle: 8, perspective: 900, scale: 1.04 });

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -80, x: -30 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      style={{ transformOrigin: 'left center' }}
      className="h-full"
    >
      <div
        ref={tiltRef}
        className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand/30 transition-colors duration-300 h-full cursor-default flex flex-col text-center items-center"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        <div
          className="flex items-center justify-center w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl mb-6 group-hover:bg-brand/20 transition-colors duration-300 shrink-0 mx-auto"
          style={{ transform: 'translateZ(24px)' }}
        >
          <Icon className="w-6 h-6 text-brand" />
        </div>
        <h3
          className="text-lg font-bold text-white mb-3 tracking-tight"
          style={{ transform: 'translateZ(16px)' }}
        >
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed flex-grow">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyTAF() {
  return (
    <section className="relative bg-transparent py-20 overflow-hidden" style={{ perspective: '1400px' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14"
          style={{ transformOrigin: 'bottom center' }}
        >
          <span className="inline-block text-brand text-sm font-bold uppercase tracking-widest mb-3">Why Choose TAF</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your Trusted Partner in <span className="text-brand">Futures Trading</span>
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            TA Futures has years of experience and modern tools to help you trade with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {reasons.map(({ icon, title, desc }, idx) => (
            <ReasonCard key={title} icon={icon} title={title} desc={desc} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
