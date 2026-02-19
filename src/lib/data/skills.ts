import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    glowColor: "#3B82F6",
    skills: [
      { name: "React.js", iconKey: "react" },
      { name: "Next.js", iconKey: "nextjs" },
      { name: "Angular", iconKey: "angular" },
      { name: "TypeScript", iconKey: "typescript" },
      { name: "JavaScript", iconKey: "javascript" },
      { name: "HTML5", iconKey: "html5" },
      { name: "CSS3", iconKey: "css3" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Material UI", iconKey: "mui" },
      { name: "ShadCN", iconKey: "shadcn" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    glowColor: "#10B981",
    skills: [
      { name: "Flutter", iconKey: "flutter" },
      { name: "React Native", iconKey: "react-native" },
      { name: "Dart", iconKey: "dart" },
    ],
  },
  {
    id: "state",
    name: "State Management",
    glowColor: "#8B5CF6",
    skills: [
      { name: "Redux", iconKey: "redux" },
      { name: "Riverpod", iconKey: "riverpod" },
      { name: "Context API", iconKey: "context-api" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    glowColor: "#F59E0B",
    skills: [
      { name: "RESTful APIs", iconKey: "rest" },
      { name: "Dio", iconKey: "dio" },
      { name: "Axios", iconKey: "axios" },
      { name: "Firebase", iconKey: "firebase" },
      { name: "Firestore", iconKey: "firestore" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    glowColor: "#6B7280",
    skills: [
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
      { name: "VS Code", iconKey: "vscode" },
      { name: "Figma", iconKey: "figma" },
      { name: "Postman", iconKey: "postman" },
      { name: "npm", iconKey: "npm" },
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Android Studio", iconKey: "android" },
      { name: "Xcode", iconKey: "xcode" },
    ],
  },
  {
    id: "practices",
    name: "Development Practices",
    glowColor: "#EC4899",
    skills: [
      { name: "Responsive Design", iconKey: "responsive" },
      { name: "Performance Optimization", iconKey: "performance" },
      { name: "Clean Architecture", iconKey: "architecture" },
      { name: "Cross-Platform Dev", iconKey: "crossplatform" },
      { name: "CI/CD Workflows", iconKey: "cicd" },
    ],
  },
];
