'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Entrance({ onComplete }: { onComplete: () => void }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let completionTimeout: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          completionTimeout = setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 15);

    return () => {
      clearInterval(timer);
      clearTimeout(completionTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white"
        >
          {counter}%
        </motion.div>
      </div>
      
      <div className="mt-4 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.5em] text-brand"
        >
          Initializing Terminal
        </motion.p>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-10 right-10 h-[1px] bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${counter}%` }}
          className="h-full bg-brand"
        />
      </div>
    </motion.div>
  );
}
