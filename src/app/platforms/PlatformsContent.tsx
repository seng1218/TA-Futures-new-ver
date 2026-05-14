'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { use3DTilt } from '@/components/use3DTilt';

function FloatCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
 const ref = useRef<HTMLDivElement>(null);
 use3DTilt(ref, { maxAngle: 6, perspective: 1200, scale: 1.015 });
 return (
 <motion.div
 initial={{ opacity: 0, rotateY: -20, y: 30 }}
 whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
 viewport={{ once: true, amount: 0.15 }}
 transition={{ duration: 0.8, delay, ease: 'easeOut' }}
 style={{ transformOrigin: 'left center' }}
 >
 <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
 {children}
 </div>
 </motion.div>
 );
}

export default function PlatformsContent() {
 return (
 <main className="min-h-screen bg-transparent pt-10 pb-24 transition-colors" style={{ perspective: '1200px' }}>
 {/* Hero */}
 <section className="max-w-7xl mx-auto px-6 mb-10 md:mb-20 text-center">
 <motion.div
 initial={{ opacity: 0, y: 40, rotateX: -18 }}
 animate={{ opacity: 1, y: 0, rotateX: 0 }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 style={{ transformOrigin: 'bottom center' }}
 >
 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
 Advanced <span className="text-brand">Platforms</span>
 </h1>
 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto transition-colors">
 Institutional-grade execution environments tailored to your workflow. From professional desktop terminals to lightning-fast mobile routing, trade without limits.
 </p>
 </motion.div>
 </section>

 <section className="max-w-7xl mx-auto px-6 space-y-8">

 {/* Flagship: QST Desktop */}
 <FloatCard
 delay={0}
 className="bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-800/20 rounded-3xl overflow-hidden shadow-xl hover:border-brand/40 group flex flex-col lg:flex-row"
 >
 <div className="p-6 sm:p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
 <span className="text-xs font-bold text-brand uppercase tracking-widest mb-4 block" style={{ transform: 'translateZ(16px)' }}>Flagship Terminal</span>
 <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors" style={{ transform: 'translateZ(20px)' }}>QST Desktop</h2>
 <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg transition-colors">
 Engineered exclusively for the professional day trader. Gain the ultimate edge with deep market DOM, advanced technical indicators, native spread matrices, and multi-monitor workspace support out of the box.
 </p>
 <a
 href="https://bmy-repo.qst.global/prod/BMY_windows-x64_prod.exe"
 className="inline-block text-center bg-brand text-white rounded-xl px-10 py-4 font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand/20 w-fit"
 style={{ transform: 'translateZ(12px)' }}
 >
 Download for Windows
 </a>
 </div>
 <div className="bg-slate-50/5 lg:w-1/2 p-6 md:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200/20 dark:border-slate-800/20 min-h-[350px] transition-colors">
 <div
 className="w-full h-full border border-slate-200/20 dark:border-slate-700/20 shadow-xl rounded-xl flex items-center justify-center overflow-hidden relative"
 style={{ animation: 'float3d 6s ease-in-out infinite', transformStyle: 'preserve-3d' }}
 >
 <Image src="/qst-desktop.png" alt="QST Desktop Terminal Rendering" width={1200} height={800} className="w-full h-auto object-cover object-top border-t-8 border-slate-100/20 dark:border-slate-800/20" unoptimized />
 </div>
 </div>
 </FloatCard>

 {/* Web & Mobile Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ transformStyle: 'preserve-3d' }}>

 {/* QST Web Lite */}
 <FloatCard
 delay={0.1}
 className="bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-800/20 rounded-3xl p-6 sm:p-10 hover:border-brand/40 transition-all shadow-xl group flex flex-col justify-between h-full"
 >
 <div>
 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block" style={{ transform: 'translateZ(14px)' }}>Browser Access</span>
 <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors" style={{ transform: 'translateZ(18px)' }}>QST Web Lite</h2>
 <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors">
 Fast, lightweight browser-based trading. Execute positions from any terminal instantly—perfectly synced with your desktop environment, without requiring any software installation.
 </p>
 <div className="aspect-[16/9] bg-slate-50/5 border border-slate-200/20 dark:border-slate-700/20 rounded-xl mb-8 flex items-center justify-center overflow-hidden relative shadow-lg">
 <Image src="/qst-web-lite.png" alt="QST Web Lite Rendering" width={800} height={600} className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out" unoptimized />
 </div>
 </div>
 <a
 href="https://qsthk-lite.quicksuitetrading.com/?TAF"
 target="_blank"
 rel="noopener noreferrer"
 className="block text-center w-full bg-brand text-white rounded-xl py-4 font-bold hover:bg-brand-light transition-all shadow-lg shadow-brand/20 mt-auto"
 >
 Launch Web Lite System
 </a>
 </FloatCard>

 {/* TAF Mobile */}
 <FloatCard
 delay={0.2}
 className="bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-800/20 rounded-3xl p-6 sm:p-10 hover:border-brand/40 transition-all shadow-xl group flex flex-col justify-between h-full"
 >
 <div>
 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block" style={{ transform: 'translateZ(14px)' }}>On The Go</span>
 <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors" style={{ transform: 'translateZ(18px)' }}>TAF Mobile</h2>
 <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed transition-colors">
 Trade FCPO and global futures seamlessly on iOS and Android. Maintain absolute control with real-time charting, immediate order routing, and instant push alerts.
 </p>
 <div className="bg-slate-50/5 border border-slate-200/20 dark:border-slate-700/20 rounded-xl p-8 mb-8 transition-colors">
 <h4 className="text-center text-sm font-bold text-slate-800 dark:text-slate-200 mb-6 uppercase tracking-wider">Scan to Download</h4>
 <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
 {[
 { src: '/qr-ios.jpg', label: 'App Store' },
 { src: '/qr-android.jpg', label: 'Google Play' },
 ].map(({ src, label }) => (
 <div key={label} className="flex flex-col items-center" style={{ transform: 'translateZ(16px)' }}>
 <div className="bg-white dark:bg-slate-200 p-2 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm mb-3">
 <Image src={src} alt={`${label} QR Code`} width={80} height={80} className="rounded" unoptimized />
 </div>
 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">{label}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 <div className="flex items-center justify-center py-4 border border-slate-200/20 dark:border-slate-800/20 rounded-xl bg-gray-50/5 text-slate-500 dark:text-slate-400 font-bold text-sm tracking-wide transition-colors">
 Supports App Store & Play Store
 </div>
 </FloatCard>

 </div>
 </section>
 </main>
 );
}
