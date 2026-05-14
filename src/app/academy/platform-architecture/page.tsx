'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function PlatformArchitecturePage() {
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
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Module 4 • Software Mastery</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
          Architecting QST Desktop
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          Quick Screen Trading (QST) is our professional trading platform. It is designed for fast order execution, full customisation, and reliable performance. Learn how to set it up below.
        </p>
      </motion.section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 space-y-12">

        {/* Video Tutorial Embed */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-none transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-2 transition-colors">QST Masterclass Video</h3>
          <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative shadow-inner dark:shadow-none transition-colors">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PLOGjoJXp0cmqUBXJDF8pdW1-JJFr1bA40"
              title="QST Platform Masterclass Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">1. Frame Management & Workspaces</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            QST uses a &quot;Frame &amp; Workspace&quot; layout instead of regular windows. You can spread your setup across 2, 4, or even 8 monitors at the same time, with no lag.
          </p>

          <div className="my-10 border-8 border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none transition-colors">
            <Image
              src="/qst-desktop.png"
              alt="QST Desktop Workspace Map"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-8 transition-colors">
            <li><strong>The Core Workspace:</strong> Your primary grid. You can save infinite Workspace Profiles (e.g. &quot;Morning FCPO Scope&quot;, &quot;Afternoon US Equities&quot;) and swap between them instantly.</li>
            <li><strong>Frame Docking:</strong> Every individual widget (DOM, Chart, Quote Board) is an isolated Frame. You can securely snap, stack, or tab these frames anywhere inside your workspace.</li>
            <li><strong>Link Groups (Color Coding):</strong> A useful efficiency feature. When you link your &quot;Quotes Monitor&quot; and &quot;Order Ticket&quot; with the same colour, clicking any asset automatically fills in the order form — reducing the chance of errors.</li>
          </ul>

          {/* Link Group Color Coding Visual */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Link Group — Color Coding System</p>
            <div className="space-y-3">
              {[
                { color: 'bg-red-500',     label: 'Red Group',   frames: ['Quotes Monitor', 'Order Ticket', 'Price Ladder'],  note: 'Click any symbol → all linked frames auto-sync instantly' },
                { color: 'bg-blue-500',    label: 'Blue Group',  frames: ['Candlestick Chart', 'Volume Profile'],             note: 'Chart workspace locked to your primary trading instrument' },
                { color: 'bg-emerald-500', label: 'Green Group', frames: ['Positions Window', 'Account Summary'],             note: 'Risk dashboard — always visible, never linked to symbol changes' },
              ].map(g => (
                <div key={g.label} className="flex items-start gap-3 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <span className={`w-3 h-3 rounded-full ${g.color} flex-shrink-0 mt-0.5`}></span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-1.5">
                      {g.frames.map(f => (
                        <span key={f} className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">{f}</span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{g.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">2. The Price Ladder (Depth of Market)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            The regular order form can be too slow for fast trades. Most active traders use the &quot;Price Ladder&quot; (DOM) instead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border-t-4 border-t-red-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">The Ask Column (Sellers)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The red column shows all pending sell orders. Click inside it to place a sell order at that price.</p>
            </div>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 border-t-4 border-t-blue-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">The Bid Column (Buyers)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">The blue column shows all pending buy orders. Comparing the two columns gives you a quick sense of short-term price direction.</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-brand p-6 rounded-r-xl transition-colors">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Single-Click Execution</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Turn on single-click ordering inside the Price Ladder to skip the confirmation pop-up. Your order is sent directly to the exchange.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">3. The Quotes Monitor</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            The Quotes Monitor shows all your watched assets in one place, like a live dashboard.
          </p>

          <div className="my-10 border-8 border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none transition-colors">
            <Image
              src="/qst-web-lite.png"
              alt="QST Quotes Monitor Spread"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          <ul className="list-disc pl-6 space-y-4 text-slate-600 dark:text-slate-400 mb-6 transition-colors">
            <li><strong>Dynamic Sorting:</strong> Sort by % change to quickly spot which markets are moving.</li>
            <li><strong>Spread Matrices:</strong> QST shows spread pricing between contracts automatically, without manual calculations.</li>
            <li><strong>Custom Columns:</strong> Add columns for Daily Volume, Open Interest, and other key data directly on your main screen.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">4. Position Tracking & Account Risk</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
            Not tracking your risk can wipe out your account. The <strong>Positions Window</strong> in QST shows your live profit and loss in real time, updating with every price tick.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 transition-colors">
            The <strong>Working Orders</strong> tab shows orders still waiting to be filled. The <strong>Filled Orders</strong> window shows completed trades. <em>Always check Working Orders before you leave — do not leave open orders unattended in a moving market.</em>
          </p>

          {/* Positions Window Mockup */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden mb-2">
            <div className="px-5 py-3 border-b border-slate-800 flex justify-between items-center">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Positions Window — Live P&L</p>
              <span className="text-xs text-emerald-400 font-mono">Mark-to-Market</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="bg-slate-800/60 text-slate-400 uppercase tracking-wider">
                    <th className="py-2 px-4 text-left font-bold">Symbol</th>
                    <th className="py-2 px-4 text-right font-bold">Qty</th>
                    <th className="py-2 px-4 text-right font-bold">Avg Entry</th>
                    <th className="py-2 px-4 text-right font-bold">Last</th>
                    <th className="py-2 px-4 text-right font-bold">Unrealised P&L</th>
                    <th className="py-2 px-4 text-right font-bold">Realised P&L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    { sym: 'FCPO MAY26', qty: '+2', entry: '4,482', last: '4,510', unreal: '+1,400', realised: '0',    gain: true  },
                    { sym: 'FKLI MAR26', qty: '+1', entry: '1,584', last: '1,578', unreal: '-300',   realised: '+750', gain: false },
                    { sym: 'FGLD APR26', qty: '-1', entry: '3,820', last: '3,795', unreal: '+500',   realised: '0',   gain: true  },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-2.5 px-4 text-slate-200 font-bold">{row.sym}</td>
                      <td className={`py-2.5 px-4 text-right font-bold ${row.qty.startsWith('+') ? 'text-blue-400' : 'text-red-400'}`}>{row.qty}</td>
                      <td className="py-2.5 px-4 text-right text-slate-400">{row.entry}</td>
                      <td className="py-2.5 px-4 text-right text-slate-300">{row.last}</td>
                      <td className={`py-2.5 px-4 text-right font-bold ${row.unreal.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{row.unreal}</td>
                      <td className={`py-2.5 px-4 text-right ${row.realised !== '0' && row.realised.startsWith('+') ? 'text-emerald-400' : row.realised !== '0' ? 'text-red-400' : 'text-slate-600'}`}>{row.realised}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-800/40 border-t border-slate-700">
                    <td colSpan={4} className="py-2.5 px-4 text-slate-400 font-bold uppercase text-xs tracking-wider">Net P&L Today</td>
                    <td className="py-2.5 px-4 text-right text-emerald-400 font-bold">+1,600</td>
                    <td className="py-2.5 px-4 text-right text-emerald-400 font-bold">+750</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold mb-3">Install Your Trading System</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">Ready to trade? Download and install QST Desktop on your computer.</p>
            <Link href="/platforms" className="inline-block bg-brand hover:bg-brand-light text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand/20">
              Launch Download Portal
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
