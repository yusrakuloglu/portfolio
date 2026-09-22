import { Project } from "@/types";

export const projects: Project[] = [
  // ── PROFESSIONAL ──────────────────────────────────────────
  {
    slug: "cura",
    title: "Cura",
    category: "professional",
    type: "frontend",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Recharts", "NextAuth.js"],
    description:
      "Frontend for a RAG-based bilingual medical chatbot platform built for breast cancer patient education and clinical decision support, accepted by TÜBİTAK 2209-A.",
    highlights: [
      "Developed dual-mode interfaces (patient/health professional) with role-based theming and JWT-authenticated routing",
      "Implemented real-time streaming chat using the Fetch + ReadableStream API",
      "Built an interactive analytics dashboard with Recharts featuring resilient JSON schema validation for LLM-generated visualizations",
      "Designed an isolated client-side data persistence layer separating patient and clinician conversation histories",
    ],
    links: [
      {
        label: "Website",
        url: "https://cura-medi.com",
        type: "live",
      },
    ],
  },
  {
    slug: "is-anahtari",
    title: "İş Anahtarı",
    category: "professional",
    company: "İş Anahtarı",
    type: "mobile",
    tech: ["Flutter", "Dart", "Riverpod", "Dio", "RESTful API"],
    description:
      "End-to-end job search and recruitment platform. Features advanced filtering, application tracking, real-time updates, and user profile management for a growing user base on iOS & Android.",
    highlights: [
      "Cross-platform iOS & Android with Flutter",
      "Riverpod state management & clean architecture",
      "Dio HTTP client with interceptors, retry logic & token refresh",
      "Performance-optimized with lazy loading & image caching",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/tr/app/i-%C5%9F-anahtar%C4%B1/id6474029253",
        type: "appstore",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.isanahtari",
        type: "playstore",
      },
    ],
  },

  // ── PERSONAL ──────────────────────────────────────────────
  {
    slug: "mindtrack",
    title: "MindTrack — Habit Tracker",
    category: "professional",
    type: "mobile",
    tech: ["React Native", "Expo", "Firebase", "Firestore", "RevenueCat", "Cloud Functions"],
    description:
      "Cross-platform habit-tracking app with Firebase Authentication and real-time Firestore sync. Features RevenueCat-powered iOS/Android subscriptions, Cloud Functions for transactional emails, custom notification engine, and full i18n support (TR/EN/ES).",
    highlights: [
      "Firebase Auth & real-time Firestore data sync via custom service-layer listeners",
      "RevenueCat integration for iOS/Android in-app subscriptions with entitlement-gated premium features",
      "Firebase Cloud Functions for transactional email delivery (verification, password reset)",
      "Custom notification engine with flexible reminder-time parsing via expo-notifications",
      "Full internationalization support (Turkish, English, Spanish)",
    ],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/tr/app/mindtrack-focus-habits/id6800670055?l=tr",
        type: "appstore",
      },
    ],
  },
  {
    slug: "trendynow",
    title: "TrendyNow — E-commerce",
    category: "personal",
    type: "frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Modern e-commerce frontend with responsive CSS Grid/Flexbox layouts and dynamic content rendering.",
    highlights: [
      "CSS Grid & Flexbox responsive layout",
      "Dynamic product rendering with vanilla JS",
      "Mobile-first design approach",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/Basic-E-commerce-Project-Javascript",
        type: "github",
      },
    ],
  },
  {
    slug: "neapptin",
    title: "Neapptin",
    category: "personal",
    type: "frontend",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description:
      "A project and team management dashboard where managers can track tasks by status, manage employees, view activity charts, and navigate upcoming tasks via an interactive calendar.",
    highlights: [
      "Kanban-style task board with status columns and drag-based workflow",
      "Employee directory with detail modal and task statistics",
      "Dashboard with activity chart, running task tracker, and calendar",
      "Task detail page with assignee, priority, duration, and step tracking",
      "shadcn/ui component library with responsive sidebar layout",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/msy-project",
        type: "github",
      },
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    category: "personal",
    type: "frontend",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "My personal portfolio website built with Next.js and TypeScript. Features smooth Framer Motion animations, dark/light mode, and a clean responsive design.",
    highlights: [
      "Zigzag animated About cards",
      "Drawer-style Experience cards",
      "Dark/light theme toggle",
      "Animated side menu",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/portfolio", // TODO: replace with real repo URL
        type: "github",
      },
    ],
  },
];
