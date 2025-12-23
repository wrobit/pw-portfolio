import { Project } from "../project-showcase.types";

export interface ProjectBoxProps extends Project {
  image: string;
  index: number;
}
