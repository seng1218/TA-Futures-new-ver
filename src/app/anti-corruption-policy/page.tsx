'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function AntiCorruptionPolicyPage() {
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
            Anti-Corruption Policy
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            TA Futures Sdn Bhd is committed to conducting business with integrity and zero tolerance for corruption and bribery.
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
              As a licensed derivatives broker regulated by the Securities Commission Malaysia, we uphold the highest standards of ethical business conduct. Our Anti-Corruption Policy reflects our commitment to compliance with the Malaysian Anti-Corruption Commission (MACC) Act 2009 and all applicable laws and regulations.
            </p>
            <p>
              The policy applies to all directors, officers, employees, and associated persons of TA Futures Sdn Bhd and its affiliates. It sets out our obligations, procedures, and controls to prevent, detect, and respond to any form of corruption or bribery in our business operations.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6" style={{ transformOrigin: 'top center' }}>
            {[
              { title: 'Zero Tolerance', desc: 'Strict prohibition on offering, paying, soliciting, or accepting any bribe or corrupt advantage.' },
              { title: 'MACC Compliance', desc: 'Full adherence to the Malaysian Anti-Corruption Commission Act 2009 and related regulations.' },
              { title: 'Adequate Procedures', desc: 'Robust internal controls, due diligence, and training to prevent corrupt practices across all operations.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand mb-1">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</span>
                </div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
            <p>
              We encourage all stakeholders to download and review our full Anti-Corruption Policy document, which outlines the specific obligations, reporting procedures, and consequences for non-compliance.
            </p>
            <div className="pt-2">
              <Link
                href="/documents/ta_Anti-Corruption_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Anti-Corruption Policy PDF
              </Link>
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm" style={{ transformOrigin: 'top center' }}>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Reporting Concerns</h3>
            <p>
              If you suspect any breach of this policy, please report it through our{' '}
              <Link href="/whistleblowing-policy" className="text-brand hover:underline font-medium">
                Whistleblowing channel
              </Link>
              . All disclosures are treated with strict confidentiality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
