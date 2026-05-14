import MotionSection from './MotionSection';

interface NewsArticle {
  id: string | number;
  title: string;
  date: string;
  category: string;
  url: string;
}

async function getLatestNews(): Promise<NewsArticle[]> {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${process.env.NEWS_API_KEY}`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) throw new Error('Failed to fetch live news');

    const data = await res.json();

    return data.articles.slice(0, 4).map((article: { title: string; publishedAt: string; source: { name: string }; url: string }, index: number) => ({
      id: index,
      title: article.title,
      date: new Date(article.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: article.source.name || "Global Market",
      url: article.url,
    }));

  } catch (error) {
    console.log("Live API fetch failed. Using fallback data.", error);
    return [
      { id: 1, title: "Automated Feed: FCPO Support Levels Tested", date: "Just Now", category: "Live Market", url: "#" },
      { id: 2, title: "Automated Feed: CME Micro E-mini Volume Surge", date: "10 mins ago", category: "Equities", url: "#" },
      { id: 3, title: "Weekly Macro: Rate Cut Speculation & Gold", date: "1 hour ago", category: "Macro", url: "#" },
      { id: 4, title: "Technical Setup: FKLI Bullish Divergence", date: "2 hours ago", category: "Index", url: "#" },
    ];
  }
}

export default async function MarketIntelligence() {
  const reports = await getLatestNews();

  return (
    <MotionSection className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">Market Intelligence</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Live, actionable insights streaming directly to your terminal.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 group cursor-pointer">
          <div className="w-full aspect-video bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden relative mb-4 shadow-xl shadow-slate-200 dark:shadow-none group-hover:border-brand/40 transition-all">
            <iframe
              className="w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/live_stream?channel=UCIALMKvObZNtJ6AmdCLP7Lg&autoplay=1&mute=1&modestbranding=1&rel=0"
              title="Bloomberg Television Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase flex items-center">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse mr-2"></span>
              Live Broadcast
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
            Bloomberg Business LIVE
          </h3>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg dark:shadow-none flex flex-col">
          <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-4 mb-2">
            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Live News Feed</h4>
            <span className="text-xs font-mono text-brand flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping mr-1.5"></span>
              Auto-updating
            </span>
          </div>

          <div className="space-y-0 flex-grow">
            {reports.map((report) => (
              <a href={report.url} key={report.id} className="block group border-b border-slate-200 dark:border-slate-700 last:border-0 py-4 first:pt-4 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-brand">{report.category}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{report.date}</span>
                </div>
                <h5 className="text-base font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-tight">
                  {report.title}
                </h5>
              </a>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
