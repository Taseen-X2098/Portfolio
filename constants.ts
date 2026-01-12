
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "IBA Logic Automation",
    subtitle: "Custom Assessment Engine",
    context: "Developed a logic layer for complex high-stakes examinations to handle multi-variate assessment criteria that standard tools could not accommodate.",
    win: "Rapidly deployed a robust Google Apps Script solution, architecting a custom algorithm to automate scoring and result compilation for specialized logic exams.",
    links: [
      { label: "View Source", url: "https://github.com/Taseen-X2098/iba-exam-automation" }
    ],
    tags: ["Google Apps Script", "Automation", "Logic Architecture"]
  },
  {
    id: "02",
    title: "Quizzy & Chatty Systems",
    subtitle: "Full-Stack Infrastructure",
    context: "Created a comprehensive ecosystem for real-time communication and digital examination delivery across web and mobile platforms.",
    win: "Engineered a distributed system using Laravel/Lumen for high-performance API services, paired with Vue.js and Ionic for responsive client interfaces.",
    links: [
      { label: "Quizzy Backend", url: "https://github.com/Taseen-X2098/quizzy-lumen-server" },
      { label: "Chatty Client", url: "https://github.com/Taseen-X2098/chatty-client" }
    ],
    tags: ["Laravel", "Lumen", "Vue.js", "Ionic", "MySQL"]
  },
  {
    id: "03",
    title: "Hangman Word Puzzle",
    subtitle: "Cross-Platform Mobile Dev",
    context: "Built a native mobile gaming experience focused on clean UI state management and efficient asset handling.",
    win: "Implemented complex game logic and animations within the Flutter framework, ensuring smooth performance across various screen densities.",
    links: [
      { label: "GitHub Repo", url: "https://github.com/Taseen-X2098/hangman_word_puzzle" }
    ],
    tags: ["Flutter", "Dart", "Mobile UX"]
  },
  {
    id: "04",
    title: "Core Utility Apps",
    subtitle: "Frontend Architecture",
    context: "A series of utility applications designed to explore advanced state management and local persistence techniques.",
    win: "Focused on clean code principles and optimized rendering cycles to create a highly responsive user experience using Flutter.",
    links: [
      { label: "Todo App", url: "https://github.com/Taseen-X2098/todo_list_app" }
    ],
    tags: ["Flutter", "State Management", "Dart"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Dart", "PHP"]
  },
  {
    category: "Frameworks & UI",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Flutter", "Vue.js", "Ionic"]
  },
  {
    category: "Backend & Database",
    skills: ["Lumen", "Laravel", "PostgreSQL", "MySQL", "Clerk Auth"]
  },
  {
    category: "Deployment & Tools",
    skills: ["Vercel", "Cloudflare Pages", "Git/GitHub", "Postman", "Google Apps Script"]
  }
];
