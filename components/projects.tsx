import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '../elements/buttons';
import {
  BackgroundContainer,
  ContentContainer,
  FlexEvenlyContainer,
  MainContent,
} from '../elements/containers';
import { SectionHeader, SubText, Text } from '../elements/text';
import { IProject } from '../utils';

const ImageContainer = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
`;

const Projects = ({ allProjects }) => {
  return allProjects.map(({ title, subtitle, description, coverImage, slug }: IProject, idx) => (
    <BackgroundContainer key={slug}>
      <ContentContainer>
        <FlexEvenlyContainer
          key={title}
          style={{ flexDirection: idx % 2 === 0 ? 'row-reverse' : null }}
        >
          <Image src={coverImage.url} alt={title} width={600} height={350} />

          <MainContent isOnRight={idx % 2 !== 0}>
            <SubText style={{ marginBottom: '0.5rem' }}>{subtitle}</SubText>
            <SectionHeader style={{ marginBottom: '1rem' }}>{title}</SectionHeader>
            <Text style={{ marginBottom: '1rem' }}>{description}</Text>
            <Link href={`/work/${slug}`}>
              <Button>Learn more</Button>
            </Link>
          </MainContent>
        </FlexEvenlyContainer>
      </ContentContainer>
    </BackgroundContainer>
  ));
};

export default Projects;
