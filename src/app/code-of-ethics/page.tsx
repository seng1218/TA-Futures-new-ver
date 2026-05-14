'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const principles = [
  { title: 'Integrity', desc: 'Act honestly and with transparency in all business dealings and communications.' },
  { title: 'Professionalism', desc: 'Maintain the highest standards of competence, diligence, and objectivity.' },
  { title: 'Confidentiality', desc: 'Protect client and company information and respect privacy obligations at all times.' },
  { title: 'Conflict of Interest', desc: 'Identify, disclose, and manage conflicts of interest to safeguard client interests.' },
  { title: 'Market Conduct', desc: 'Comply with all market rules and regulations; never engage in market manipulation or insider trading.' },
  { title: 'Accountability', desc: 'Take responsibility for actions and decisions; report breaches promptly through proper channels.' },
];

export default function CodeOfEthicsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden py-16 md:py-24" style={{ perspective: '1300px' }}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -22 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          style={{ transformOrigin: 'bottom center' }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Code of Ethics &amp; Conduct
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Our commitment to the highest standards of professional ethics and responsible business conduct.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          <motion.div variants={sectionVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
            <p className="text-lg">
              TA Futures Sdn Bhd is dedicated to maintaining a culture of integrity and ethical conduct across all levels of our organisation. Our Code of Ethics &amp; Conduct establishes the standards of behaviour expected of every director, officer, employee, and representative of TA Futures and the TA Group.
            </p>
            <p>
              These standards are grounded in our regulatory obligations as a licensed derivatives broker under the Securities Commission Malaysia and as a Trading Participant of Bursa Malaysia Derivatives Berhad, and reflect our broader commitment to the communities and clients we serve.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Core Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((item, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-brand">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</span>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
            <p>
              The full Code of Ethics &amp; Conduct document provides detailed guidance on our policies, expectations, and procedures for raising concerns. All personnel are required to read, understand, and comply with its provisions.
            </p>
            <div className="pt-2">
              <Link
                href="/documents/Code_of_Ethics_Conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Code of Ethics &amp; Conduct PDF
              </Link>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm" style={{ transformOrigin: 'top center' }}>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Raising Concerns</h3>
            <p>
              Any breach or suspected breach of this Code should be reported through our{' '}
              <Link href="/whistleblowing-policy" className="text-brand hover:underline font-medium">
                Whistleblowing channel
              </Link>
              . We are committed to protecting those who raise concerns in good faith.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
