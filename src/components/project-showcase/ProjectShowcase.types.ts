export type Project = {
  id: number;
  title: string;
  image: string;
  backgroundImage: string;
  description: string;
  liveLink?: string;
  repositoryLink?: string;
  isExpanded?: boolean;
};
