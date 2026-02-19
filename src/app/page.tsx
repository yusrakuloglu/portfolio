"use client";

import { useMenuToggle } from "@/hooks/useMenuToggle";
import { Navbar } from "@/components/layout/Navbar";
import { SideMenu } from "@/components/layout/SideMenu";
import { HeroSection } from "@/components/ui/HeroSection";

export default function HomePage() {
  const { isOpen, open, close } = useMenuToggle();

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar onMenuOpen={open} />
      <SideMenu isOpen={isOpen} onClose={close} />
      <HeroSection />
    </div>
  );
}
