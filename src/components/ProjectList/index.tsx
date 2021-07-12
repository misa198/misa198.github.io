import { FC } from "react";

import { PinnedRepository } from "src/types/PinnedRepository";
import { ProjectListWrapper, ProjectItem } from "./styled";
import ProjectCard from "../ProjectCard";

interface PropTypes {
  repositories: PinnedRepository[];
}

const ProjectList: FC<PropTypes> = ({ repositories }) => {
  return (
    <ProjectListWrapper>
      {repositories.map((repository) => (
        <ProjectItem key={repository.link}>
          <ProjectCard repository={repository} />
        </ProjectItem>
      ))}
    </ProjectListWrapper>
  );
};

export default ProjectList;
