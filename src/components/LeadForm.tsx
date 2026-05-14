'use client';

import { useState } from 'react';
import { submitLead } from '@/app/actions/submitLead';
import { CheckCircle2, FileText, PhoneCall } from 'lucide-react';

export default function LeadForm() {
 const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
 const [errorMsg, setErrorMsg] = useState<string | null>(null);

 async function clientAction(formData: FormData) {
 setStatus('loading');
 setErrorMsg(null);
 const result = await submitLead(formData);

 if (result.success) {
 setStatus('success');
 } else {
 setStatus('idle');
 setErrorMsg(result?.error || "Something went wrong. Please try again.");
 }
 }

 if (status === 'success') {
 return (
 <div className="p-10 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl text-center shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-50 dark:bg-emerald-900/20 blur-3xl rounded-full opacity-60"></div>

 <div className="relative z-10 flex flex-col items-center">
 <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 shadow-inner">
 <CheckCircle2 size={40} strokeWidth={2.5} />
 </div>

 <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">Application Received!</h3>
 <p className="text-slate-600 dark:text-slate-400 mb-8 max-sm mx-auto leading-relaxed">
 Your request has been sent to our team. Here is what will happen next:
 </p>

 <div className="w-full text-left space-y-4 mb-8 bg-gray-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
 <div className="flex items-start">
 <span className="text-brand mr-3 mt-0.5"><PhoneCall size={18} /></span>
 <p className="text-sm text-slate-700 dark:text-slate-300">A licensed dealer will contact you ASAP.</p>
 </div>
 <div className="flex items-start">
 <span className="text-brand mr-3 mt-0.5"><FileText size={18} /></span>
 <p className="text-sm text-slate-700 dark:text-slate-300">Get your NRIC or Passport ready. You will also need your last 3 months of bank statements.</p>
 </div>
 </div>

 <button
 onClick={() => setStatus('idle')}
 className="mt-6 text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors uppercase tracking-widest"
 >
 Submit Another Request
 </button>
 </div>
 </div>
 );
 }

 return (
 <form action={clientAction} className="space-y-5 bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Open an Account</h3>

 <input type="text" name="fullName" placeholder="Full Name (as per ID)" required
 className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" />

 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
 <input type="email" name="email" placeholder="Email Address" required
 className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" />
 <input type="tel" name="phone" placeholder="Mobile Number" required
 className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" />
 </div>

 <select name="interest" required className="w-full bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all appearance-none cursor-pointer">
 <option value="FCPO">Primary Interest: FCPO (Crude Palm Oil)</option>
 <option value="FEPO">Primary Interest: FEPO (East Malaysia CPO)</option>
 <option value="FPKO">Primary Interest: FPKO (Palm Kernel Oil)</option>
 <option value="FKLI">Primary Interest: FKLI (KLCI Futures)</option>
 <option value="FM70">Primary Interest: FM70 (FBM Mid 70 Index)</option>
 <option value="FGLD">Primary Interest: FGLD (Gold Futures)</option>
 <option value="FSOY">Primary Interest: FSOY (Soybean Oil Futures)</option>
 <option value="Options">Primary Interest: Options (OCPO / OKLI)</option>
 <option value="General">General Inquiry</option>
 </select>

 {errorMsg && (
 <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-red-700 dark:text-red-400 font-medium">
 {errorMsg}
 </div>
 )}

 <button type="submit" disabled={status === 'loading'}
 className="w-full bg-brand hover:bg-brand-light disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 dark:disabled:text-slate-600 text-white py-4 rounded-xl font-bold text-lg transition-all mt-4 shadow-lg shadow-brand/20">
 {status === 'loading' ? 'Processing Request...' : 'Submit Request'}
 </button>
 </form>
 );
}
