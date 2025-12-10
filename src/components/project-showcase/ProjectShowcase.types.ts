export type Project = {
  id: number;
  title: string;
  client: string;
  role: string;
  technologies: string[];
  dateFrom: string;
  dateTo: string;
  image: string;
  backgroundImage: string;
  description: string;
  liveLink?: string;
  repositoryLink?: string;
  isExpanded?: boolean;
};
