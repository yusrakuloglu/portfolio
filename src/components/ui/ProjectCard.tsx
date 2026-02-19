"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* Inline Apple SVG — Lucide doesn't have one */
const AppleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isProfessional = project.category === "professional";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-2xl p-7 md:p-8 flex flex-col gap-5"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: isProfessional
          ? "1px solid color-mix(in srgb, var(--accent) 30%, var(--border))"
          : "1px solid var(--border)",
        boxShadow: "0 4px 24px var(--shadow)",
      }}
    >
      {/* Top row: badges */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          {isProfessional && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-light tracking-wide"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--accent) 15%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                color: "var(--accent)",
              }}
            >
              Professional
            </span>
          )}
          {project.company && isProfessional && (
            <span
              className="text-xs font-light"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.company}
            </span>
          )}
        </div>
        {/* Type badge */}
        <span
          className="text-xs px-2.5 py-0.5 rounded-full font-light tracking-wide"
          style={{
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          {project.type === "mobile" ? "Mobile" : "Frontend"}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-light"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.4rem",
          color: "var(--text-primary)",
          letterSpacing: "0.01em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="font-light text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
      >
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
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

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {project.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-xs font-light"
            style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}
          >
            <span
              className="shrink-0 mt-0.5"
              style={{ color: "var(--accent)" }}
            >
              ✦
            </span>
            {h}
          </li>
        ))}
      </ul>

      {/* Link buttons */}
      <div className="flex flex-wrap gap-3 pt-1">
        {project.links.map((link) => {
          if (link.type === "appstore" || link.type === "playstore") {
            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-light rounded-lg px-4 py-2 transition-all duration-200"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 10%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                  color: "var(--accent)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 20%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "color-mix(in srgb, var(--accent) 10%, transparent)";
                }}
              >
                <AppleIcon />
                {link.label}
              </a>
            );
          }

          if (link.type === "github") {
            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-light rounded-lg px-4 py-2 transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor =
                    "color-mix(in srgb, var(--accent) 50%, transparent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                <Github size={14} />
                {link.label}
              </a>
            );
          }

          return null;
        })}
      </div>
    </motion.div>
  );
};
