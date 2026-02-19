"use client";

import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIAL_LINKS, type SocialIconName } from "@/lib/data/contact";

const ICON_MAP: Record<SocialIconName, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full px-6 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <p
        className="text-s font-light tracking-wide"
        style={{ color: "var(--text-secondary)" }}
      >
        © {year} Yüsra Kuloğlu
      </p>

      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((link) => {
          const Icon = ICON_MAP[link.iconName];
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--accent)";
                el.style.borderColor =
                  "color-mix(in srgb, var(--accent) 40%, var(--border))";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border)";
              }}
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
