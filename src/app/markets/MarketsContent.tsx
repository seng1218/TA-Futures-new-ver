'use client';

import { motion } from 'framer-motion';
import ContractTable from '@/components/ContractTable';
import SpreadTable from '@/components/SpreadTable';

export default function MarketsContent() {
 return (
 <main className="min-h-screen bg-transparent pt-10 pb-24 transition-colors" style={{ perspective: '1200px' }}>
 {/* Page Header — depth entrance */}
 <section className="max-w-7xl mx-auto px-6 mb-12">
 <motion.div
 initial={{ opacity: 0, y: 40, rotateX: -22 }}
 animate={{ opacity: 1, y: 0, rotateX: 0 }}
 transition={{ duration: 0.85, ease: 'easeOut' }}
 style={{ transformOrigin: 'bottom center' }}
 className="max-w-3xl"
 >
 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">
 Futures <span className="text-brand">Markets</span>
 </h1>
 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
 See all the contracts you can trade with us. Check the required margin, tick size, and trading hours to plan your next move.
 </p>
 </motion.div>
 </section>

 {/* Tables — fade up from depth */}
 <motion.section
 initial={{ opacity: 0, y: 50, rotateX: 8 }}
 animate={{ opacity: 1, y: 0, rotateX: 0 }}
 transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
 style={{ transformOrigin: 'top center' }}
 className="max-w-7xl mx-auto px-6"
 >
 <ContractTable />
 <SpreadTable />
 </motion.section>
 </main>
 );
}
