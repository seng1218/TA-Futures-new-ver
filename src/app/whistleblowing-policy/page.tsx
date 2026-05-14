import React from 'react';
import { Mail, Download, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WhistleblowingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden py-16 md:py-24">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Whistleblowing Policy
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            At TA Futures Sdn Bhd, we take whistle blowing seriously and your concern matters to us.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">

          <div className="space-y-4">
            <p className="text-lg">
              To support this commitment, we have established a comprehensive Whistleblowing Policy. We encourage you to download and review the full policy document below, which outlines the reporting procedures, protections afforded to whistleblowers, and our investigation process.
            </p>
            <div className="pt-4">
              <Link
                href="/documents/Whistleblowing-Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Whistleblowing Policy PDF
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Reporting Channels</h3>
            <p className="mb-8">
              Your disclosure can be made to any of our dedicated reporting channels. To ensure confidentiality, written reports should be securely sealed in an envelope if sent via post and marked <strong>&quot;Strictly Confidential&quot;</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Postal Address */}
              <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-brand">
                  <MapPin className="w-6 h-6" />
                  <span className="font-bold text-lg text-slate-900 dark:text-white">Post</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Executive Chairman / MD &amp; CEO</p>
                  <p>TA Enterprise Berhad</p>
                  <p>34th Floor, Menara TA One</p>
                  <p>22, Jalan P. Ramlee</p>
                  <p>50250 Kuala Lumpur</p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand">
                    <Mail className="w-6 h-6" />
                    <span className="font-bold text-lg text-slate-900 dark:text-white">Email</span>
                  </div>
                  <a href="mailto:whistle@ta.com.my" className="text-brand hover:underline font-medium break-all">
                    whistle@ta.com.my
                  </a>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-brand">
                    <Phone className="w-6 h-6" />
                    <span className="font-bold text-lg text-slate-900 dark:text-white">Telephone</span>
                  </div>
                  <p className="font-medium">+603-20721277</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
