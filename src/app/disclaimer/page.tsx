'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: 'easeOut' }
  }),
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden py-16 md:py-24" style={{ perspective: '1300px' }}>
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -22 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          style={{ transformOrigin: 'bottom center' }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Important legal information about your use of the TA Futures Website.
          </p>
        </motion.div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          <div className="space-y-6">
            {[
              "The information provided on the TA Futures Website is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to laws or regulations or which would subject TA Group to any registration requirement within such jurisdiction or country. Neither the information, nor any opinion contained in the TA Futures Website constitutes a solicitation or offer by TA Group to buy or sell any securities, futures, options or other financial instruments or provide any investment advice or service whatsoever and the TA Futures Website cannot under any circumstances be relied upon for investment dealings of whatever nature. You are advised to obtain separate independent professional advice before making any decision to trade/invest in securities or invest in any financial instruments.",
              "Whilst every care has been taken in preparing the information materials contained in the TA Futures Website, the information on the TA Futures Website is provided on an \"as is\" basis without any warranty or indemnity of any kind either expressly or implied, including but not limited to any implied warranties or indemnities or implied terms of satisfactory quality, fitness for a particular purpose or non-infringement. All such implied terms, warranties and indemnities are hereby excluded.",
              "TA Group will not be held responsible for any loss or damage that could result from interception by any third parties of any information made available to you via the TA Futures Website. Although the information provided to you on the TA Futures Website is obtained or compiled from sources we believe to be reliable, TA Group cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose.",
              "In no event will TA Group or any such parties be liable to you for any other damages of any direct, special, indirect, consequential, incidental damages or any other damages of any kind even if TA Group or any other party have been advised of the possibility thereof.",
              "Nothing in our Website constitutes an offer to sell any securities and other goods or services of whatever nature and cannot under any circumstances be relied upon for investment dealings of whatever nature.",
              "If any provision of these disclaimers and exclusions shall be unlawful, void or any reason unenforceable then that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={sectionVariants}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{ transformOrigin: 'top center' }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              variants={sectionVariants}
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ transformOrigin: 'top center' }}
              className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mt-8"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Regulatory Notice</h3>
              <p className="mb-4">
                The contents of this website and all our advertisements through printed or electronic, digital or other means of communications have not been reviewed by the Securities Commission Malaysia:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-brand text-sm">
                <li>Magazines and newspapers;</li>
                <li>Broadcasts (e.g. radio, television and cinema);</li>
                <li>Display-only materials (e.g. outdoor advertising, including billboards, signs at public venues, posters, exhibition panels and transit advertising);</li>
                <li>The internet, including webpages, banner advertisements, video streaming platforms (e.g. YouTube, Vimeo), and social media or networking platforms (e.g. Facebook, LinkedIn, Instagram, TikTok, Pinterest) and microblogging platforms (e.g. Twitter); and internet discussion sites;</li>
                <li>Mobile phone messages or messaging applications (e.g. SMS, MMS, text messages, WhatsApp messages, Line, Snapchat);</li>
                <li>Product or service brochures and promotional fact sheets;</li>
                <li>Direct mail (e.g. by post, facsimile or email);</li>
                <li>Telemarketing activities and audio messages for telephone callers on hold; and</li>
                <li>Presentations, seminars and advertorials.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
