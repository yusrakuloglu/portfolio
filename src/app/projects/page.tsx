"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { Navbar } from "@/components/layout/Navbar";
import { SideMenu } from "@/components/layout/SideMenu";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { projects } from "@/lib/data/projects";

type Filter = "all" | "frontend" | "mobile";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Mobile", value: "mobile" },
];

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
    <span
      className="text-xs uppercase tracking-widest font-light shrink-0"
      style={{ color: "var(--text-secondary)" }}
    >
      {label}
    </span>
    <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
  </div>
);

export default function ProjectsPage() {
  const { isOpen, open, close } = useMenuToggle();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const professional = filtered.filter((p) => p.category === "professional");
  const personal = filtered.filter((p) => p.category === "personal");

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar onMenuOpen={open} />
      <SideMenu isOpen={isOpen} onClose={close} />

      <main className="pb-10 px-6 md:px-16 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 "
        >
          <h1
            className="font-light tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--text-primary)",
            }}
          >
            Projects
          </h1>
        </motion.header>

        {/* Filter tabs */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex gap-2 mb-12"
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

        {/* Professional Projects */}
        {professional.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-14"
          >
            <SectionDivider label="Professional Projects" />
            <div className="grid grid-cols-1 gap-6">
              {professional.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Personal Projects */}
        {personal.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <SectionDivider label="Personal Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personal.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex items-center justify-center min-h-48">
            <p
              className="text-sm font-light tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              No projects match this filter.
            </p>
          </div>
        )}
      </main>

      <ScrollIndicator />
    </div>
  );
}
