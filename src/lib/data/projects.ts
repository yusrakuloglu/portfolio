import { Project } from "@/types";

export const projects: Project[] = [
  // ── PROFESSIONAL ──────────────────────────────────────────
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
    tech: ["React Native", "Firebase", "Firestore"],
    description:
      "Cross-platform habit tracking app with real-time Firestore sync, push notifications, and smooth platform-specific animations for iOS and Android.",
    highlights: [
      "Firebase Auth & real-time Firestore sync",
      "Push notifications with Cloud Messaging",
      "Platform-specific UI following Material Design & iOS HIG",
      "Smooth animations with React Native Animated API",
    ],
    links: [],
  },
  {
    slug: "talk-and-write",
    title: "Talk & Write",
    category: "personal",
    type: "frontend",
    tech: ["Angular", "TypeScript", "HTML", "CSS"],
    description:
      "A blog and forum platform (StackByMe) built with Angular, featuring user authentication, a rich-text blog editor, and a Q&A forum with upvote/downvote functionality.",
    highlights: [
      "User authentication (login & registration)",
      "Q&A forum with upvote/downvote voting system",
      "Blog module with rich-text article editor (Angular Editor)",
      "Reactive forms and Angular Router with lazy-like routing",
      "REST API integration via HttpClient",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/Blog-Forum-Project-Angular",
        type: "github",
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
    slug: "todo-app",
    title: "TODO App",
    category: "personal",
    type: "frontend",
    tech: ["Angular", "TypeScript", "Angular Material"],
    description:
      "A task management app where users can create multiple to-do lists, add tasks with checklists to each list, and track completion by checking or unchecking items.",
    highlights: [
      "Multi-list management with create, delete, and search/filter",
      "Tasks with checklist items and completion tracking",
      "Angular Material dialogs and snackbar notifications",
      "LocalStorage persistence for state across sessions",
      "Reactive Forms with validation",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/ToDoApp-Project-Angular",
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
        label: "Live Site",
        url: "https://yusrakuloglu.vercel.app", // TODO: replace with real Vercel URL after deployment
        type: "live",
      },
      {
        label: "GitHub",
        url: "https://github.com/yusrakuloglu/portfolio", // TODO: replace with real repo URL
        type: "github",
      },
    ],
  },
];
