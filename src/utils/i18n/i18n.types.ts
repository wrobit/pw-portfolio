export type Locale = "en" | "pl";

export type AppMessages = {
  language: {
    switcherLabel: string;
    en: string;
    pl: string;
  };
  nav: {
    work: string;
    about: string;
    pricing: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  breadcrumb: {
    home: string;
    about: string;
    work: string;
    pricing: string;
    contact: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    reject: string;
  };
  footer: {
    tagline: string;
    explore: string;
    socials: string;
    contact: string;
    home: string;
    work: string;
    pricing: string;
    about: string;
  };
  home: {
    heroTitle: string;
    heroDescription: string;
    connectCta: string;
    aboutTeaser: string;
    aboutCta: string;
    moreWork: string;
  };
  about: {
    heroTitle: string;
    heroDescription: string;
    downloadResume: string;
    experienceTitle: string;
    experienceIntro: string;
    educationTitle: string;
    technologiesTitle: string;
    technologiesIntro: string;
  };
  work: {
    heroTitle: string;
    heroDescription: string;
    clientBuildsTitle: string;
    clientBuildsDescription: string;
    independentBuildsTitle: string;
    independentBuildsDescription: string;
  };
  pricing: {
    pageTitle: string;
    introLead: string;
    categoryFramer: string;
    categoryCode: string;
    framerPlansTitle: string;
    framerPlansDescription: string;
    codePlansTitle: string;
    codePlansDescription: string;
    buildPriceLabel: string;
    maintenanceLabel: string;
    monthly: string;
    planCta: string;
    categorySwitchAria: string;
  };
  contact: {
    heading: string;
    description: string;
    emailBadge: string;
    signature: string;
  };
  error: {
    headlineStart: string;
    headlineMuted: string;
    headlineEnd: string;
    goHome: string;
  };
};
