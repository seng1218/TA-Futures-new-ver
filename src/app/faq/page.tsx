"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What documents are needed when opening a trading account with TAF?",
    answer: (
      <div className="space-y-4">
        <p>Documents needed when opening a trading account are:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 marker:text-brand">
          <li>1 copy of photocopied IC (front and back)</li>
          <li>3 months of latest active bank statement</li>
        </ul>
      </div>
    )
  },
  { question: "What are the trading platforms provided in TAF?", answer: "TAF currently only provides Quick Screen Trading (QST)." },
  { question: "What products does TAF offer?", answer: "As of now, TAF only offers Bursa derivatives products. TAF will keep clients posted whenever there are more products offered in the near future." },
  { question: "How many days will the account opening process take?", answer: "The account opening process will take approximately three (3) working days." },
  { question: "Does TAF accept digital signatures on application forms?", answer: "Yes, TAF accepts digitally signed forms." },
  {
    question: "What is the TAF hotline?",
    answer: (
      <div className="space-y-4">
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-white mb-1">Dealing</p>
          <p className="text-slate-600 dark:text-slate-400">+603-20724832</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
          <p className="font-semibold text-slate-900 dark:text-white mb-2">ITD Support</p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand/50" /><span className="font-medium text-slate-700 dark:text-slate-300">Day time (8:00 am – 6:00 pm):</span> +603-21679799</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400" /><span className="font-medium text-slate-700 dark:text-slate-300">Night time (8:00 pm – 6:00 am):</span> +603-21679339</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    question: "What is the performance margin practice in TAF?",
    answer: (
      <div className="space-y-4">
        <p>In TAF, we practise full-margin trading for all Bursa derivative products. The margin rates are in accordance with Bursa margin requirements.</p>
        <div className="bg-brand/5 p-4 rounded-xl border border-brand/10">
          <p className="font-medium text-slate-900 dark:text-white mb-3">Currently, the required margin is as follows (it is subject to change):</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { symbol: 'FKLI', margin: 'RM 4,000/lot' },
              { symbol: 'FCPO', margin: 'RM 9,000/lot' },
              { symbol: 'FEPO', margin: 'RM 9,000/lot' },
              { symbol: 'FPKO', margin: 'RM 9,000/lot' },
              { symbol: 'FM70', margin: 'RM 6,500/lot' },
              { symbol: 'FGLD', margin: 'RM 16,000/lot' },
              { symbol: 'FSOY', margin: 'USD 2,500/lot' },
              { symbol: 'OCPO', margin: 'Risk-based' },
              { symbol: 'OKLI', margin: 'Risk-based' }
            ].map((item) => (
              <li key={item.symbol} className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                <strong className="text-slate-900 dark:text-white">{item.symbol}</strong>
                <span className="text-brand font-mono font-medium">{item.margin}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  },
  { question: "What if I want to trade intraday with a lower required margin?", answer: "A lower intraday margin is subject to management approval on a case-by-case basis." },
  { question: "How many days am I eligible to hold position when my margin account is below the requirement?", answer: "Clients can hold T+3 if and only if the client's margin account is above 50% of the required margin. Any margin accounts lower than 50% will be subject to TAF foreclosure prior to the T+3 margin call." },
  {
    question: "How is the margin call calculated?",
    answer: (
      <div className="space-y-3">
        <p>The margin call is calculated based on the following calculations:</p>
        <div className="bg-slate-900 p-5 rounded-xl font-mono text-sm text-green-400 shadow-inner">
          <span className="text-slate-400">{"// Equity balance formula"}</span><br />
          Cash balance <span className="text-slate-300">-</span> unrealized losses <span className="text-slate-300">=</span> equity balance<br /><br />
          <span className="text-slate-400">{"// Trigger condition"}</span><br />
          <span className="text-blue-400">If</span> (equity balance <span className="text-slate-300">&lt;</span> required margin) &#123;<br />
          &nbsp;&nbsp;triggerMarginCall();<br />
          &#125;
        </div>
      </div>
    )
  },
  { question: "What if I did not close or deposit the margin call?", answer: "When a client does not act upon the margin call, TAF will exercise its rights to foreclose the client's position even if the margin call has yet to reach T+3. The decision is in the hands of TAF to determine the right course of action." },
  { question: "What is after-hour night trading (T+1)?", answer: "After-hour night trading is an extended trading hour a day before the next trading session. The aim is to sustain growth momentum by enhancing infrastructure to improve the price discovery of Malaysian derivatives products and attract international market players." },
  { question: "What is the trading time for the extended hour trading?", answer: "The trading hours are from Monday to Thursday, 9:00 PM to 11:00 PM Malaysia Time for commodity products and until 2:30 AM for all equity and selected commodity products. The night trading will cease if the next trading day is a public holiday." },
  { question: "What are the FCPO night trading hours?", answer: "FCPO night trading hours are from 9:00 PM to 11:00 PM, Monday to Thursday (except public holidays)." },
  { question: "If I deposit funds to TAF during night trading, will TAF entertain the deposit?", answer: "Yes, TAF back office will update the client's deposit at the cut-off time of 11:00 PM. Any deposits made after the cut-off time will be updated on the next trading session." },
  { question: "What about withdrawals during this trading session?", answer: "Regarding withdrawals submitted during the night market, the back office will only process them on the next trading day before 10:00 AM. Any withdrawal after 10:00 AM will only be processed on the next working day." },
  {
    question: "How is the margin calculated during this trading session?",
    answer: (
      <div className="space-y-5">
        <p className="text-slate-600 dark:text-slate-400">Any open position after 6:00 PM will be considered T+1 in night trading. It is because night trading is an extension of the trading session for the next trading day, not an extension of the current trading day. To better illustrate, here is the detailed explanation for FCPO:</p>
        <div className="relative border-l-2 border-brand/20 ml-3 pl-6 space-y-6">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-brand flex items-center justify-center" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-md mb-2 tracking-wide">6 FEB 2026</div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-sm">
              <span className="font-semibold text-slate-900 dark:text-white inline-block w-36">9:00 PM – 11:00 PM:</span>
              <span className="text-slate-600 dark:text-slate-400">Consider session 1 for 7/2/2026 (any open position margin call from 6/2/2026 6:00 PM will +1 in margin ageing)</span>
            </div>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-brand flex items-center justify-center" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-md mb-2 tracking-wide">7 FEB 2026</div>
            <div className="space-y-3">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-sm">
                <span className="font-semibold text-slate-900 dark:text-white inline-block w-36">10:30 AM – 12:30 PM:</span>
                <span className="text-slate-600 dark:text-slate-400">Consider session 2 for 7/2/2026 (Margin call T+1)</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-sm">
                <span className="font-semibold text-slate-900 dark:text-white inline-block w-36">2:30 PM – 6:00 PM:</span>
                <span className="text-slate-600 dark:text-slate-400">Consider session 3 (final session for 7/2/2026 and margin call T+1 before 6:00 PM)</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm text-sm">
                <span className="font-semibold text-slate-900 dark:text-white inline-block w-36">9:00 PM – 11:00 PM:</span>
                <span className="text-slate-600 dark:text-slate-400">Consider session 1 for 8/2/2026 (any margin call position that carries from 6/2/2026 session 1 will +1 to the margin call ageing and become margin call T+2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "What is the process if I want to lodge a complaint?",
    answer: (
      <div className="space-y-4">
        <p>You may download the complaint form, fill in the details, and forward it to our complaint desk or print and drop it at TA Futures Sdn Bhd office.</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a href="http://tafutures.com.my/csr-forms/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors font-medium text-sm">Download Form</a>
          <a href="mailto:tafcomplaint@ta.com.my" className="inline-flex items-center px-4 py-2 bg-brand/10 text-brand rounded-lg hover:bg-brand/20 transition-colors font-medium text-sm">Email Complaint Desk</a>
        </div>
      </div>
    )
  },
  { question: "How long does it take to receive the complaint result?", answer: "The duration of the process may differ on a case-by-case basis. It is to ensure the process is fair to all parties without prejudice." },
  {
    question: "What else can I do if I am not happy with the TAF internal complaint result?",
    answer: (
      <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-100 dark:border-orange-800/40">
        <p className="text-orange-800 dark:text-orange-300 leading-relaxed mb-4">
          If you are dissatisfied with the outcome of our internal dispute resolution process, you may refer your complaint to the Financial Markets Ombudsman Service (FMOS) within six (6) months from the date of our final response letter.
        </p>
        <a href="https://www.fmos.org.my/" className="inline-flex items-center text-orange-700 dark:text-orange-400 font-bold hover:text-orange-900 dark:hover:text-orange-200 group" target="_blank" rel="noopener noreferrer">
          Visit FMOS Website <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    )
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-slate-950 relative overflow-hidden py-16 md:py-24" style={{ perspective: '1400px' }}>
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header — icon spins, title drops from depth */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, rotateY: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="inline-flex items-center justify-center p-4 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-2xl mb-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <MessageCircleQuestion className="w-8 h-8 text-brand" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, rotateX: -25, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top center' }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about opening an account, our trading platforms, margin requirements, and general services.
          </motion.p>
        </div>

        {/* FAQ Accordion — each item slides in with rotateX stagger */}
        <div className="space-y-4" style={{ transformStyle: 'preserve-3d' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: 20, y: 25 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.4), ease: 'easeOut' }}
                style={{ transformOrigin: 'top center' }}
                className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-2 border-brand/20 shadow-xl shadow-brand/5' : 'border border-slate-200 dark:border-slate-700 hover:border-brand/40 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-slate-800 dark:text-slate-100'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotateX: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-brand/10 text-brand' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, rotateX: -8 }}
                      animate={{ height: 'auto', opacity: 1, rotateX: 0 }}
                      exit={{ height: 0, opacity: 0, rotateX: -8 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      style={{ transformOrigin: 'top center', overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'bottom center' }}
          className="mt-20 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-10 md:p-14 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Still have questions?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Can&apos;t find the answer you&apos;re looking for? Please reach out to our dealing desk.</p>
            <a href="mailto:tafdealing@ta.com.my" className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white rounded-xl font-bold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 hover:shadow-xl hover:-translate-y-1 border border-transparent">
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
