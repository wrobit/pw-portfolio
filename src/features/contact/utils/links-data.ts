import { createElement } from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa6";

type ContactLink = {
  id: number;
  name: string;
  url: string;
  icon: () => JSX.Element;
};

const DEFAULT_ICON_SIZE = 16;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createIcon = (IconComponent: any) =>
  createElement(IconComponent, { size: DEFAULT_ICON_SIZE }) as JSX.Element;

export const contactLinks: ContactLink[] = [
  {
    id: 1,
    name: "linkedin",
    url: "https://www.linkedin.com/in/piotrwrobel-ajiiz",
    icon: () => createIcon(FaLinkedin),
  },
  {
    id: 2,
    name: "github",
    url: "https://github.com/ajiiz",
    icon: () => createIcon(FaGithub),
  },
  {
    id: 3,
    name: "linktree",
    url: "https://linktr.ee/wrobit",
    icon: () => createIcon(FaLink),
  },
];
