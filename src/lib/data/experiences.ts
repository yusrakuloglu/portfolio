import { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    slug: "is-anahtari-mobile",
    company: "İş Anahtarı",
    role: "Mobile Developer",
    type: "mobile",
    period: "December 2025 – Present",
    isCurrent: true,
    description:
      "Developed a cross-platform job search and recruitment platform using Flutter and Dart with a growing user base. Implemented complex API integration with token refresh, retry logic, and centralized error handling via Dio.",
    achievements: [
      "Integrated RESTful APIs supporting authentication, data sync, and real-time updates",
      "Applied Riverpod for scalable state management with dependency injection",
      "Improved performance via lazy loading, image caching, and efficient list rendering on iOS & Android",
      "Aligned API contracts and data models closely with backend team",
    ],
    tech: ["Flutter", "Dart", "Riverpod", "Dio", "RESTful API", "iOS", "Android"],
  },
  {
    slug: "deploiers-frontend",
    company: "Deploiers",
    role: "Frontend Developer",
    type: "frontend",
    period: "May 2025 – December 2025",
    isCurrent: false,
    description:
      "Built and maintained production Next.js applications with SSR and API routes. Created reusable TypeScript component libraries and pixel-perfect responsive layouts while collaborating in Agile CI/CD workflows.",
    achievements: [
      "Reduced code duplication by 40% through reusable React component libraries",
      "Improved SEO and performance with Next.js SSR and API routes",
      "Designed pixel-perfect layouts using Tailwind CSS, CSS Grid, and Flexbox",
      "Integrated RESTful APIs with Axios and optimized data fetching across the app",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios", "Figma", "CI/CD"],
  },
  {
    slug: "deploiers-mobile",
    company: "Deploiers",
    role: "Mobile Developer",
    type: "mobile",
    period: "May 2025 – Present",
    isCurrent: true,
    description:
      "Developed cross-platform iOS and Android applications using React Native. Built reusable components, integrated Firebase services, and followed Material Design and iOS HIG standards.",
    achievements: [
      "Integrated Firebase authentication, analytics, and push notifications",
      "Supported platform-specific features via native modules on iOS and Android",
      "Optimized performance using React Native profiling tools",
      "Participated in code reviews and promoted best practices within the team",
    ],
    tech: ["React Native", "Firebase", "JavaScript", "TypeScript", "iOS", "Android"],
  },
  {
    slug: "mfatech-frontend",
    company: "MFATECH",
    role: "Frontend Developer",
    type: "frontend",
    period: "November 2024 – February 2025",
    isCurrent: false,
    description:
      "Developed SPAs using React and TypeScript following clean architecture principles. Implemented complex state management with Redux Toolkit and built mobile-first responsive designs.",
    achievements: [
      "Implemented Redux and Redux Toolkit for complex state management",
      "Integrated RESTful APIs with proper error handling and validation",
      "Built mobile-first, cross-browser compatible responsive designs",
      "Participated in Agile sprint planning and retrospectives",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "RESTful API", "Agile"],
  },
];
