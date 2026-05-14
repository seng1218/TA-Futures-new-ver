'use client';

import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Entrance from './Entrance';

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    // Only play entrance on the root home page if not seen before
    const hasSeenEntrance = sessionStorage.getItem('hasSeenEntrance') === 'true';
    if (pathname === '/' && !hasSeenEntrance) {
      setIsLoaded(false);
    } else {
      setIsLoaded(true);
    }
  }, [pathname]);

  const handleComplete = useCallback(() => {
    setIsLoaded(true);
    sessionStorage.setItem('hasSeenEntrance', 'true');
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && pathname === '/' && (
          <Entrance key="global-entrance" onComplete={handleComplete} />
        )}
      </AnimatePresence>
      <div className={`flex flex-col min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
}
