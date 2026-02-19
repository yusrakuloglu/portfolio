'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants: Variants = {
  hidden: { x: -320 },
  visible: { x: 0 },
  exit: { x: -320 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.35,
      ease: 'easeOut' as const,
    },
  }),
};

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />

          {/* Panel */}
          <motion.nav
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            role="navigation"
            aria-label="Site navigation menu"
            className="fixed top-0 left-0 bottom-0 z-50 flex flex-col w-72 md:w-80"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRight: '1px solid var(--border)',
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:opacity-70"
                style={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Logo in menu */}
            <div className="px-8 pb-8">
              <span
                className="text-2xl font-light italic"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  color: 'var(--accent)',
                }}
              >
                Yüsra Kuloğlu
              </span>
            </div>

            {/* Nav Items */}
            <ul className="flex flex-col px-8 gap-2" role="list">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    role="listitem"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? 'page' : undefined}
                      className="group relative flex items-center py-3 text-lg font-light tracking-wide transition-colors duration-200"
                      style={{
                        color: isActive
                          ? 'var(--accent)'
                          : 'var(--text-primary)',
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: '1.3rem',
                      }}
                    >
                      {item.label}
                      {/* Hover underline */}
                      <span
                        className="absolute bottom-2 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer */}
            <div
              className="mt-auto px-8 py-6"
              style={{
                borderTop: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              <p className="text-xs tracking-widest uppercase">
                Frontend & Mobile Developer
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
