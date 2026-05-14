'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
 const { setTheme, resolvedTheme } = useTheme();
 const [mounted, setMounted] = React.useState(false);

 React.useEffect(() => {
 // eslint-disable-next-line react-hooks/set-state-in-effect
 setMounted(true);
 }, []);

 if (!mounted) {
 return <div className="w-10 h-10" aria-hidden="true" />;
 }

 return (
 <button
 onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
 className="relative inline-flex items-center justify-center p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-700"
 aria-label="Toggle dark mode"
 >
 <Sun className="h-5 w-5 dark:hidden" />
 <Moon className="h-5 w-5 hidden dark:block" />
 </button>
 );
}
