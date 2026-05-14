'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/markets', label: 'Markets' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/academy', label: 'Academy' },
  { href: '/about-us', label: 'About Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[70] w-full border-b border-slate-200/10 dark:border-slate-800/10 bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.png" alt="TA Futures Logo" width={180} height={45} className="h-12 w-auto object-contain dark:hidden" priority />
              <Image src="/logo-dark.png" alt="TA Futures Logo Dark" width={180} height={45} className="h-12 w-auto object-contain hidden dark:block" priority />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="group relative flex h-10 w-10 flex-col items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 transition-all hover:bg-brand/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className={`h-[2px] w-5 bg-slate-900 dark:bg-white transition-all ${isMenuOpen ? 'translate-y-[2px] rotate-45' : '-translate-y-1'}`} />
              <div className={`h-[2px] w-5 bg-slate-900 dark:bg-white transition-all ${isMenuOpen ? '-translate-y-[2px] -rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-[600px] bg-white dark:bg-slate-950 px-6 py-24 md:px-20 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-grow flex flex-col justify-center">
                <nav className="flex flex-col space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center justify-between text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white hover:text-brand transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-10 w-10 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-200 dark:border-slate-800 pt-10"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Inquiries</p>
                  <a href="mailto:tafdealing@ta.com.my" className="text-xl font-bold hover:text-brand">tafdealing@ta.com.my</a>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="https://estatement.taonline.com.my/" target="_blank" className="bg-brand text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-brand/20">
                    Statement Log In
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
