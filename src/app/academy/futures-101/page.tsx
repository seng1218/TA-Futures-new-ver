'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Futures101Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-10 pb-24 transition-colors" style={{ perspective: '1200px' }}>
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link href="/academy" className="text-sm font-bold text-brand hover:text-brand-light transition-colors flex items-center">
          <span className="mr-2">←</span> Back to Academy
        </Link>
      </div>

      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: 'bottom center' }}
        className="max-w-4xl mx-auto px-6 mb-12"
      >
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 1 • Beginner Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Futures 101: The Core Fundamentals
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Welcome! Before you start trading, it is important to understand how futures work. This module covers everything you need to know as a beginner.
        </p>
      </motion.section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. What is a Futures Contract?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            A futures contract is an agreement to buy or sell something (like palm oil, gold, or a stock index) at a fixed price on a set date in the future.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Unlike buying stocks, you do not own the item right away. You are agreeing to buy it on a future date. But most traders close their position before that date — they just want to profit from the price change, not take delivery of the actual goods.
          </p>

          {/* Contract Flow Diagram */}
          <div className="my-8 grid grid-cols-3 items-center gap-3">
            <div className="flex flex-col items-center text-center p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-3 text-2xl">📈</div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">The Buyer</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">(Long Position)</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">Expects price to rise</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center w-full justify-center gap-1">
                <div className="flex-1 h-px bg-brand/40"></div>
                <span className="text-brand text-lg font-bold">⇌</span>
                <div className="flex-1 h-px bg-brand/40"></div>
              </div>
              <div className="bg-brand/10 dark:bg-brand/20 border border-brand/30 rounded-xl p-3 w-full text-center">
                <p className="font-bold text-brand text-sm">Bursa Exchange</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Acts as central clearinghouse for both sides</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-2xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-3 text-2xl">📉</div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">The Seller</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">(Short Position)</p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">Expects price to fall</p>
            </div>
          </div>
          <p className="text-xs text-center text-slate-400 dark:text-slate-500 -mt-4 mb-6">The exchange eliminates counterparty risk — you never trade directly against another individual.</p>

          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Real-World Example</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">If you anticipate palm oil prices will rise due to supply constraints, you can &quot;Buy&quot; an FCPO contract today at RM 4,500. If the price jumps to RM 4,600 next week, you can sell your contract back to the market, locking in a RM 100 per tonne profit times the contract multiplier (25 tonnes).</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Power of Leverage & Margin</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Leverage is what makes futures trading efficient. Instead of paying the full contract value, you only put down a small amount called <strong>Margin</strong>. This small deposit lets you control a much larger position.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Initial Margin</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The minimum amount of money needed in your account to open a trade. For example, to trade 1 lot of FCPO, you need about RM 9,000.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Maintenance Margin</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The minimum balance needed to keep your trade open. If your account balance drops below this, you will get a <strong>Margin Call</strong> — a request to top up your account.</p>
            </div>
          </div>

          {/* Leverage Visualizer */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-5">FCPO Leverage Breakdown — 1 Lot</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Full Contract Notional Value</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">RM 112,500</span>
                </div>
                <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 dark:bg-slate-500 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Margin Required <span className="text-brand font-bold">(&lt;8% of value)</span></span>
                  <span className="font-mono font-bold text-brand">RM 9,000</span>
                </div>
                <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-brand rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 leading-relaxed">
              At RM 4,500/tonne × 25 tonnes = <strong className="text-slate-600 dark:text-slate-300">RM 112,500</strong> notional. You control the full contract with just <strong className="text-brand">RM 9,000</strong> — approximately <strong className="text-slate-600 dark:text-slate-300">12.5× leverage</strong>.
            </p>
          </div>

          <p className="text-slate-600 dark:text-red-300 leading-relaxed bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-5 rounded-xl border border-red-100 dark:border-red-800/50 transition-colors">
            <strong>Warning:</strong> Leverage works both ways. It can increase your profits, but it also increases your losses. You can lose more than your initial deposit if you are not careful.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. Going Long vs. Going Short</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            In the stock market, you usually buy shares and wait for prices to go up. In futures trading, you can also profit when prices fall. This is called <strong>Going Short</strong>.
          </p>

          {/* Long vs Short Scenario Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div className="border-2 border-emerald-200 dark:border-emerald-800/60 rounded-2xl overflow-hidden">
              <div className="bg-emerald-500 px-6 py-3 flex items-center gap-2">
                <span className="text-white text-lg">↑</span>
                <p className="text-white font-extrabold text-sm uppercase tracking-wider">Going Long (Buy)</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 1</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Buy FCPO @ RM 4,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 2</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Price rises to RM 4,600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 3</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Sell (offset) @ RM 4,600</span>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-3 flex justify-between items-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Net P&L</span>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">+RM 2,500 / lot</span>
                </div>
                <p className="text-xs text-slate-400">(RM 100 gain × 25 tonnes)</p>
              </div>
            </div>

            <div className="border-2 border-red-200 dark:border-red-800/60 rounded-2xl overflow-hidden">
              <div className="bg-red-500 px-6 py-3 flex items-center gap-2">
                <span className="text-white text-lg">↓</span>
                <p className="text-white font-extrabold text-sm uppercase tracking-wider">Going Short (Sell)</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 1</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Sell FCPO @ RM 4,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 2</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Price falls to RM 4,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Step 3</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Buy back @ RM 4,400</span>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-3 flex justify-between items-center">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Net P&L</span>
                  <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">+RM 2,500 / lot</span>
                </div>
                <p className="text-xs text-slate-400">(RM 100 gain × 25 tonnes)</p>
              </div>
            </div>
          </div>

          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 transition-colors">
            <li><strong>Going Long (Buying):</strong> You believe the asset price will increase. You buy now, intending to sell later at a higher price.</li>
            <li><strong>Going Short (Selling):</strong> You believe the asset price will crash. You sell the contract immediately upfront, intending to buy it back later at a drastically lower price. The difference is your profit.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Mark-to-Market Settlement</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Futures use a system called &quot;Mark-to-Market&quot;, which updates your account balance at the end of every trading day based on your profit or loss.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
            Unlike stocks where gains or losses only appear when you sell, futures update your account every day. If you made a profit today, the money is added to your account overnight. If you made a loss, it is taken out.
          </p>

          {/* MTM Daily Settlement Timeline */}
          <div className="relative border-l-2 border-brand/30 ml-4 pl-6 space-y-5 mb-8">
            {[
              { label: 'Day 1 — Position Opened', price: 'Entry @ RM 4,500 (Long 1 lot)', note: 'RM 9,000 margin debited. Position established.', type: 'neutral' },
              { label: 'Day 1 — Settlement', price: 'Settlement Price: RM 4,560', note: '+RM 1,500 credited to your account overnight. (RM 60 × 25 tonnes)', type: 'gain' },
              { label: 'Day 2 — Settlement', price: 'Settlement Price: RM 4,480', note: '−RM 2,000 debited from your account. (RM 80 adverse × 25 tonnes)', type: 'loss' },
              { label: 'Day 3 — Position Closed', price: 'Offset @ RM 4,620', note: '+RM 3,500 final credit. Net realised profit: +RM 3,000.', type: 'gain' },
            ].map((item, i) => {
              const dotColor = item.type === 'gain' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30' : item.type === 'loss' ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 'border-blue-400 bg-blue-50 dark:bg-blue-900/30';
              const cardColor = item.type === 'gain' ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30' : item.type === 'loss' ? 'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30' : 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30';
              const noteColor = item.type === 'gain' ? 'text-emerald-700 dark:text-emerald-400' : item.type === 'loss' ? 'text-red-700 dark:text-red-400' : 'text-blue-700 dark:text-blue-400';
              return (
                <div key={i} className="relative">
                  <span className={`absolute -left-[31px] top-2 w-4 h-4 rounded-full border-2 ${dotColor}`}></span>
                  <div className={`p-4 rounded-xl border ${cardColor}`}>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{item.price}</p>
                    <p className={`text-sm mt-1 ${noteColor}`}>{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Apply These Concepts?</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Now that you know the basics, try our trading platforms and put your knowledge to work.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Download Pro Terminal
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
