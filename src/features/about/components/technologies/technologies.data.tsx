import { ComponentType } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaAws, FaNode } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiCloudflare,
  SiCypress,
  SiDocker,
  SiExpo,
  SiGithubactions,
  SiFastapi,
  SiOpenai,
  SiPytorch,
  SiPython,
  SiReact,
  SiSentry,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVitest,
  SiGithubcopilot,
  SiPytest,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandFigma, TbBrandFramer } from "react-icons/tb";

interface TechnologiesData {
  title: string;
  description: string;
  technologies: { name: string; icon: () => JSX.Element }[];
}

const DEFAULT_ICON_SIZE = 16;

const createIcon = (IconComponent: IconType, size: number = DEFAULT_ICON_SIZE): JSX.Element => {
  const Icon = IconComponent as ComponentType<IconBaseProps>;
  return <Icon size={size} />;
};

export const data: TechnologiesData[] = [
  {
    title: "General",
    description: "Mostly TypeScript, sometimes Python.",
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
    description: "Websites, web apps, and mobile apps.",
    technologies: [
      {
        name: "React",
        icon: () => createIcon(SiReact, DEFAULT_ICON_SIZE),
      },
      {
        name: "React Native",
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
    description: "APIs and server-side code.",
    technologies: [
      {
        name: "Node.js",
        icon: () => createIcon(FaNode, DEFAULT_ICON_SIZE),
      },
      {
        name: "FastAPI",
        icon: () => createIcon(SiFastapi, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Testing",
    description: "Component and end-to-end tests.",
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
        name: "Pytest",
        icon: () => createIcon(SiPytest, DEFAULT_ICON_SIZE),
      },
      {
        name: "Cypress",
        icon: () => createIcon(SiCypress, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Cloud",
    description: "Deployments and monitoring.",
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
    description: "I have explored various AI tools, but now I keep my setup minimal and focused.",
    technologies: [
      {
        name: "Codex",
        icon: () => createIcon(SiOpenai, DEFAULT_ICON_SIZE),
      },
      {
        name: "Codex CLI",
        icon: () => createIcon(SiOpenai, DEFAULT_ICON_SIZE),
      },
      {
        name: "Pi",
        icon: () => (
          <svg
            width={DEFAULT_ICON_SIZE}
            height={DEFAULT_ICON_SIZE}
            viewBox="165.29 165.29 469.43 469.43"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M165.29 165.29H517.36V400H400V282.65H165.29Z" />
            <path d="M165.29 282.65H282.65V400H400V517.36H282.65V634.72H165.29Z" />
            <path d="M517.36 400H634.72V634.72H517.36Z" />
          </svg>
        ),
      },
      {
        name: "GitHub Copilot",
        icon: () => createIcon(SiGithubcopilot, DEFAULT_ICON_SIZE),
      },
    ],
  },
  {
    title: "Learning",
    description: "Machine learning and Python tools.",
    technologies: [
      {
        name: "FastAPI",
        icon: () => createIcon(SiFastapi, DEFAULT_ICON_SIZE),
      },
      {
        name: "PyTorch",
        icon: () => createIcon(SiPytorch, DEFAULT_ICON_SIZE),
      },
    ],
  },
];
