"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const imageVariants: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const textVariants: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export const HeroSection = () => {
  return (
    <main
      className="flex flex-1 items-center justify-center min-h-[80vh] px-6 md:px-16 lg:px-24"
      aria-label="Hero section"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-28 w-full max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="shrink-0"
        >
          <div
            className="relative w-52 h-52 md:w-70 md:h-70 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              border: "2px solid var(--border)",
              boxShadow: "0 8px 40px var(--shadow)",
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Yüsra Kuloğlu — Frontend & Mobile Developer"
              fill
              priority
              loading="eager"
              className="object-cover"
              sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 text-center md:text-left"
        >
          <h1
            className="font-light leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            Hi, My Name is{" "}
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Yüsra.
            </span>
          </h1>

          <p
            className="font-light tracking-wide"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-secondary)",
              letterSpacing: "0.05em",
            }}
          >
            I&apos;m a Frontend &amp; Mobile Developer
          </p>

          <div className="mt-4 flex items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-lg"
              style={{
                color: "var(--bg-primary)",
                backgroundColor: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent)";
              }}
              aria-label="Download resume"
            >
              <Download size={14} strokeWidth={1.5} />
              Resume
            </a>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ color: "var(--accent)" }}
              aria-label="Read more about Yüsra Kuloğlu"
            >
              more about me
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
