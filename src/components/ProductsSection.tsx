"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    emoji: '🌴', code: 'FCPO', name: 'Crude Palm Oil',
    desc: "Malaysia's main palm oil futures contract.",
    color: 'bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-700',
    accent: 'text-green-700 dark:text-green-400',
  },
  {
    emoji: '📈', code: 'FKLI', name: 'KLCI Futures',
    desc: 'Trade the Malaysian stock market index with leverage.',
    color: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-700',
    accent: 'text-blue-700 dark:text-blue-400',
  },
  {
    emoji: '🥇', code: 'FGLD', name: 'Gold Futures',
    desc: 'Gold futures — a popular choice during uncertain times.',
    color: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-100 dark:border-yellow-900 hover:border-yellow-300 dark:hover:border-yellow-700/50',
    accent: 'text-yellow-700 dark:text-yellow-400',
  },
  {
    emoji: '🌿', code: 'FEPO', name: 'East Malaysia CPO',
    desc: 'Palm oil futures traded in East Malaysia.',
    color: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-700',
    accent: 'text-emerald-700 dark:text-emerald-400',
  },
  {
    emoji: '🫒', code: 'FSOY', name: 'Soybean Oil',
    desc: 'Soybean oil futures — trade another popular commodity.',
    color: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900 hover:border-orange-300 dark:hover:border-orange-700',
    accent: 'text-orange-700 dark:text-orange-400',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 border-t border-slate-100/10 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand text-sm font-bold uppercase tracking-widest mb-3">Products Available</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trade <span className="text-brand">BMD Derivatives</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Trade a wide range of contracts on Bursa Malaysia — all from one account.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {products.map(({ emoji, code, name, desc, accent }, idx) => (
          <motion.div
            key={code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative border border-slate-200/50 dark:border-slate-800/50 bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:border-brand/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/5 flex flex-col h-full text-center"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">{emoji}</div>
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className={`inline-block w-fit text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-brand/10 ${accent} border border-current/10`}>
                {code}
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">{name}</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{desc}</p>
            <Link href="/markets" className="text-[10px] font-bold uppercase tracking-widest text-brand hover:text-brand-light flex items-center justify-center gap-2 mt-auto">
              Contract Specs <span>→</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/markets"
          className="inline-flex items-center gap-2 px-10 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand-light transition-all duration-300 shadow-lg shadow-brand/20"
        >
          Explore All Markets
        </Link>
      </div>
    </section>
  );
}
