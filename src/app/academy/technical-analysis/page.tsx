'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TechnicalAnalysisPage() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 3 • Advanced Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Systematic Technical Analysis
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Fundamentals tell you the big picture. Technical analysis helps you decide when to enter and exit a trade. Learn how to read charts and find good trading opportunities.
        </p>
      </motion.section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. The Supremacy of Price Action</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Many traders fill their screens with complicated tools. Experienced traders often focus on &quot;Price Action&quot; — which means watching how prices move on a chart, without extra clutter.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-8 transition-colors">
            <li><strong>Support & Resistance:</strong> Price levels where the market tends to stop and reverse. Support stops prices from falling further; Resistance stops prices from rising further.</li>
            <li><strong>Trend Structure:</strong> Identifying Higher Highs and Higher Lows (Uptrend) vs Lower Highs and Lower Lows (Downtrend).</li>
            <li><strong>Breakouts vs Fakeouts:</strong> A real breakout past a resistance level needs strong volume to confirm it. A fakeout is when price briefly crosses a level, then quickly falls back down.</li>
          </ul>

          {/* Candlestick S/R Chart */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Price Action: Support, Resistance & Uptrend Structure</p>
            <p className="text-xs text-slate-500 mb-4">Each candle = one 15-minute bar. Green = bullish close. Red = bearish close.</p>
            <svg viewBox="0 0 420 190" className="w-full" preserveAspectRatio="xMidYMid meet">
              <rect x="20" y="32" width="390" height="12" fill="#ef4444" opacity="0.08" rx="2" />
              <line x1="20" y1="38" x2="410" y2="38" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="6,3" />
              <text x="315" y="33" fill="#ef4444" fontSize="8" fontFamily="monospace">Resistance Zone</text>
              <rect x="20" y="148" width="390" height="12" fill="#22c55e" opacity="0.08" rx="2" />
              <line x1="20" y1="154" x2="410" y2="154" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="6,3" />
              <text x="325" y="168" fill="#22c55e" fontSize="8" fontFamily="monospace">Support Zone</text>
              {[
                { x: 45,  o: 148, c: 134, h: 132, l: 151 },
                { x: 75,  o: 138, c: 125, h: 123, l: 141 },
                { x: 105, o: 128, c: 115, h: 113, l: 131 },
                { x: 135, o: 120, c: 130, h: 132, l: 118 },
                { x: 165, o: 128, c: 113, h: 111, l: 131 },
                { x: 195, o: 116, c: 100, h: 98,  l: 118 },
                { x: 225, o: 103, c: 90,  h: 88,  l: 106 },
                { x: 255, o: 93,  c: 103, h: 105, l: 91  },
                { x: 285, o: 100, c: 84,  h: 82,  l: 103 },
                { x: 315, o: 86,  c: 72,  h: 70,  l: 88  },
                { x: 345, o: 74,  c: 62,  h: 60,  l: 76  },
                { x: 375, o: 64,  c: 68,  h: 66,  l: 72  },
              ].map((c, i) => {
                const isBull = c.c <= c.o;
                const color = isBull ? '#22c55e' : '#ef4444';
                const bodyTop = Math.min(c.o, c.c);
                const bodyH = Math.max(Math.abs(c.o - c.c), 3);
                return (
                  <g key={i}>
                    <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={color} strokeWidth="1.2" />
                    <rect x={c.x - 8} y={bodyTop} width="16" height={bodyH} fill={color} rx="1.5" opacity="0.9" />
                  </g>
                );
              })}
              <line x1="45" y1="151" x2="375" y2="72" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.8" />
              <text x="55" y="175" fill="#f59e0b" fontSize="7.5" fontFamily="monospace">Ascending trendline (Higher Lows)</text>
              <text x="100" y="108" fill="#94a3b8" fontSize="7" fontFamily="monospace">HL</text>
              <text x="220" y="84" fill="#94a3b8" fontSize="7" fontFamily="monospace">HH</text>
              <text x="280" y="78" fill="#94a3b8" fontSize="7" fontFamily="monospace">HL</text>
              <text x="340" y="56" fill="#94a3b8" fontSize="7" fontFamily="monospace">HH</text>
            </svg>
            <div className="flex flex-wrap gap-5 mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block"></span>Bullish candle</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-red-500 inline-block"></span>Bearish candle</span>
              <span className="flex items-center gap-1.5"><span className="w-5 border-t-2 border-dashed border-amber-400 inline-block"></span>Ascending trendline</span>
              <span className="flex items-center gap-1.5"><span className="text-slate-500 font-mono text-xs">HH/HL</span> = Higher High / Higher Low</span>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. Volume & Open Interest (Derivatives Only)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            In futures trading, every exchange publishes two key numbers. These numbers help you check if a price move is real or just a short-term blip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Traded Volume</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The total number of contracts traded in a given time. A big price move with low volume is often short-lived.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Open Interest (OI)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The total number of active contracts still open. If price rises and OI also rises, new money is entering the market — a sign the trend is strong.</p>
            </div>
          </div>

          {/* Volume/OI Interpretation Matrix */}
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Volume + OI Signal Interpretation Matrix</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="py-3 px-4 text-left text-xs font-bold text-brand uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Price</th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-brand uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Volume</th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-brand uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Open Interest</th>
                    <th className="py-3 px-4 text-left text-xs font-bold text-brand uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { price: '↑ Rising', vol: '↑ High', oi: '↑ Rising', signal: 'Strong Uptrend — New money entering long', bg: 'bg-emerald-50 dark:bg-emerald-900/10', color: 'text-emerald-700 dark:text-emerald-400' },
                    { price: '↑ Rising', vol: '↓ Low',  oi: '↓ Falling', signal: 'Weak Rally — Shorts covering only, no conviction', bg: 'bg-yellow-50 dark:bg-yellow-900/10', color: 'text-yellow-700 dark:text-yellow-400' },
                    { price: '↓ Falling', vol: '↑ High', oi: '↑ Rising', signal: 'Strong Downtrend — New shorts entering aggressively', bg: 'bg-red-50 dark:bg-red-900/10', color: 'text-red-700 dark:text-red-400' },
                    { price: '↓ Falling', vol: '↓ Low',  oi: '↓ Falling', signal: 'Exhaustion — Longs exiting, potential reversal setup', bg: 'bg-blue-50 dark:bg-blue-900/10', color: 'text-blue-700 dark:text-blue-400' },
                  ].map((row, i) => (
                    <tr key={i} className={row.bg}>
                      <td className="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-700/50">{row.price}</td>
                      <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700/50">{row.vol}</td>
                      <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700/50">{row.oi}</td>
                      <td className={`py-3 px-4 font-semibold text-xs border-b border-slate-100 dark:border-slate-700/50 ${row.color}`}>{row.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. Moving Averages & Momentum</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Moving averages (MAs) are used by many traders and trading systems. Because so many people watch them, they often act as important price levels.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors mb-6">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">The Exponential Moving Average (EMA)</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The EMA reacts faster than a regular moving average because it gives more weight to recent prices. Day traders use the 9-EMA and 21-EMA on a 15-minute chart to spot momentum changes and set their stop-loss levels.
            </p>
          </div>

          {/* EMA Crossover Chart */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">9-EMA vs 21-EMA — Golden Cross (Bullish Signal)</p>
            <p className="text-xs text-slate-500 mb-4">When the faster 9-EMA crosses above the slower 21-EMA, a new uptrend is beginning.</p>
            <svg viewBox="0 0 420 175" className="w-full" preserveAspectRatio="xMidYMid meet">
              {[40, 80, 120, 155].map(y => (
                <line key={y} x1="20" y1={y} x2="405" y2={y} stroke="#1e293b" strokeWidth="0.6" />
              ))}
              <text x="30" y="18" fill="#475569" fontSize="7.5" fontFamily="monospace">Downtrend / Compression</text>
              <text x="230" y="18" fill="#22c55e" fontSize="7.5" fontFamily="monospace">Uptrend (EMAs confirm)</text>
              {[
                { x: 40,  o: 120, c: 112, h: 110, l: 123 },
                { x: 65,  o: 115, c: 108, h: 106, l: 118 },
                { x: 90,  o: 112, c: 118, h: 120, l: 110 },
                { x: 115, o: 116, c: 108, h: 107, l: 118 },
                { x: 140, o: 110, c: 104, h: 102, l: 112 },
                { x: 165, o: 106, c: 112, h: 114, l: 104 },
                { x: 190, o: 108, c: 100, h: 98,  l: 110 },
                { x: 215, o: 100, c: 92,  h: 90,  l: 102 },
                { x: 240, o: 95,  c: 82,  h: 80,  l: 97  },
                { x: 265, o: 85,  c: 72,  h: 70,  l: 87  },
                { x: 290, o: 75,  c: 63,  h: 61,  l: 77  },
                { x: 315, o: 66,  c: 55,  h: 53,  l: 68  },
                { x: 340, o: 58,  c: 47,  h: 45,  l: 60  },
                { x: 365, o: 50,  c: 40,  h: 38,  l: 52  },
                { x: 390, o: 43,  c: 50,  h: 52,  l: 41  },
              ].map((c, i) => {
                const isBull = c.c <= c.o;
                const color = isBull ? '#22c55e' : '#ef4444';
                return (
                  <g key={i}>
                    <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={color} strokeWidth="1" />
                    <rect x={c.x - 7} y={Math.min(c.o, c.c)} width="14" height={Math.max(Math.abs(c.o - c.c), 3)} fill={color} rx="1.5" opacity="0.85" />
                  </g>
                );
              })}
              <polyline points="40,118 65,114 90,113 115,113 140,111 165,110 190,110 215,108 240,104 265,95 290,84 315,73 340,64 365,56 390,50" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
              <polyline points="40,116 65,111 90,115 115,110 140,106 165,109 190,104 215,98 240,88 265,78 290,68 315,58 340,50 365,43 390,42" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
              <line x1="212" y1="25" x2="212" y2="155" stroke="#22c55e" strokeWidth="1" strokeDasharray="4,3" opacity="0.6" />
              <circle cx="212" cy="103" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.8" />
              <text x="218" y="34" fill="#22c55e" fontSize="7.5" fontFamily="monospace">Golden Cross</text>
              <text x="218" y="43" fill="#22c55e" fontSize="7.5" fontFamily="monospace">9-EMA crosses above 21-EMA →</text>
              <rect x="25" y="163" width="14" height="3" fill="#f59e0b" rx="1" />
              <text x="43" y="167" fill="#94a3b8" fontSize="8" fontFamily="monospace">9-EMA (fast — tracks price closely)</text>
              <rect x="230" y="163" width="14" height="3" fill="#3b82f6" rx="1" />
              <text x="248" y="167" fill="#94a3b8" fontSize="8" fontFamily="monospace">21-EMA (slow — lags behind)</text>
            </svg>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. The Depth of Market (DOM)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Charts show you what has happened. The DOM (also called Level 2) shows you what other traders have queued up right now. You can see buy and sell orders waiting at different price levels.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
            If someone sells 600 FCPO contracts at once, the DOM lets you see instantly whether there are enough buyers to hold the price, or if it will drop sharply.
          </p>

          {/* DOM Order Book Visual */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden mb-6">
            <div className="px-5 py-3 border-b border-slate-800 flex justify-between items-center">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">DOM — FCPO Active Month</p>
              <span className="text-xs text-emerald-400 font-mono">● LIVE</span>
            </div>
            <div className="grid grid-cols-3 text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-2.5 border-b border-slate-800 bg-slate-800/50">
              <span className="text-blue-400">Bid Qty</span>
              <span className="text-center text-slate-300">Price</span>
              <span className="text-right text-red-400">Ask Qty</span>
            </div>
            <div>
              {[
                { price: '4,508', ask: 38,  bid: null },
                { price: '4,507', ask: 74,  bid: null },
                { price: '4,506', ask: 142, bid: null },
                { price: '4,505', ask: 318, bid: null },
                { price: '4,504', ask: null, bid: null, mid: true },
                { price: '4,503', ask: null, bid: 265 },
                { price: '4,502', ask: null, bid: 138 },
                { price: '4,501', ask: null, bid: 88  },
                { price: '4,500', ask: null, bid: 52  },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 items-center px-5 py-2 border-b border-slate-800/40 ${row.mid ? 'bg-slate-700/60' : 'hover:bg-slate-800/40'}`}>
                  <div className="flex items-center gap-2">
                    {row.bid && (
                      <>
                        <div className="h-3.5 bg-blue-500/25 rounded-sm flex-shrink-0" style={{ width: `${Math.min((row.bid / 300) * 70, 70)}px` }}></div>
                        <span className="font-mono text-blue-400 text-xs">{row.bid}</span>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    <span className={`font-mono font-bold text-sm ${row.mid ? 'text-white' : row.ask ? 'text-red-300' : 'text-blue-300'}`}>{row.price}</span>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    {row.ask && (
                      <>
                        <span className={`font-mono text-xs ${row.ask >= 300 ? 'text-red-300 font-bold' : 'text-red-400'}`}>{row.ask}</span>
                        <div className={`h-3.5 rounded-sm flex-shrink-0 ${row.ask >= 300 ? 'bg-red-500/50' : 'bg-red-500/25'}`} style={{ width: `${Math.min((row.ask / 330) * 70, 70)}px` }}></div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-slate-800/30 text-xs text-slate-400 leading-relaxed">
              <span className="text-red-300 font-bold">318 lots @ 4,505</span> — large sell wall visible. Until this is absorbed, upside is capped. Watch for it to diminish before entering long.
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Open the DOM</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Open QST Pro Terminal to view live Level 2 order flow alongside your charts.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Configure Software
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
