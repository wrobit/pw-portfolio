export type Project = {
  id: number;
  title: string;
  client: string;
  role: string;
  technologies: string[];
  dateFrom: string;
  dateTo: string;
  image: string;
  descriptionImage: string;
  backgroundImage: string;
  description: string;
  activities?: string[];
  liveLink?: string;
  repositoryLink?: string;
  isExpanded?: boolean;
  commercial: boolean;
};
