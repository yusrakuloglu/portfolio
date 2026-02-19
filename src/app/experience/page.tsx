"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { Navbar } from "@/components/layout/Navbar";
import { SideMenu } from "@/components/layout/SideMenu";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { EXPERIENCES } from "@/lib/constants";

type Filter = "all" | "frontend" | "mobile";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Mobile", value: "mobile" },
];

export default function ExperiencePage() {
  const { isOpen, open, close } = useMenuToggle();
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  /* Auto-expand + scroll to card when navigated via #slug */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setOpenCard(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, []);

  const filtered =
    filter === "all"
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.type === filter);

  const handleToggle = (slug: string) => {
    setOpenCard((prev) => (prev === slug ? null : slug));
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar onMenuOpen={open} />
      <SideMenu isOpen={isOpen} onClose={close} />

      <main className="pb-10 px-6 md:px-16 lg:px-12">
        {/* Page header */}
        <motion.header
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h1
            className="font-light tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-primary)",
            }}
          >
            Experience
          </h1>
        </motion.header>

        {/* Filter tabs */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex gap-2 mb-10"
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-light transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                backgroundColor:
                  filter === value ? "var(--accent)" : "transparent",
                color:
                  filter === value
                    ? "var(--bg-primary)"
                    : "var(--text-secondary)",
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}
          />

          <div className="flex flex-col gap-5 pl-10">
            {filtered.map((exp, i) => (
              <motion.div
                key={exp.slug}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute w-3 h-3 rounded-full border-2 top-6"
                  style={{
                    left: "-1.6rem",
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--accent)",
                  }}
                />

                <ExperienceCard
                  experience={exp}
                  isOpen={openCard === exp.slug}
                  onToggle={() => handleToggle(exp.slug)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <ScrollIndicator />
    </div>
  );
}
