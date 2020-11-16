import Image from 'next/image';

import { Button } from '../elements/buttons';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { SectionHeader, Text } from '../elements/text';
import { IProject } from '../utils';

const Projects = ({ allProjects }) => (
  <BackgroundContainer>
    <FlexContainer>
      {allProjects &&
        allProjects.map(({ title, description, coverImage }: IProject) => (
          <div>
            <div>
              <SectionHeader>{title}</SectionHeader>
              <Text>{description}</Text>
              <Button>Learn more</Button>
            </div>
            <Image src={coverImage.url} alt={title} height={200} width={350} />
          </div>
        ))}
    </FlexContainer>
  </BackgroundContainer>
);

export default Projects;
