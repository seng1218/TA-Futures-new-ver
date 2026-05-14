import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PersonalDataNoticePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden py-16 md:py-24">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Personal Data Notice
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            How TA Futures collects, processes, and protects your personal data in compliance with the Personal Data Protection Act 2010.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-brand mb-2">
              <ShieldCheck className="w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your Data Privacy Matters</h2>
            </div>
            <p className="text-lg">
              TA Futures Sdn Bhd (&quot;TA Futures&quot;) values your privacy and strives to ensure that any personal data you share is kept secure and confidential. The Personal Data Protection Notice of TA Group outlines the ways in which we use, share, and protect the personal data of our prospective clients and existing clients in accordance with the Personal Data Protection Act 2010 of Malaysia.
            </p>
            <p className="text-lg">
              The Notice is available in both English and Bahasa Malaysia. We encourage you to download the full document for detailed information on your rights and our data handling practices.
            </p>

            <div className="pt-6">
              <Link
                href="/documents/TAF-PDP-Notice_December-2024-Approved.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Personal Data Notice PDF
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Data Protection Officer</h3>
            <p className="mb-4">
              If you have any questions or require further clarification regarding our Personal Data Notice, please contact our Data Protection Officer:
            </p>
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 inline-block w-full md:w-auto">
              <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">Email:</p>
              <a href="mailto:DPO@ta.com.my" className="text-brand hover:underline block mb-4">DPO@ta.com.my</a>

              <p className="font-bold text-slate-800 dark:text-slate-200 mb-1">Address:</p>
              <p className="text-slate-600 dark:text-slate-400">
                Data Protection Officer<br />
                Level 34, Menara TA One<br />
                22 Jalan P. Ramlee<br />
                50250 Kuala Lumpur
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
