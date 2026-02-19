"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Linkedin, Github, Twitter, Send, Loader2, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMenuToggle } from "@/hooks/useMenuToggle";
import { useContactForm } from "@/hooks/useContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { SideMenu } from "@/components/layout/SideMenu";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { SOCIAL_LINKS, type SocialIconName } from "@/lib/data/contact";

/* ── Icon map ────────────────────────────────────────────────── */
const ICON_MAP: Record<SocialIconName, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

/* ── Framer Motion variants ──────────────────────────────────── */

const socialContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const socialItemVariants: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const formVariants: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.25 },
  },
};

const errorVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.15 } },
};

const successVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ── FormField helper ────────────────────────────────────────── */
interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ id, label, error, children }: FieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-xs uppercase tracking-widest font-light"
      style={{ color: "var(--text-secondary)" }}
    >
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          key={error}
          variants={errorVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          id={`${id}-error`}
          role="alert"
          className="text-xs font-light"
          style={{ color: "#f87171" }}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

/* ── Page ────────────────────────────────────────────────────── */
export default function ContactPage() {
  const { isOpen, open, close } = useMenuToggle();
  const { fields, errors, status, handleChange, handleSubmit } =
    useContactForm();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle = (id: string): React.CSSProperties => ({
    backgroundColor:
      focusedField === id
        ? "color-mix(in srgb, var(--accent) 5%, transparent)"
        : "transparent",
    border: `1px solid ${focusedField === id ? "var(--accent)" : "var(--border)"}`,
    borderRadius: "0.75rem",
    padding: "0.65rem 1rem",
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease, background-color 0.2s ease",
    width: "100%",
  });

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar onMenuOpen={open} />
      <SideMenu isOpen={isOpen} onClose={close} />

      <main className="pb-10 px-6 md:px-16 lg:px-12">
        {/* Page title */}
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
            Contact
          </h1>
        </motion.header>

        {/* Two-column grid */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-12 items-center">
          {/* ── Left: Social links ── */}
          <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[40%] flex flex-col items-center gap-6"
          >
            {/* Heading */}
            <motion.div
              variants={socialItemVariants}
              className="text-center flex flex-col gap-1"
            >
              <p
                className="font-light"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2rem",
                  color: "var(--text-primary)",
                  letterSpacing: "0.01em",
                }}
              >
                You can find me on
              </p>
              <p
                className="text-xs font-light tracking-widest uppercase"
                style={{ color: "var(--text-secondary)", opacity: 0.6 }}
              >
                Let&apos;s connect
              </p>
            </motion.div>

            {/* Icons row */}
            <div className="flex flex-row gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.iconName];
                return (
                  <motion.a
                    key={link.id}
                    variants={socialItemVariants}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.18 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor =
                        "color-mix(in srgb, var(--accent) 15%, var(--bg-secondary))";
                      el.style.borderColor =
                        "color-mix(in srgb, var(--accent) 40%, var(--border))";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = "var(--bg-secondary)";
                      el.style.borderColor = "var(--border)";
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: "var(--text-secondary)" }}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[50%]"
          >
            <div
              className="rounded-2xl p-8 md:p-8"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 24px var(--shadow)",
              }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-5 py-10 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      <Check size={28} style={{ color: "var(--bg-primary)" }} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="font-light"
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.6rem",
                          color: "var(--text-primary)",
                        }}
                      >
                        Message sent!
                      </h3>
                      <p
                        className="text-sm font-light"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        I&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    {/* Name */}
                    <FormField id="name" label="Name" error={errors.name}>
                      <input
                        id="name"
                        type="text"
                        value={fields.name}
                        onChange={handleChange("name")}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your name"
                        autoComplete="name"
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        aria-invalid={!!errors.name}
                        style={inputStyle("name")}
                      />
                    </FormField>

                    {/* Email */}
                    <FormField id="email" label="Email" error={errors.email}>
                      <input
                        id="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange("email")}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        autoComplete="email"
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        aria-invalid={!!errors.email}
                        style={inputStyle("email")}
                      />
                    </FormField>

                    {/* Message */}
                    <FormField
                      id="message"
                      label="Message"
                      error={errors.message}
                    >
                      <textarea
                        id="message"
                        rows={5}
                        value={fields.message}
                        onChange={handleChange("message")}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="What's on your mind?"
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        aria-invalid={!!errors.message}
                        style={{ ...inputStyle("message"), resize: "none" }}
                      />
                    </FormField>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-light tracking-wide transition-all duration-200 disabled:opacity-60"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--bg-primary)",
                        border: "none",
                        cursor:
                          status === "submitting" ? "not-allowed" : "pointer",
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "submitting")
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.backgroundColor = "var(--accent-hover)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "var(--accent)";
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2
                            size={15}
                            className="animate-spin"
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send
                            size={15}
                            className="group-hover:translate-x-0.5 transition-transform duration-200"
                            aria-hidden="true"
                          />
                          Send Message
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p
                        role="alert"
                        className="text-xs font-light text-center"
                        style={{ color: "#f87171" }}
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      <ScrollIndicator />
    </div>
  );
}
