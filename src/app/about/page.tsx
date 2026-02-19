"use client";

import { motion } from "framer-motion";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { Navbar } from "@/components/layout/Navbar";
import { SideMenu } from "@/components/layout/SideMenu";
import { AboutCard } from "@/components/ui/AboutCard";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { SkillsSection } from "@/components/ui/SkillsSection";
import { ABOUT_CARDS, EXPERIENCES } from "@/lib/constants";

export default function AboutPage() {
  const { isOpen, open, close } = useMenuToggle();

  const frontendExperiences = EXPERIENCES.filter((e) => e.type === "frontend");
  const mobileExperiences = EXPERIENCES.filter((e) => e.type === "mobile");

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar onMenuOpen={open} />
      <SideMenu isOpen={isOpen} onClose={close} />

      <main className="pb-10 px-6 md:px-16 lg:px-12">
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
            About
          </h1>
        </motion.header>

        {/* Cards layout — offset alternating left/right */}
        <section
          className="flex flex-col gap-8 mt-8"
          aria-label="About sections"
        >
          {ABOUT_CARDS.map((card, index) => {
            const experiences =
              card.id === 2
                ? frontendExperiences
                : card.id === 3
                  ? mobileExperiences
                  : undefined;

            return (
              <AboutCard
                key={card.id}
                card={card}
                index={index}
                experiences={experiences}
              />
            );
          })}
        </section>

        <div className="mt-8">
          <SkillsSection />
        </div>
      </main>

      <ScrollIndicator />
    </div>
  );
}
