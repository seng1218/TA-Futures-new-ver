import type { Metadata } from 'next';
import { Suspense } from 'react';
import MarketIntelligence from '@/components/MarketIntelligence';

export const metadata: Metadata = {
  title: "Market Insights | TA Futures",
  description: "Live market news, research reports, and technical analysis streaming directly to you.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-10 pb-24 transition-colors">
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Market <span className="text-brand">Insights</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Stay on top of the markets. Get the latest news updated in real time.
          </p>
        </div>
      </section>

      {/* Reuse our powerful component without its top margin for cleaner integration */}
      <div className="-mt-16">
        <Suspense fallback={
          <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-64 mb-4" />
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-96 mb-10" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3 aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl" />
              <div className="lg:col-span-2 bg-slate-200 dark:bg-slate-800 rounded-2xl h-64" />
            </div>
          </div>
        }>
          <MarketIntelligence />
        </Suspense>
      </div>
    </main>
  );
}
