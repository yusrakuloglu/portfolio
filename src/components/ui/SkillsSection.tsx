"use client";

import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNpm,
  FaNodeJs,
  FaAndroid,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiFlutter,
  SiDart,
  SiRedux,
  SiFirebase,
  SiPostman,
  SiXcode,
  SiShadcnui,
} from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import {
  MdApi,
  MdSpeed,
  MdArchitecture,
  MdDevices,
  MdIntegrationInstructions,
} from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { SKILL_CATEGORIES } from "@/lib/constants";

const ICON_MAP: Record<string, IconType> = {
  react: FaReact,
  nextjs: SiNextdotjs,
  angular: SiAngular,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  mui: SiMui,
  shadcn: SiShadcnui,
  flutter: SiFlutter,
  "react-native": FaReact,
  dart: SiDart,
  redux: SiRedux,
  riverpod: BsPhone,
  "context-api": FaReact,
  rest: MdApi,
  dio: MdApi,
  axios: MdApi,
  firebase: SiFirebase,
  firestore: SiFirebase,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscCode,
  figma: FaFigma,
  postman: SiPostman,
  npm: FaNpm,
  nodejs: FaNodeJs,
  android: FaAndroid,
  xcode: SiXcode,
  responsive: MdDevices,
  performance: MdSpeed,
  architecture: MdArchitecture,
  crossplatform: MdDevices,
  cicd: MdIntegrationInstructions,
};

/* Slide in from right — matches the "even index" AboutCard animation */
const wrapperVariants: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const chipVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export const SkillsSection = () => {
  return (
    <motion.article
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full md:w-[70%]"
      style={{ marginLeft: "auto" }}
      aria-label="Skills and Technologies"
    >
      <div
        className="rounded-2xl p-8 md:p-10 flex flex-col gap-8"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 24px var(--shadow)",
        }}
      >
        {/* Title — same style as AboutCard */}
        <h2
          className="font-light"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.7rem",
            color: "var(--accent)",
            letterSpacing: "0.01em",
          }}
        >
          Skills &amp; Technologies
        </h2>

        {/* Categories — 2-column grid: Frontend|Mobile, State|Backend, Tools|Practices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col gap-3">
              {/* Category label */}
              <p
                className="text-xs tracking-widest uppercase font-light"
                style={{ color: category.glowColor, opacity: 0.85 }}
              >
                {category.name}
              </p>

              {/* Skill chips */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => {
                  const Icon = ICON_MAP[skill.iconKey];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={chipVariants}
                      whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
                      className="skill-card-animate flex items-center gap-2 rounded-xl px-3 py-2 cursor-default select-none"
                      style={
                        {
                          "--glow": category.glowColor + "40",
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                        } as React.CSSProperties
                      }
                    >
                      {Icon && (
                        <Icon
                          size={14}
                          style={{ color: category.glowColor, flexShrink: 0 }}
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className="font-light text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
