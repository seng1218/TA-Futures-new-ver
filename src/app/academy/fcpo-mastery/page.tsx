'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function FcpoMasteryPage() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 2 • Intermediate Level</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          FCPO: Trading the Global Benchmark
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Bursa Malaysia&apos;s Crude Palm Oil Futures (FCPO) is the undeniable global benchmark for the pricing of palm oil. To trade it profitably, you must understand the intertwined macroeconomic and agricultural forces driving its volatility.
        </p>
      </motion.section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. The Supply Side: Weather & Yield Cycles</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Malaysia and Indonesia collectively account for over 85% of global palm oil production. Because of this massive concentration, any local agricultural disruption instantly shocks the FCPO market.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-8 transition-colors">
            <li><strong>El Niño / La Niña:</strong> Severe weather patterns that bring prolonged droughts or excessive flooding directly damage fresh fruit bunch (FFB) yields, predictably driving FCPO prices higher due to supply scarcity.</li>
            <li><strong>Labor Shortages:</strong> Palm oil harvesting is famously labor-intensive. Shortages in foreign labor (common during geopolitical policy changes) bottleneck production output.</li>
            <li><strong>Biological Tree Cycles:</strong> Production naturally peaks between August and October, normally exerting seasonal downward pressure on prices during these months.</li>
          </ul>

          {/* Supply Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Production Share */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Global Palm Oil Production Share</p>
              <div className="space-y-3">
                {[
                  { country: 'Indonesia', pct: 57, color: 'bg-brand' },
                  { country: 'Malaysia', pct: 28, color: 'bg-blue-500' },
                  { country: 'Rest of World', pct: 15, color: 'bg-slate-300 dark:bg-slate-600' },
                ].map(item => (
                  <div key={item.country}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-400">{item.country}</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-4">Indonesia + Malaysia = ~85% of global supply. Any disruption to either is felt worldwide.</p>
            </div>

            {/* Seasonal FFB Yield Calendar */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">FFB Yield Seasonality (Malaysia)</p>
              <div className="grid grid-cols-12 gap-1 items-end h-20">
                {[
                  { m: 'J', level: 2 }, { m: 'F', level: 1 }, { m: 'M', level: 2 },
                  { m: 'A', level: 3 }, { m: 'M', level: 3 }, { m: 'J', level: 4 },
                  { m: 'J', level: 4 }, { m: 'A', level: 5 }, { m: 'S', level: 5 },
                  { m: 'O', level: 5 }, { m: 'N', level: 4 }, { m: 'D', level: 3 },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div
                      className={`w-full rounded-t-sm ${i >= 7 && i <= 9 ? 'bg-brand' : 'bg-slate-300 dark:bg-slate-600'}`}
                      style={{ height: `${item.level * 14}px` }}
                    ></div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.m}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
                <span className="inline-block w-2 h-2 rounded-sm bg-brand mr-1 align-middle"></span>
                Peak Aug–Oct exerts seasonal downward pressure on FCPO prices.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Demand Side: Exports & Geopolitics</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            While supply is highly concentrated, demand is massively dispersed. India, China, and the European Union are the largest importers, meaning their domestic policies heavily dictate FCPO movement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Import Tariffs</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">When India lowers import duties on edible oils to combat domestic inflation, it usually triggers a surge in bulk buying, rocketing FCPO demand.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">Festive Seasons</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">Demand reliably spikes in the weeks preceding major festivals like Ramadan and Diwali, as global bulk buyers prepare for immense jumps in food consumption.</p>
            </div>
          </div>

          {/* Major Importers Visual */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Top Palm Oil Importing Nations</p>
            {[
              { country: 'India', share: 18, note: 'Duty changes trigger rapid bulk procurement cycles', flag: '🇮🇳', color: 'bg-orange-500' },
              { country: 'China', share: 15, note: 'Strategic stockpiling drives volatile demand surges', flag: '🇨🇳', color: 'bg-red-500' },
              { country: 'European Union', share: 12, note: 'Biodiesel mandates and sustainability policy risk', flag: '🇪🇺', color: 'bg-blue-500' },
              { country: 'Pakistan', share: 8, note: 'Steady consumption growth sensitive to forex rates', flag: '🇵🇰', color: 'bg-emerald-500' },
            ].map(item => (
              <div key={item.country} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <span className="text-2xl flex-shrink-0">{item.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{item.country}</span>
                    <span className="font-mono font-bold text-slate-600 dark:text-slate-300 text-sm">~{item.share}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full mb-1.5">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.share * 4.5}%` }}></div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. The Substitution Effect: Soybean Oil (CBOT)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Palm oil does not trade in a vacuum. It aggressively competes with other edible oils, primarily Soybean Oil traded on the Chicago Board of Trade (CBOT:ZL).
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors mb-6">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Market Correlation</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Palm oil is traditionally traded at a structural discount to soybean oil. If soybean oil prices spike due to a poor US harvest, global buyers instantly switch their procurement to the cheaper alternative (Palm Oil), driving FCPO up sequentially. Professional traders always keep CBOT Soy Oil open on their secondary platforms to anticipate FCPO momentum.
            </p>
          </div>

          {/* Correlation Chart */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Price Correlation: FCPO vs CBOT Soybean Oil</p>
            <p className="text-xs text-slate-500 mb-5">Illustrative — FCPO trades at a persistent structural discount to ZL</p>
            <svg viewBox="0 0 400 140" className="w-full" preserveAspectRatio="xMidYMid meet">
              {[30, 60, 90, 120].map(y => (
                <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#1e293b" strokeWidth="0.8" />
              ))}
              <text x="5" y="33" fill="#475569" fontSize="7" fontFamily="monospace">High</text>
              <text x="8" y="123" fill="#475569" fontSize="7" fontFamily="monospace">Low</text>
              <polyline points="30,95 70,88 110,75 140,78 170,60 200,55 230,62 260,48 300,38 340,42 380,30" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              <polyline points="30,112 70,105 110,94 140,97 170,80 200,75 230,82 260,68 300,58 340,62 380,50" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
              <polygon points="30,95 70,88 110,75 140,78 170,60 200,55 230,62 260,48 300,38 340,42 380,30 380,50 340,62 300,58 260,68 230,82 200,75 170,80 140,97 110,94 70,105 30,112" fill="#22c55e" opacity="0.06" />
              <line x1="300" y1="38" x2="300" y2="58" stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
              <text x="305" y="52" fill="#64748b" fontSize="7.5" fontFamily="monospace">Spread</text>
              <text x="158" y="55" fill="#f59e0b" fontSize="7" fontFamily="monospace">ZL spikes →</text>
              <text x="158" y="65" fill="#22c55e" fontSize="7" fontFamily="monospace">buyers shift to FCPO</text>
              <rect x="30" y="130" width="14" height="3" fill="#f59e0b" rx="1" />
              <text x="48" y="134" fill="#94a3b8" fontSize="8" fontFamily="monospace">CBOT Soybean Oil (ZL)</text>
              <rect x="210" y="130" width="14" height="3" fill="#22c55e" rx="1" />
              <text x="228" y="134" fill="#94a3b8" fontSize="8" fontFamily="monospace">FCPO (structural discount)</text>
            </svg>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Biodiesel Mandates</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            A massive portion of raw palm oil is refined into biofuel. Governments in Indonesia (B35 mandate) and Malaysia legally enforce the blending of palm-based biodiesel into traditional fossil fuels.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
            When crude oil (NYMEX:CL) prices are high, producing biodiesel from palm oil becomes extremely economically viable, directly pushing FCPO prices higher. Therefore, maintaining a macro-awareness of global energy prices is vital for advanced FCPO traders.
          </p>

          {/* Biodiesel Causal Chain */}
          <div className="mb-8">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">The Biodiesel Price Transmission Chain</p>
            <div className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="flex-1 bg-slate-800 text-white p-5">
                <div className="text-3xl mb-3">🛢️</div>
                <p className="font-bold text-sm">Crude Oil Rises</p>
                <p className="text-xs text-slate-400 mt-1">NYMEX:CL moves higher on supply cuts or demand shock</p>
              </div>
              <div className="hidden sm:flex items-center justify-center bg-slate-700 px-3 text-slate-400 text-xl font-bold flex-shrink-0">→</div>
              <div className="flex-1 bg-orange-600 text-white p-5">
                <div className="text-3xl mb-3">⚡</div>
                <p className="font-bold text-sm">Biodiesel Economics Improve</p>
                <p className="text-xs text-orange-100 mt-1">Palm-based biofuel blending becomes more profitable vs fossil alternatives</p>
              </div>
              <div className="hidden sm:flex items-center justify-center bg-orange-700 px-3 text-orange-300 text-xl font-bold flex-shrink-0">→</div>
              <div className="flex-1 bg-emerald-600 text-white p-5">
                <div className="text-3xl mb-3">📈</div>
                <p className="font-bold text-sm">FCPO Demand Surges</p>
                <p className="text-xs text-emerald-100 mt-1">More palm oil absorbed into the energy sector, reducing edible supply and lifting prices</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <span className="text-2xl flex-shrink-0">🇮🇩</span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Indonesia — B35 Mandate</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">35% palm biodiesel blended into all diesel sold domestically. One of the world&apos;s most aggressive biofuel programs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <span className="text-2xl flex-shrink-0">🇲🇾</span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Malaysia — B20 Mandate</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">20% palm biodiesel blend enforced in transport and industrial sectors, providing a structural domestic demand floor.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Track Real-Time Deliveries</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Access MPOB (Malaysian Palm Oil Board) reports and live charting arrays directly inside your Pro Terminal.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Launch Desktop Terminal
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
