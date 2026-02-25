"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_ITEMS } from "@/lib/constants";

interface NavbarProps {
  onMenuOpen: () => void;
}

export const Navbar = ({ onMenuOpen }: NavbarProps) => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const logoSrc = "/images/logo-dark.png";

  return (
    <header
      className="flex items-center justify-between px-6 py-6 md:px-14"
      style={{ background: "transparent" }}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Go to home page"
        className="shrink-0 transition-opacity hover:opacity-70"
      >
        <div style={{ position: "relative", height: "80px", width: "200px" }}>
          <Image
            src={logoSrc}
            alt="Yüsra Kuloğlu"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </Link>

      {/* Desktop nav items */}
      <nav
        className="hidden md:flex items-center gap-8"
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="group relative text-sm tracking-widest uppercase transition-colors duration-200"
              style={{
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </nav>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button
          onClick={onMenuOpen}
          aria-label="Open navigation menu"
          aria-expanded={false}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:opacity-70"
          style={{
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          }}
        >
          <Menu size={18} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};
