import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { IProject } from '../utils';

const Projects = ({ allProjects }) => (
  <BackgroundContainer>
    <FlexContainer>
      {allProjects &&
        allProjects.map(({ title, description, coverImage }: IProject) => (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={coverImage.url} alt={title} />
          </div>
        ))}
    </FlexContainer>
  </BackgroundContainer>
);

export default Projects;
