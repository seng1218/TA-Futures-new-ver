"use client";

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { use3DTilt } from '@/components/use3DTilt';
import { ShieldCheck, Users, Award, Lightbulb, Globe, Target, Eye, Building2 } from 'lucide-react';

const coreValues = [
 { icon: ShieldCheck, title: 'Integrity', desc: 'It is a prerequisite to be associated with and part of us here at TA. We place the utmost importance on the integrity of every individual that we employ or deal with. At TA, we strive to practice integrity in all our actions, decisions, practices, policies and procedures. This applies internally within the organization and externally to all parties that we deal and associate with.' },
 { icon: Users, title: 'Focused on people', desc: 'We believe in focusing and investing in our people to build a strong, cohesive, loyal and competent workforce. Together, we will propel the organization forward, build the name of our company as a great employer, and continue attracting the best talent in the market.' },
 { icon: Award, title: 'Committed to excellence', desc: 'We at TA Group define excellence as the never-ending, uncompromising pursuit of doing things better. We believe that excellence is not a standard or level of competency; excellence is the desire of wanting to get better, grow, expand, achieve and progress. It is the uncompromising commitment to move forward and improve in everything that we do.' },
 { icon: Lightbulb, title: 'Encourages innovation', desc: 'Our culture constantly encourages a progressive work environment where new ideas, inputs, opinions and suggestions are highly cherished and favoured.' },
 { icon: Globe, title: 'Dedicated to social responsibility', desc: 'At TA Group, we are dedicated to social responsibility, not merely for compliance or marketing purposes. Indeed, we have a heart for social responsibility and believe that we can make an impact not only on the community but globally.' },
];

const cardVariants: Variants = {
 hidden: { opacity: 0, rotateX: 60, y: 40 },
 visible: (i: number) => ({
 opacity: 1, rotateX: 0, y: 0,
 transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' as const }
 }),
};

function TiltCard({ children, className, custom }: { children: React.ReactNode; className?: string; custom: number }) {
 const ref = useRef<HTMLDivElement>(null);
 use3DTilt(ref, { maxAngle: 7, perspective: 1000, scale: 1.02 });
 return (
 <motion.div
 variants={cardVariants}
 custom={custom}
 style={{ transformOrigin: 'bottom center' }}
 >
 <div ref={ref} className={className} style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
 {children}
 </div>
 </motion.div>
 );
}

export default function AboutUsPage() {
 return (
 <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden transition-colors" style={{ perspective: '1400px' }}>
 {/* Background Ornaments */}
 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
 <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

 {/* Hero Section */}
 <section className="relative z-10 pt-10 md:pt-16 pb-12 px-6 max-w-7xl mx-auto text-center">
 {/* Icon spins in */}
 <motion.div
 initial={{ opacity: 0, rotateY: 180, scale: 0.5 }}
 animate={{ opacity: 1, rotateY: 0, scale: 1 }}
 transition={{ duration: 0.9, ease: 'easeOut' }}
 className="inline-flex items-center justify-center p-4 bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-2xl mb-6 transition-colors"
 style={{ transformStyle: 'preserve-3d' }}
 >
 <Building2 className="w-8 h-8 text-brand" />
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, y: 30, rotateX: -20 }}
 animate={{ opacity: 1, y: 0, rotateX: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
 style={{ transformOrigin: 'top center' }}
 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors"
 >
 About <span className="text-brand">TA Futures</span>
 </motion.h1>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.4 }}
 className="max-w-4xl mx-auto space-y-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-left md:text-center transition-colors"
 >
 <p>
 TA Futures Sdn Bhd (TA Futures), a subsidiary of TA Enterprise, is a licensed Futures Broker of the Bursa Malaysia Derivatives Berhad exchange. The company was incorporated in April 1995 to deal in the emerging derivatives market.
 </p>
 <p>
 TA Futures has a strong client focus and is committed to creating value for clients by providing quality services that meet individual client&apos;s needs. With a team-oriented culture and approach, our clients can benefit from the breadth of our capabilities, functionally and professionally. TA Futures operates with the belief that our reputation is our greatest asset; we are committed to building relationships based on trust and professionalism by ensuring that the highest standards of conduct and work ethics are maintained at all times.
 </p>
 </motion.div>
 </section>

 {/* Vision & Mission — 3D tilt cards */}
 <motion.section
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 className="relative z-10 py-10 px-6 max-w-7xl mx-auto"
 >
 <div className="grid md:grid-cols-2 gap-8 md:gap-12" style={{ transformStyle: 'preserve-3d' }}>
 <TiltCard
 custom={0}
 className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-brand/5 dark:shadow-none h-full text-center flex flex-col items-center"
 >
 <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 mx-auto" style={{ transform: 'translateZ(24px)' }}>
 <Eye className="w-8 h-8 text-brand" />
 </div>
 <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight" style={{ transform: 'translateZ(16px)' }}>VISION</h2>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
 A reputable global financial services corporation renowned for its integrity, excellent and innovative products and services, people focus and care for society and the environment.
 </p>
 </TiltCard>

 <TiltCard
 custom={1}
 className="bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl shadow-slate-900/20 relative overflow-hidden h-full text-center flex flex-col items-center"
 >
 <div className="absolute top-0 right-0 w-64 h-64 bg-brand/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
 <div className="relative z-10 flex flex-col items-center">
 <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm mx-auto" style={{ transform: 'translateZ(24px)' }}>
 <Target className="w-8 h-8 text-white" />
 </div>
 <h2 className="text-3xl font-bold text-white mb-6 tracking-tight" style={{ transform: 'translateZ(16px)' }}>MISSION</h2>
 <p className="text-slate-300 leading-relaxed text-lg">
 Reestablish TA as the local market leader while expanding globally through new business opportunities, partnerships and strategic alliances; increasing our products and services; synergizing business divisions and upholding sustainable best practices.
 </p>
 </div>
 </TiltCard>
 </div>
 </motion.section>

 {/* Core Values — staggered rotateX flip in */}
 <motion.section
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.1 }}
 className="relative z-10 py-16 px-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 mt-8 pb-24 transition-colors"
 style={{ perspective: '1200px' }}
 >
 <div className="max-w-7xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 30, rotateX: -18 }}
 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: 'easeOut' }}
 className="text-center mb-12 md:mb-20"
 style={{ transformOrigin: 'bottom center' }}
 >
 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 uppercase">CORE VALUES</h2>
 <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
 The foundational principles that guide our decisions, actions, and interactions every single day.
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transformStyle: 'preserve-3d' }}>
 {coreValues.slice(0, 3).map(({ icon: Icon, title, desc }, idx) => (
 <TiltCard
 key={title}
 custom={idx}
 className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group h-full text-center"
 >
 <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 mx-auto" style={{ transform: 'translateZ(20px)' }}>
 <Icon className="w-7 h-7" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ transform: 'translateZ(12px)' }}>{title}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
 </TiltCard>
 ))}
 <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3 mx-auto" style={{ transformStyle: 'preserve-3d' }}>
 {coreValues.slice(3).map(({ icon: Icon, title, desc }, idx) => (
 <TiltCard
 key={title}
 custom={idx + 3}
 className="bg-[#FAFAFA] dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand/30 dark:hover:border-brand/30 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group h-full text-center"
 >
 <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300 mx-auto" style={{ transform: 'translateZ(20px)' }}>
 <Icon className="w-7 h-7" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ transform: 'translateZ(12px)' }}>{title}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
 </TiltCard>
 ))}
 </div>
 </div>
 </div>
 </motion.section>
 </main>
 );
}
