import { routes } from "@utils/constants/routes.constants";

export const data = [
  {
    header: "explore",
    links: [
      {
        label: "home",
        href: routes.home
      },
      {
        label: "work",
        href: routes.work
      },
      {
        label: "about",
        href: routes.about
      },
      {
        label: "contact",
        href: routes.contact
      }
    ]
  },
  {
    header: "socials",
    links: [
      {
        label: "github",
        href: "https://github.com/wrobit"
      },
      {
        label: "linkedin",
        href: "https://www.linkedin.com/in/wrobit/"
      },
      {
        label: "twitter",
        href: "https://twitter.com/wrobit"
      },
      {
        label: "bento.me",
        href: "https://bento.me/wrobit"
      }
    ]
  },
  {
    header: "contact",
    links: [
      {
        label: "email",
        href: "mailto:piotrwrobel.ajiiz@gmail.com"
      }
    ]
  }
];
