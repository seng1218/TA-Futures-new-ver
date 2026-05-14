'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 35, rotateX: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' }
  }),
};

export default function TermsConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Please read this document before accessing the TA Futures official website.
          </p>
        </motion.div>

        {/* Content card — rises from depth */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          style={{ transformOrigin: 'top center' }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          <div className="space-y-8">
            <motion.div variants={sectionVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                By accessing the TA Futures Website, you agree to be bound by the following terms and conditions.
              </p>
              <p>
                The Terms and Conditions may be updated by TA Futures Sendirian Berhad and its group of subsidiary companies (&quot;TA Group&quot;) at its sole and absolute discretion from time to time by posting the updated Terms and Conditions without prior separate notification to you. You should check the Terms and Conditions each time you access the TA Futures Website to check for updates. Your continued use of this Website and any pages hereof shall be deemed as your acceptance of any changes, amendments and/or variations. TA Group further reserves the right to change, suspend or discontinue any aspect of this Website without prior notice to you.
              </p>
              <p>
                Your access to and use of this website shall be governed by the Terms and Conditions set out below (&quot;Terms and Conditions&quot;). Please read and understand the Terms and Conditions carefully before using this Website. Your continued access, review or use of this Website shall be deemed as your acceptance to be bound by the Terms and Conditions without limitation/qualification. <strong>IF YOU DO NOT ACCEPT ANY OF THE TERMS AND CONDITIONS, DO NOT USE THIS WEBSITE.</strong>
              </p>
            </motion.div>

            <motion.div variants={sectionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">The TA Futures Website</h3>
              <p>The contents of the TA Futures Website are intended for your personal non-commercial use only. The TA Futures Website and the contents thereof, whether wholly or in part, may not be used for any non-personal or commercial purposes. TA Group strictly prohibits any alterations, copies made for commercial or non-personal purposes, distribution, transmission, display, performance, reproduction, publishing of any part of the TA Futures Website in any manner whatsoever without the prior written consent of TA Futures Sendirian Berhad.</p>
              <p>All materials published on the TA Futures Website (including but not limited to articles, features, photographs, images and illustrations, collectively known as &quot;the Content&quot;) are protected by copyright laws, trademarks or other information and intellectual property rights, and are either owned or controlled by TA Group, or the party credited as the provider of the Content.</p>
              <p>You undertake not to post in the TA Futures Website any materials that are or could reasonably be construed as: (i) false; (ii) defamatory, libelous, obscene, offensive, abusive, liable to incite racial hatred, discriminatory or blasphemous; (iii) in breach of any obligation of confidence or privacy or any trade secret; (iv) infringing the proprietary rights of any third party or for which you have not obtained all necessary licences and/or approvals; or (v) violating any other law.</p>
              <p>You also agree not to transmit to the TA Futures Website any materials which could reasonably be held to constitute or encourage conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of any country or other competent authority, or infringe the rights of any third party enforceable in any part of the world.</p>
              <p>TA Group reserves the right to remove any materials from the TA Futures Website, where it reasonably suspects that such materials are prohibited by these Terms and Conditions or are otherwise inappropriate.</p>
              <p>This website and the contents and information on it is operated by TA Group.</p>
            </motion.div>

            <motion.div variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Other Websites</h3>
              <p>For your convenience and information, the TA Futures Website also provides links to other sites operated and controlled by third parties (&quot;External Websites&quot;). We shall not be responsible for the availability of these external resources or their contents, and shall not be liable for any information or services which may appear on such External Websites.</p>
              <p>You hereby duly agree and accept that under no circumstances will you hold TA Group liable for any loss or damage caused as a result of your access to the External Websites. TA Group shall also not be responsible for any damages or losses caused as a result of the following:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>the use of or reliance on any content, goods or services available on the External Website;</li>
                <li>any delays, defects or omissions that may exist in the services, information or other content provided in such External Websites, whether actual, alleged, consequential or punitive.</li>
              </ol>
              <p>TA Group makes no guarantees or representations as to, and shall have no liability for, any electronic content delivered by any third party.</p>
            </motion.div>

            <motion.div variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8" style={{ transformOrigin: 'top center' }}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Use of Your Personal Information</h3>
                <p>If you choose to provide us with any of your personal information, such personal information shall also be governed by the terms and conditions set out in our Personal Data Protection Notice. TA Group shall deal with your data and personal information in accordance with the Personal Data Protection Notice as may be amended or supplemented from time to time.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Feedback &amp; Suggestions</h3>
                <p>Any communication from you sent to TA Group&apos;s Website or otherwise to TA Group by electronic mail shall be treated as non-confidential. Your comments, suggestions, questions, feedback and the like regarding the Content and/or our services in general may be used by us for any purpose.</p>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4" style={{ transformOrigin: 'top center' }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Liability</h3>
              <p>By using our Website you are deemed to have agreed and accepted that TA Group will not be held liable under any circumstances, including negligence, for any direct, indirect or consequential loss arising from your use of the information and material contained in our Website or from your access to the linked External Websites.</p>
              <p>You hereby undertake to fully indemnify TA Group for any damages, losses, expenses and cost that may arise as a direct or indirect consequence of a breach on your part of any provisions of these Terms and Conditions.</p>
            </motion.div>

            <motion.div variants={sectionVariants} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm" style={{ transformOrigin: 'top center' }}>
              <div className="flex-1 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Exclusions</h4>
                <p>The exclusions and limitations described herein shall apply only to the extent permitted by law, without prejudice to our rights to seek legal redress in accordance with the applicable laws.</p>
              </div>
              <div className="w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
              <div className="flex-1 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white">Applicable Law and Jurisdiction</h4>
                <p>These Terms and Conditions and the TA Futures Website&apos;s Content shall be governed and construed in accordance with Malaysian laws, and the courts of Malaysia shall have exclusive jurisdiction to adjudicate any dispute which may arise in relation thereto.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
