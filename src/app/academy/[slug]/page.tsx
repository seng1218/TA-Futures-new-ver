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
    description: "Learn the basics of futures contracts, including margin, leverage, and how trading works.",
    content: [
      {
        section: "What are Futures?",
        text: "A futures contract is an agreement to buy or sell something at a set price on a future date. All futures contracts on the exchange have the same standard terms."
      },
      {
        section: "Margin & Leverage",
        text: "To trade futures, you only need to put up a small deposit called the 'Initial Margin'. This lets you control a large contract with less money, but it also means your losses can be larger."
      },
      {
        section: "Mark-to-Market",
        text: "At the end of each trading day, your account is updated to reflect your profit or loss based on the closing price. This is called mark-to-market."
      }
    ]
  },
  'fcpo-mastery': {
    title: "FCPO Mastery",
    level: "Intermediate",
    duration: "60 mins",
    description: "A detailed look at what drives palm oil prices — including supply, demand, and global economic factors.",
    content: [
      {
        section: "Introduction to FCPO",
        text: "Crude Palm Oil Futures (FCPO) is the global benchmark for the palm oil industry. It is traded on Bursa Malaysia Derivatives (BMD)."
      },
      {
        section: "Supply Factors",
        text: "Palm oil supply is affected by weather (such as El Niño or La Niña), the natural growing cycles of palm trees, and the availability of farm workers in Malaysia and Indonesia."
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
    description: "Learn how to read charts, understand volume, and use indicators to find good trade entries and exits.",
    content: [
      {
        section: "Price Action Foundation",
        text: "Learn to read price movement directly from charts. Focus on support and resistance levels, trendlines, and candlestick patterns."
      },
      { section: "Volume Profile", text: "Volume Profile is a chart tool that shows how much trading happened at each price level over a given time." },
      { section: "Algorithmic Indicators", text: "Learn to use moving averages, oscillators, and volatility bands to find high-probability entry and exit points." }
    ]
  },
  'platform-architecture': {
    title: "Platform Architecture",
    level: "All Levels",
    duration: "30 mins",
    description: "A step-by-step guide to using QST software to trade quickly and manage your risk effectively.",
    content: [
      { section: "Order Types", text: "Learn the different order types: Market, Limit, Stop, and Trailing Stop. Know when to use each one." },
      { section: "Risk Management Tools", text: "Set up your platform with risk controls, auto-liquidation limits, and position size tools." },
      { section: "Execution Speed", text: "Adjust your connection and interface settings to reduce delays when sending orders to the exchange." }
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

