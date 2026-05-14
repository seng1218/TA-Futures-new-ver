export default function SpreadTable() {
 const headers = ['2', '3', '4', '5', '6 - 7', '8 - 9', '10 - 15', '16 - 24'];

 const rows = [
 { label: '2', cells: [null, null, null, null, null, null, null, null] },
 { label: '3', cells: ['600', null, null, null, null, null, null, null] },
 { label: '4', cells: ['1,200', '500', null, null, null, null, null, null] },
 { label: '5', cells: ['1,500', '1,000', '700', null, null, null, null, null] },
 { label: '6 - 7', cells: ['1,800', '1,600', '1,500', '1,000', '600', null, null, null] },
 { label: '8 - 9', cells: ['2,500', '2,200', '2,000', '1,600', '1,200', '600', null, null] },
 { label: '10 - 15', cells: ['4,300', '4,200', '3,700', '3,200', '3,000', '2,500', '2,400', null] },
 { label: '16 - 24', cells: ['4,400', '4,300', '3,800', '3,400', '3,100', '2,600', '2,500', '1,400'] },
 ];

 return (
 <div className="w-full mt-16 pb-20">
 <div className="mb-6">
 <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">CPO Intracommodity Spread Charge</h2>
 <p className="text-slate-600 dark:text-slate-400 mt-1">Matrix for calculating margin spread charges across different contract months.</p>
 </div>

 <p className="text-xs text-slate-400 dark:text-slate-500 mb-3 md:hidden flex items-center gap-1">
 <span>←</span> Scroll horizontally to view full matrix <span>→</span>
 </p>

 <div className="bg-white/5 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/20 rounded-2xl overflow-hidden shadow-xl">
 <div className="overflow-x-auto">
 <table className="w-full text-center border-collapse" style={{ minWidth: '620px' }}>
 <thead>
 <tr className="bg-gray-50/5 dark:bg-slate-800/20 border-b border-slate-200/20 dark:border-slate-700/20">
 <th className="py-4 px-4 text-xs font-bold text-brand uppercase tracking-wider text-left sticky left-0 bg-white/5 backdrop-blur-md whitespace-nowrap z-10">
 Contract Month
 </th>
 {headers.map((h, i) => (
 <th key={i} className="py-4 px-3 text-xs font-bold text-brand uppercase tracking-wider whitespace-nowrap">
 {h}
 </th>
 ))}
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-200/20 dark:divide-slate-700/20">
 {rows.map((row, rIdx) => (
 <tr key={rIdx} className="hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors group">
 <td className="py-4 px-4 text-sm font-bold text-slate-900 dark:text-slate-100 text-left group-hover:text-brand transition-colors sticky left-0 bg-white/5 backdrop-blur-md group-hover:bg-white/10 dark:group-hover:bg-slate-800/60 whitespace-nowrap z-10">
 {row.label}
 </td>
 {row.cells.map((cell, cIdx) => (
 <td key={cIdx} className={`py-4 px-3 text-sm font-medium whitespace-nowrap ${cell ? 'text-slate-700 dark:text-slate-300' : 'bg-white/5 dark:bg-slate-800/20 text-slate-300 dark:text-slate-600'}`}>
 {cell ? cell : '-'}
 </td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 );
}
