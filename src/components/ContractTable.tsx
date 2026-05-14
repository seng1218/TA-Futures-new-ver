'use client';

import { useState } from 'react';

const contractData = [
 { id: 1, name: 'Crude Palm Oil', symbol: 'FCPO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
 { id: 2, name: 'East Malaysia CPO', symbol: 'FEPO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '09:00-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
 { id: 3, name: 'Crude Palm Kernel Oil', symbol: 'FPKO', category: 'Commodity', margin: 'MYR 9,000', tickSize: 'MYR 25.00', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
 { id: 4, name: 'FTSE Bursa Malaysia KLCI', symbol: 'FKLI', category: 'Equity', margin: 'MYR 4,000', tickSize: '0.5 pt (MYR 25)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
 { id: 5, name: 'FBM Mid 70 Index', symbol: 'FM70', category: 'Equity', margin: 'MYR 6,500', tickSize: '5 pts (MYR 20)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
 { id: 6, name: 'Gold Futures', symbol: 'FGLD', category: 'Commodity', margin: 'MYR 16,000', tickSize: 'USD 0.10 (MYR 4)', hours: '09:00-12:30, 14:30-17:30, 21:00-02:30 (T+1)' },
 { id: 7, name: 'Soybean Oil Futures', symbol: 'FSOY', category: 'Commodity', margin: 'USD 2,500', tickSize: 'USD 0.25 (USD 6.25)', hours: '09:00-12:30, 13:30-18:00, 21:00-23:00 (T+1)' },
 { id: 8, name: 'Options on FCPO', symbol: 'OCPO', category: 'Options', margin: 'Risk-based', tickSize: 'MYR 12.50', hours: '10:30-12:30, 14:30-18:00, 21:00-23:00 (T+1)' },
 { id: 9, name: 'Options on FKLI', symbol: 'OKLI', category: 'Options', margin: 'Risk-based', tickSize: '0.1 pt (MYR 5.00)', hours: '08:45-12:45, 14:30-17:15, 21:00-02:30 (T+1)' },
];

const TABS = ['ALL', 'Commodity', 'Equity', 'Options'] as const;
type FilterType = typeof TABS[number];

export default function ContractTable() {
 const [searchTerm, setSearchTerm] = useState('');
 const [filter, setFilter] = useState<FilterType>('ALL');

 const filteredData = contractData.filter((contract) => {
 const matchesSearch =
 contract.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
 contract.symbol.toLowerCase().includes(searchTerm.toLowerCase());
 const matchesCategory = filter === 'ALL' || contract.category === filter;
 return matchesSearch && matchesCategory;
 });

 return (
 <div className="w-full">
 <div className="flex flex-col gap-4 mb-6">
 <input
 type="text"
 placeholder="Search contracts (e.g., FCPO, Gold)..."
 className="w-full bg-white/5 backdrop-blur-md border border-slate-300/20 dark:border-slate-600/20 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 />

 <div className="overflow-x-auto -mx-1 px-1 pb-1">
 <div className="flex bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/20 rounded-xl p-1 w-max min-w-full md:min-w-0 md:w-auto">
 {TABS.map((tab) => (
 <button
 key={tab}
 onClick={() => setFilter(tab)}
 className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
 filter === tab
 ? 'bg-brand text-white shadow-md'
 : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/10 dark:hover:bg-slate-700/30'
 }`}
 >
 {tab}
 </button>
 ))}
 </div>
 </div>
 </div>

 <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 md:hidden flex items-center gap-1">
 <span>←</span> Scroll table horizontally to see all columns <span>→</span>
 </p>

 <div className="bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/20 rounded-2xl overflow-hidden shadow-xl">
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse" style={{ minWidth: '700px' }}>
 <thead>
 <tr className="bg-gray-50/5 dark:bg-slate-800/20 border-b border-slate-200/20 dark:border-slate-700/20">
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Product</th>
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Symbol</th>
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Asset Class</th>
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Initial Margin</th>
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Tick Size</th>
 <th className="py-4 px-4 md:px-6 text-xs font-bold text-brand uppercase tracking-wider">Trading Hours</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-200/20 dark:divide-slate-700/20">
 {filteredData.length > 0 ? (
 filteredData.map((contract) => (
 <tr key={contract.id} className="hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors group">
 <td className="py-4 px-4 md:px-6 text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-brand transition-colors whitespace-nowrap">{contract.name}</td>
 <td className="py-4 px-4 md:px-6 text-sm font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">{contract.symbol}</td>
 <td className="py-4 px-4 md:px-6">
 <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
 {contract.category}
 </span>
 </td>
 <td className="py-4 px-4 md:px-6 text-sm font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap">{contract.margin}</td>
 <td className="py-4 px-4 md:px-6 text-sm font-mono text-slate-700 dark:text-slate-300 whitespace-nowrap">{contract.tickSize}</td>
 <td className="py-4 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-400 min-w-[200px]">{contract.hours}</td>
 </tr>
 ))
 ) : (
 <tr>
 <td colSpan={6} className="py-12 text-center text-slate-500 dark:text-slate-400">
 No contracts found matching your search.
 </td>
 </tr>
 )}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 );
}
