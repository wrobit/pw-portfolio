import { PROFILE_DATA } from "@utils/constants/data.constants";
import { routes } from "@utils/constants/routes.constants";

export const data = [
  {
    header: "explore",
    links: [
      {
        label: "home",
        href: routes.home,
      },
      {
        label: "work",
        href: routes.work,
      },
      {
        label: "about",
        href: routes.about,
      },
      {
        label: "contact",
        href: routes.contact,
      },
    ],
  },
  {
    header: "socials",
    links: [
      {
        label: PROFILE_DATA.GITHUB.label,
        href: PROFILE_DATA.GITHUB.href,
      },
      {
        label: PROFILE_DATA.LINKEDIN.label,
        href: PROFILE_DATA.LINKEDIN.href,
      },
      {
        label: PROFILE_DATA.LINKTREE.label,
        href: PROFILE_DATA.LINKTREE.href,
      },
    ],
  },
  {
    header: "contact",
    links: [
      {
        label: PROFILE_DATA.EMAIL.label,
        href: PROFILE_DATA.EMAIL.href,
      },
    ],
  },
];
