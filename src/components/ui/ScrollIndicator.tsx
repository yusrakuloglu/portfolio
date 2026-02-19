'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) {
      setIsVisible(false);
      return;
    }

    const progress = scrollTop / docHeight;
    setScrollProgress(progress);
    setIsVisible(progress < 0.95);
  }, []);

  useEffect(() => {
    // Check if page is scrollable at all
    const checkScrollable = () => {
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;
      if (!isScrollable) setIsVisible(false);
    };

    checkScrollable();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkScrollable, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
    };
  }, [handleScroll]);

  // SVG circle progress
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scroll-indicator"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 z-30 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          {/* Circle progress */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="-rotate-90"
          >
            {/* Track */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            {/* Progress */}
            <circle
              cx="20"
              cy="20"
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.1s ease' }}
            />
          </svg>

          {/* Bouncing arrow inside circle area — label below */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ color: 'var(--accent)' }}
            >
              <path
                d="M5 1v8M2 6l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
