import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { BlackButton } from '../elements/buttons';
import { BackgroundContainer, ContentContainer, FlexContainer } from '../elements/containers';
import { SectionHeader, SubText, Text } from '../elements/text';
import { IProject, devices } from '../utils';

const Content = styled.div`
  @media ${devices.desktop} {
    max-width: 32rem;
  }
`;

const ImageContainer = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
  margin-bottom: 2rem;
  /* position: 'relative'; */

  @media ${devices.desktop} {
    margin-bottom: 0;
  }
`;

const Projects = ({ allProjects }) => {
  return allProjects.map(({ title, subtitle, description, coverImage, slug }: IProject, idx) => (
    <BackgroundContainer color={idx % 2 === 0 ? 'offset' : null}>
      <ContentContainer>
        <FlexContainer key={title} style={{ flexDirection: idx % 2 === 0 ? 'row-reverse' : null }}>
          <ImageContainer>
            <Image src={coverImage.url} alt={title} width={600} height={350} layout="intrinsic" />
          </ImageContainer>
          <Content>
            <SubText style={{ marginBottom: '0.5rem' }}>{subtitle}</SubText>
            <SectionHeader style={{ marginBottom: '1rem' }}>{title}</SectionHeader>
            <Text style={{ marginBottom: '1rem' }}>{description}</Text>
            <Link href={`/work/${slug}`}>
              <BlackButton>Learn more</BlackButton>
            </Link>
          </Content>
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  ));
};

export default Projects;
