import { 
  EducationInfo, 
  ExperienceItem, 
  ProjectItem, 
  LanguageItem, 
  FrameworkItem, 
  CertificationItem 
} from "./types";

export const EDUCATION_DATA: EducationInfo = {
  university: "VIT Bhopal University",
  degree: "B.Tech in Computer Science",
  period: "Aug 2024 — May 2028",
  coursework: ["DSA", "OOP", "STATISTICS", "RELIABILITY"]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "pinnacle-labs",
    role: "ENGINEERING INTERN",
    company: "Pinnacle Labs",
    period: "2026 — PRESENT",
    description: "Leading development of core identity modules and internal tooling infrastructure for high-scale environments."
  },
  {
    id: "internspark",
    role: "FRONTEND INTERN",
    company: "InternSpark",
    period: "2026 — PRESENT",
    description: "Crafting immersive user interfaces and implementing performant web architectures with a focus on core web vitals."
  },
  {
    id: "open-source",
    role: "NSOC CONTRIBUTOR",
    company: "Open Source Contributor",
    period: "GSSOC 2025/26",
    description: "Contributing to high-scale open source repositories focused on developer tooling and performance optimization."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nexusdev",
    title: "NexusDev",
    description: "A unified developer identity platform consolidating profile data from LeetCode, Codeforces, and GitHub only. Built with Next.js, Tailwind, and Clerk for seamless developer authentication.",
    image: "/src/assets/images/nexusdev_mockup_1779700590685.png",
    tags: ["Next.js", "Framer Motion", "Clerk"],
    link: "https://nexus-dev-ten.vercel.app/",
    details: {
      overview: "NexusDev was built to solve the fragmentation of developer achievements by aggregating profile data from LeetCode, Codeforces, and GitHub only into a single verified card with secure, real-time syncing architectures.",
      keyFeatures: [
        "One-click multi-platform aggregation via OAuth sync.",
        "Automatic SEO and static metadata optimization for developer cards.",
        "Beautiful, customizable, embeddable widgets for personal sites."
      ],
      techDetails: "Developed with Next.js (App Router), Framer Motion and hosted on global Edge functions. Employs Redis cache sync of external API ratings.",
      achievements: []
    }
  },
  {
    id: "lechelle",
    title: "Lechelle",
    description: "A premium digital experience for an Italian restaurant, focusing on cinematic visuals and seamless reservation flows with high-quality imagery.",
    image: "/src/assets/images/lechelle_mockup_1779700611397.png",
    tags: ["React", "Tailwind", "Vite"],
    link: "https://lechelle.vercel.app/",
    details: {
      overview: "Lechelle is a custom-coded reservation engine and cinematic visual hub for a Michelin-starred fine dining Italian restaurant in Venice. Immersive, visual, responsive, and performance-oriented.",
      keyFeatures: [
        "Cinematic video & heavy picture transitions loading in under 1.1s using progressive blur styling.",
        "Interactive dining room seating reservation visualizer with state tracking.",
        "Secure automatic reservation confirmation email system."
      ],
      techDetails: "Engineered using React and Vite. Animations are driven by standard motion libraries and Tailwind performance triggers, rendering at an average of 60 FPS.",
      achievements: []
    }
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    name: "C++",
    level: "ADVANCED",
    subText: "ALGORITHMS"
  },
  {
    name: "TypeScript",
    level: "MODERN CORE",
    subText: "TYPED"
  },
  {
    name: "Python",
    level: "DATA SCIENCE",
    subText: "ML"
  },
  {
    name: "Java",
    level: "ENTERPRISE",
    subText: "LOGIC"
  }
];

export const FRAMEWORKS_DATA: FrameworkItem[] = [
  {
    name: "Next.js / React",
    progress: 85
  },
  {
    name: "Tailwind CSS",
    progress: 95
  },
  {
    name: "Flask / FastAPI",
    progress: 70
  },
  {
    name: "Git",
    progress: 90
  },
  {
    name: "Vercel",
    progress: 90
  },
  {
    name: "Auth (Clerk / OAuth)",
    progress: 85
  }
];

export const ECOSYSTEM_DATA: string[] = [
  "GitHub Actions",
  "Vercel Deployment",
  "REST / GraphQL",
  "Clerk Auth",
  "PostgreSQL",
  "Docker Containerization",
  "Figma to Code",
  "Redis Caching"
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "nptel-marketing",
    title: "NPTEL Marketing Analytics",
    issuer: "ISSUED BY IIT ROORKEE",
    badgeText: "96% Gold"
  },
  {
    id: "nptel-cloud",
    title: "NPTEL Cloud Computing",
    issuer: "ISSUED BY IIT KHARAGPUR",
    badgeText: "Elite"
  },
  {
    id: "jpmorgan-se",
    title: "J.P. Morgan Software Engineering",
    issuer: "VIRTUAL INTERNSHIP FORAGE",
    badgeText: "Verified"
  },
  {
    id: "anthropic-ai",
    title: "Anthropic AI Developer",
    issuer: "PROFESSIONAL SPECIALIZATION",
    badgeText: "Certified"
  }
];
