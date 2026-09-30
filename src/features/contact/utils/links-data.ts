import { ComponentType, createElement } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type ContactLink = {
  id: number;
  name: string;
  url: string;
  icon: () => JSX.Element;
};

const DEFAULT_ICON_SIZE = 16;

const createIcon = (IconComponent: IconType) =>
  createElement(IconComponent as ComponentType<IconBaseProps>, { size: DEFAULT_ICON_SIZE });

export const contactLinks: ContactLink[] = [
  {
    id: 1,
    name: "linkedin",
    url: "https://www.linkedin.com/in/piotrwrobel-wrobit",
    icon: () => createIcon(FaLinkedin),
  },
  {
    id: 2,
    name: "github",
    url: "https://github.com/wrobit",
    icon: () => createIcon(FaGithub),
  },
];
