"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { AboutCard as AboutCardType, Experience } from "@/types";

interface AboutCardProps {
  card: AboutCardType;
  index: number;
  experiences?: Experience[];
}

export const AboutCard = ({ card, index, experiences }: AboutCardProps) => {
  const isEven = index % 2 === 1;

  const cardVariants: Variants = {
    hidden: { x: isEven ? 80 : -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full md:w-[70%]"
      style={{ marginLeft: isEven ? "auto" : "0" }}
      aria-label={card.title}
    >
      <div
        className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 24px var(--shadow)",
        }}
      >
        {/* Title */}
        <h2
          className="font-light"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.7rem",
            color: "var(--accent)",
            letterSpacing: "0.01em",
          }}
        >
          {card.title}
        </h2>

        {/* Intro paragraph */}
        <p
          className="font-light leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.95rem",
            lineHeight: "1.8",
          }}
        >
          {card.content}
        </p>

        {/* Bullet items */}
        {card.items && card.items.length > 0 && (
          <ul className="flex flex-col gap-2">
            {card.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-light"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                }}
              >
                <span
                  className="mt-2 shrink-0 w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack tags */}
        {card.techStack && card.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {card.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs tracking-wide font-light"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "transparent",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Experience preview */}
        {experiences && experiences.length > 0 && (
          <div
            className="flex flex-col gap-1 pt-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="text-xs uppercase tracking-widest font-light mb-2"
              style={{ color: "var(--accent)", opacity: 0.7 }}
            >
              Professional Experience
            </p>

            {experiences.map((exp) => (
              <Link href={`/experience#${exp.slug}`} key={exp.slug}>
                <div className="group flex items-start justify-between gap-3 py-3 px-2 rounded-lg hover:pl-4 transition-all duration-200">
                  <div className="flex flex-col gap-1 min-w-0">
                    {/* Company + role */}
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span
                        className="text-sm font-normal shrink-0"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.company}
                      </span>
                      <span
                        className="text-xs font-light"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.role}
                      </span>
                    </div>
                    {/* Period */}
                    <span
                      className="text-xs font-light"
                      style={{ color: "var(--text-secondary)", opacity: 0.6 }}
                    >
                      {exp.period}
                    </span>
                    {/* Short description — first sentence only */}
                    <p
                      className="text-xs font-light leading-relaxed mt-0.5"
                      style={{
                        color: "var(--text-secondary)",
                        opacity: 0.75,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {exp.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 mt-1 group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: "var(--accent)" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
