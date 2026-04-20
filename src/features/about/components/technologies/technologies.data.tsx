import { FaAws, FaCube, FaNode } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiClaude,
  SiCloudflare,
  SiCypress,
  SiDocker,
  SiExpo,
  SiGithubactions,
  SiFastapi,
  SiNestjs,
  SiOpenai,
  SiPytorch,
  SiPython,
  SiReact,
  SiSentry,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandFigma, TbBrandFramer } from "react-icons/tb";

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
    description: "Type-safe by default, Python when needed.",
    technologies: [
      {
        name: "TypeScript",
        icon: () => createIcon(SiTypescript, DEFAULT_ICON_SIZE),
      },
      {
        name: "Python",
        icon: () => createIcon(SiPython, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Front-end",
    description: "Building smooth interfaces across web and mobile.",
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
    description: "Focused on reliable APIs and clear architecture.",
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
        name: "FastAPI",
        icon: () => createIcon(SiFastapi, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Testing",
    description: "Shipping with confidence through practical test coverage.",
    technologies: [
      {
        name: "RTL",
        icon: () => createIcon(SiTestinglibrary, DEFAULT_ICON_SIZE),
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
    title: "Cloud",
    description: "Deploying and monitoring apps in modern cloud stacks.",
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
        name: "Docker",
        icon: () => createIcon(SiDocker, DEFAULT_ICON_SIZE),
      },
      {
        name: "Sentry",
        icon: () => createIcon(SiSentry, DEFAULT_ICON_SIZE),
      },
      {
        name: "GitHub Actions",
        icon: () => createIcon(SiGithubactions, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "AI",
    description: "Using AI tools to iterate faster and ship better.",
    technologies: [
      {
        name: "Cursor",
        icon: () => createIcon(FaCube, DEFAULT_ICON_SIZE),
      },
      {
        name: "OpenCode",
        icon: () => createIcon(SiOpenai, DEFAULT_ICON_SIZE),
      },
      {
        name: "Claude",
        icon: () => createIcon(SiClaude, DEFAULT_ICON_SIZE),
      },
      {
        name: "Codex",
        icon: () => createIcon(SiOpenai, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Learning",
    description: "Currently exploring ML and Python ecosystem tools.",
    technologies: [
      {
        name: "PyTorch",
        icon: () => createIcon(SiPytorch, DEFAULT_ICON_SIZE),
      },
      {
        name: "FastAPI",
        icon: () => createIcon(SiFastapi, DEFAULT_ICON_SIZE),
      },
    ],
  },
];
