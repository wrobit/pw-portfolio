import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaCube, FaNode } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiBun,
  SiClickup,
  SiCloudflare,
  SiCypress,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiPnpm,
  SiPrisma,
  SiReact,
  SiRedux,
  SiRemix,
  SiSentry,
  SiShadcnui,
  SiSlack,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiUpstash,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandFigma,
  TbBrandFramer,
  TbBrandFramerMotion,
} from "react-icons/tb";

interface TechnologiesData {
  title: string;
  description: string;
  technologies: { name: string; icon: () => JSX.Element }[];
}

const DEFAULT_ICON_SIZE = 16;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createIcon = (IconComponent: any, size: number = DEFAULT_ICON_SIZE): JSX.Element => {
  return (<IconComponent size={size} />) as JSX.Element;
};

export const data: TechnologiesData[] = [
  {
    title: "General",
    description:
      "Building everything with TypeScript and React, but being JavaScript engineer at the end of the day.",
    technologies: [
      {
        name: "TypeScript",
        icon: () => createIcon(SiTypescript, DEFAULT_ICON_SIZE),
      },
      {
        name: "JavaScript",
        icon: () => createIcon(SiJavascript, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Front-end",
    description:
      "Using full-stack libraries and frameworks to produce fast and SEO-friendly applications.",
    technologies: [
      {
        name: "React",
        icon: () => createIcon(SiReact, DEFAULT_ICON_SIZE),
      },
      {
        name: "Native",
        icon: () => createIcon(TbBrandReactNative, DEFAULT_ICON_SIZE),
      },
      {
        name: "Expo",
        icon: () => createIcon(SiExpo, DEFAULT_ICON_SIZE),
      },
      {
        name: "Next.js",
        icon: () => createIcon(RiNextjsLine, DEFAULT_ICON_SIZE),
      },
      {
        name: "Vite",
        icon: () => createIcon(SiVite, DEFAULT_ICON_SIZE),
      },
      {
        name: "Remix",
        icon: () => createIcon(SiRemix, DEFAULT_ICON_SIZE),
      },
      {
        name: "Redux",
        icon: () => createIcon(SiRedux, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Styling & UI Libraries",
    description:
      "The styles are always aligned with the design system and the UI library and selected based on the project's needs.",
    technologies: [
      {
        name: "Styled Components",
        icon: () => createIcon(SiStyledcomponents, DEFAULT_ICON_SIZE),
      },
      {
        name: "Tailwind CSS",
        icon: () => createIcon(SiTailwindcss, DEFAULT_ICON_SIZE),
      },
      {
        name: "Storybook",
        icon: () => createIcon(SiStorybook, DEFAULT_ICON_SIZE),
      },
      {
        name: "Shadcn UI",
        icon: () => createIcon(SiShadcnui, DEFAULT_ICON_SIZE),
      },
      {
        name: "Framer Motion",
        icon: () => createIcon(TbBrandFramerMotion, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Design",
    description: "Designing the UI and the UX of the application according to the client's needs.",
    technologies: [
      {
        name: "Framer",
        icon: () => createIcon(TbBrandFramer, DEFAULT_ICON_SIZE),
      },
      {
        name: "Figma",
        icon: () => createIcon(TbBrandFigma, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Back-end",
    description:
      "Using the best practices and tools to ensure scalable and fast back-end architectures.",
    technologies: [
      {
        name: "Node.js",
        icon: () => createIcon(FaNode, DEFAULT_ICON_SIZE),
      },
      {
        name: "NestJS",
        icon: () => createIcon(SiNestjs, DEFAULT_ICON_SIZE),
      },
      {
        name: "Express",
        icon: () => createIcon(SiExpress, DEFAULT_ICON_SIZE),
      },
      {
        name: "Prisma",
        icon: () => createIcon(SiPrisma, DEFAULT_ICON_SIZE),
      },
      {
        name: "Neondb",
        icon: () => createIcon(BiLogoPostgresql, DEFAULT_ICON_SIZE),
      },
      {
        name: "Upstash",
        icon: () => createIcon(SiUpstash, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Testing",
    description: "Testing the application to ensure the best code quality.",
    technologies: [
      {
        name: "Jest",
        icon: () => createIcon(SiJest, DEFAULT_ICON_SIZE),
      },
      {
        name: "Vitest",
        icon: () => createIcon(SiVitest, DEFAULT_ICON_SIZE),
      },
      {
        name: "Cypress",
        icon: () => createIcon(SiCypress, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "CI/CD",
    description: "Automating the build and deployment process.",
    technologies: [
      {
        name: "GitHub Actions",
        icon: () => createIcon(SiGithubactions, DEFAULT_ICON_SIZE),
      },
      {
        name: "Docker",
        icon: () => createIcon(SiDocker, DEFAULT_ICON_SIZE),
      },
      {
        name: "Sentry",
        icon: () => createIcon(SiSentry, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Cloud",
    description: "Managing the cloud infrastructure and services.",
    technologies: [
      {
        name: "AWS",
        icon: () => createIcon(FaAws, DEFAULT_ICON_SIZE),
      },
      {
        name: "Cloudflare",
        icon: () => createIcon(SiCloudflare, DEFAULT_ICON_SIZE),
      },
      {
        name: "Vercel",
        icon: () => createIcon(SiVercel, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Tools",
    description: "Modern tools to make the development process faster and more efficient.",
    technologies: [
      {
        name: "git",
        icon: () => createIcon(SiGit, DEFAULT_ICON_SIZE),
      },
      {
        name: "bun",
        icon: () => createIcon(SiBun, DEFAULT_ICON_SIZE),
      },
      {
        name: "pnpm",
        icon: () => createIcon(SiPnpm, DEFAULT_ICON_SIZE),
      },
      {
        name: "Cursor",
        icon: () => createIcon(FaCube, DEFAULT_ICON_SIZE),
      },
      {
        name: "Slack",
        icon: () => createIcon(SiSlack, DEFAULT_ICON_SIZE),
      },
      {
        name: "ClickUp",
        icon: () => createIcon(SiClickup, DEFAULT_ICON_SIZE),
      },
    ],
  },
];
