import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import type { Metadata } from 'next';

interface ContentSection {
  section: string;
  text: string;
}

interface ModuleData {
  title: string;
  level: string;
  duration: string;
  description: string;
  content: ContentSection[];
}

const moduleData: Record<string, ModuleData> = {
  'futures-101': {
    title: "Futures 101",
    level: "Beginner",
    duration: "45 mins",
    description: "Understanding critical margin requirements, leverage dynamics, and the foundational mechanics of derivative contracts.",
    content: [
      {
        section: "What are Futures?",
        text: "A futures contract is a legal agreement to buy or sell a particular commodity asset, or security at a predetermined price at a specified time in the future. Futures contracts are standardized to facilitate trading on a futures exchange."
      },
      {
        section: "Margin & Leverage",
        text: "Futures trading requires only a fraction of the total contract value, known as 'Initial Margin'. This leverage allows for significant exposure with relatively small capital, but also increases risk."
      },
      {
        section: "Mark-to-Market",
        text: "At the end of each trading day, the exchange settles all accounts by adjusting them for profits or losses based on the day's closing price. This is known as the mark-to-market process."
      }
    ]
  },
  'fcpo-mastery': {
    title: "FCPO Mastery",
    level: "Intermediate",
    duration: "60 mins",
    description: "Our exclusive deep dive into the supply, demand, and macroeconomic fundamentals driving Crude Palm Oil.",
    content: [
      {
        section: "Introduction to FCPO",
        text: "Crude Palm Oil Futures (FCPO) is the global benchmark for the palm oil industry. It is traded on Bursa Malaysia Derivatives (BMD)."
      },
      {
        section: "Supply Factors",
        text: "Key supply factors include weather conditions (El Niño/La Niña), biological cycles of oil palms, and labor availability in major producing countries like Malaysia and Indonesia."
      },
      {
        section: "Demand Drivers",
        text: "Demand is driven by food consumption, biodiesel mandates, and price competitiveness against other vegetable oils like soybean oil."
      }
    ]
  },
  'technical-analysis': {
    title: "Technical Analysis",
    level: "Advanced",
    duration: "90 mins",
    description: "Mastering pure price action, volume profiling, algorithmic indicators, and highly advanced charting setups.",
    content: [
      {
        section: "Price Action Foundation",
        text: "Understand how to read raw price movement without the clutter of lagging indicators. Focus on support/resistance, trendlines, and candlestick patterns."
      },
      { section: "Volume Profile", text: "Volume Profile is an advanced charting study that displays trading activity over a specified time period at specified price levels." },
      { section: "Algorithmic Indicators", text: "Learn how to use oscillators, moving averages, and volatility bands in a systematic way to identify high-probability entry and exit points." }
    ]
  },
  'platform-architecture': {
    title: "Platform Architecture",
    level: "All Levels",
    duration: "30 mins",
    description: "The complete tactical guide to executing ultra-fast trades and managing active risk natively on TAF software.",
    content: [
      { section: "Order Types", text: "Master the various order types available: Market, Limit, Stop, and Trailing Stop. Learn when to use each for maximum execution efficiency." },
      { section: "Risk Management Tools", text: "Configure your trading terminal with real-time risk parameters, auto-liquidation thresholds, and position sizing calculators." },
      { section: "Execution Speed", text: "Optimize your connection and interface settings to ensure the lowest possible latency when interacting with the exchange." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = moduleData[slug];
  
  return {
    title: `${data?.title || 'Academy Module'} | TA Futures Academy`,
    description: data?.description || "Master the derivatives markets with our comprehensive educational resources.",
  };
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = moduleData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/academy" className="inline-flex items-center text-brand font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Academy
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {data.level}
            </span>
            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
              <Clock className="mr-1 h-4 w-4" /> {data.duration}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="space-y-12">
          {data.content.map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-brand text-white rounded-lg flex items-center justify-center mr-4 text-sm">{i + 1}</span>
                {item.section}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand rounded-3xl text-white text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <h3 className="text-2xl font-bold mb-2">Ready for the next step?</h3>
          <p className="mb-6 opacity-90">Open a trading account today and apply what you&apos;ve learned in the real markets.</p>
          <Link href="/#open-account" className="inline-block bg-white text-brand px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
            Open Account
          </Link>
        </div>
      </div>
    </main>
  );
}

