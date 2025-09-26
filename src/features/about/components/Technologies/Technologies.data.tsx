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
  SiUpstash,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import {
  TbBrandReactNative,
  TbBrandFigma,
  TbBrandFramer,
  TbBrandFramerMotion,
} from "react-icons/tb";

const ICON_SIZE = 16;

export const data = [
  {
    title: "General",
    description:
      "Building everything with TypeScript and React, but being JavaScript engineer at the end of the day.",
    technologies: [
      {
        name: "TypeScript",
        icon: <SiTypescript size={ICON_SIZE} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={ICON_SIZE} />,
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
        icon: <SiReact size={ICON_SIZE} />,
      },
      {
        name: "Native",
        icon: <TbBrandReactNative size={ICON_SIZE} />,
      },
      {
        name: "Expo",
        icon: <SiExpo size={ICON_SIZE} />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine size={ICON_SIZE} />,
      },
      {
        name: "Vite",
        icon: <SiVite size={ICON_SIZE} />,
      },
      {
        name: "Remix",
        icon: <SiRemix size={ICON_SIZE} />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={ICON_SIZE} />,
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
        icon: <SiStyledcomponents size={ICON_SIZE} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={ICON_SIZE} />,
      },
      {
        name: "Storybook",
        icon: <SiStorybook size={ICON_SIZE} />,
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui size={ICON_SIZE} />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "Design",
    description: "Designing the UI and the UX of the application according to the client's needs.",
    technologies: [
      {
        name: "Framer",
        icon: <TbBrandFramer size={ICON_SIZE} />,
      },
      {
        name: "Figma",
        icon: <TbBrandFigma size={ICON_SIZE} />,
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
        icon: <FaNode size={ICON_SIZE} />,
      },
      {
        name: "NestJS",
        icon: <SiNestjs size={ICON_SIZE} />,
      },
      {
        name: "Express",
        icon: <SiExpress size={ICON_SIZE} />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={ICON_SIZE} />,
      },
      {
        name: "Neondb",
        icon: <BiLogoPostgresql size={ICON_SIZE} />,
      },
      {
        name: "Upstash",
        icon: <SiUpstash size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "Testing",
    description: "Testing the application to ensure the best code quality.",
    technologies: [
      {
        name: "Jest",
        icon: <SiJest size={ICON_SIZE} />,
      },
      {
        name: "Vitest",
        icon: <SiVitest size={ICON_SIZE} />,
      },
      {
        name: "Cypress",
        icon: <SiCypress size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "CI/CD",
    description: "Automating the build and deployment process.",
    technologies: [
      {
        name: "GitHub Actions",
        icon: <SiGithubactions size={ICON_SIZE} />,
      },
      {
        name: "Docker",
        icon: <SiDocker size={ICON_SIZE} />,
      },
      {
        name: "Sentry",
        icon: <SiSentry size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "Cloud",
    description: "Managing the cloud infrastructure and services.",
    technologies: [
      {
        name: "AWS",
        icon: <FaAws size={ICON_SIZE} />,
      },
      {
        name: "Cloudflare",
        icon: <SiCloudflare size={ICON_SIZE} />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={ICON_SIZE} />,
      },
    ],
  },
  {
    title: "Tools",
    description: "Modern tools to make the development process faster and more efficient.",
    technologies: [
      {
        name: "git",
        icon: <SiGit size={ICON_SIZE} />,
      },
      {
        name: "bun",
        icon: <SiBun size={ICON_SIZE} />,
      },
      {
        name: "pnpm",
        icon: <SiPnpm size={ICON_SIZE} />,
      },
      {
        name: "Cursor",
        icon: <FaCube size={ICON_SIZE} />,
      },
      {
        name: "Slack",
        icon: <SiSlack size={ICON_SIZE} />,
      },
      {
        name: "ClickUp",
        icon: <SiClickup size={ICON_SIZE} />,
      },
    ],
  },
];
