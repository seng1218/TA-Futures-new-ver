'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { use3DTilt } from '@/components/use3DTilt';

const modules = [
 { title: "Futures 101", desc: "Understanding critical margin requirements, leverage dynamics, and the foundational mechanics of derivative contracts.", level: "Beginner", slug: "/academy/futures-101" },
 { title: "FCPO Mastery", desc: "Our exclusive deep dive into the supply, demand, and macroeconomic fundamentals driving Crude Palm Oil.", level: "Intermediate", slug: "/academy/fcpo-mastery" },
 { title: "Technical Analysis", desc: "Mastering pure price action, volume profiling, algorithmic indicators, and highly advanced charting setups.", level: "Advanced", slug: "/academy/technical-analysis" },
 { title: "Platform Architecture", desc: "The complete tactical guide to executing ultra-fast trades and managing active risk natively on TAF software.", level: "All Levels", slug: "/academy/platform-architecture" },
];

function ModuleCard({ mod, idx }: { mod: typeof modules[0]; idx: number }) {
 const ref = useRef<HTMLDivElement>(null);
 use3DTilt(ref, { maxAngle: 9, perspective: 900, scale: 1.04 });

 return (
 <motion.div
 initial={{ opacity: 0, rotateY: 45, x: 60 }}
 whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
 viewport={{ once: true, amount: 0.2 }}
 transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
 style={{ transformOrigin: 'left center' }}
 >
 <div ref={ref} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
 <Link
 href={mod.slug}
 className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-brand dark:hover:border-brand hover:shadow-xl hover:shadow-brand/10 dark:hover:shadow-none transition-all duration-300 group flex flex-col justify-between block relative h-full"
 >
 <div>
 <span
 className="text-xs font-bold text-brand uppercase tracking-widest mb-6 block bg-brand/10 w-max px-3 py-1.5 rounded-full"
 style={{ transform: 'translateZ(20px)' }}
 >
 {mod.level}
 </span>
 <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors" style={{ transform: 'translateZ(14px)' }}>
 {mod.title}
 </h3>
 <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{mod.desc}</p>
 </div>
 <div className="text-sm font-bold text-slate-400 group-hover:text-brand transition-colors text-left flex items-center tracking-wide uppercase">
 Launch Module <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">→</span>
 </div>
 </Link>
 </div>
 </motion.div>
 );
}

export default function AcademyContent() {
 return (
 <main className="min-h-screen bg-white dark:bg-slate-950 pt-10 pb-24 transition-colors" style={{ perspective: '1200px' }}>
 <section className="max-w-7xl mx-auto px-6 mb-16">
 <motion.div
 initial={{ opacity: 0, y: 35, rotateX: -20 }}
 animate={{ opacity: 1, y: 0, rotateX: 0 }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 style={{ transformOrigin: 'bottom center' }}
 className="max-w-3xl"
 >
 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">
 TAF <span className="text-brand">Academy</span>
 </h1>
 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
 Elevate your trading acumen. Whether you are cautiously placing your first order or aggressively refining a statistical spread strategy, our curriculum is engineered for your success.
 </p>
 </motion.div>
 </section>

 <section className="max-w-7xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ transformStyle: 'preserve-3d' }}>
 {modules.map((mod, idx) => (
 <ModuleCard key={idx} mod={mod} idx={idx} />
 ))}
 </div>
 </section>
 </main>
 );
}
