"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

export const ExperienceCard = ({
  experience,
  isOpen,
  onToggle,
}: ExperienceCardProps) => {
  const initial = experience.company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      id={experience.slug}
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 24px var(--shadow)",
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 md:p-7 text-left"
        aria-expanded={isOpen}
      >
        {/* Company initial avatar */}
        <div
          className="rounded-xl w-11 h-11 flex items-center justify-center shrink-0 text-sm font-semibold"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--bg-primary)",
            letterSpacing: "0.02em",
          }}
        >
          {initial}
        </div>

        {/* Company + role + period */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-sm font-normal"
              style={{ color: "var(--text-primary)" }}
            >
              {experience.company}
            </span>
            {experience.isCurrent && (
              <span
                className="flex items-center gap-1.5 text-xs font-light"
                style={{ color: "#34d399" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Current
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span
              className="text-xs font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.role}
            </span>
            <span style={{ color: "var(--border)" }}>·</span>
            <span
              className="text-xs font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              {experience.period}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown size={18} style={{ color: "var(--text-secondary)" }} />
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: "easeInOut" },
              opacity: { duration: 0.25, delay: 0.08 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 md:px-7 pb-7 flex flex-col gap-5"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {/* Description */}
              <p
                className="font-light text-sm leading-relaxed pt-5"
                style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
              >
                {experience.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-light tracking-wide"
                    style={{
                      border: "1px solid var(--accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <ul className="flex flex-col gap-2.5">
                {experience.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-light"
                    style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
                  >
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      ✦
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
