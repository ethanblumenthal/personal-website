import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { BlackButton } from '../elements/buttons';
import { BackgroundContainer, ContentContainer, FlexContainer } from '../elements/containers';
import { SectionHeader, SubText, Text } from '../elements/text';
import { IProject } from '../utils';

const Content = styled.div`
  max-width: 32rem;
`;

const StyledImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;

const Project = ({ title, description, tags, coverImage, slug, index }) => {
  if (index % 2 === 0) {
    return (
      <BackgroundContainer color="offset">
        <ContentContainer>
          <FlexContainer key={title}>
            <Content>
              {/* <SubText>{tags.join(', ')}</SubText> */}
              <SectionHeader>{title}</SectionHeader>
              <Text>{description}</Text>
              <Link href={`/work/${slug}`}>
                <BlackButton>Learn more</BlackButton>
              </Link>
            </Content>
            <StyledImage src={coverImage.url} alt={title} height={350} width={600} />
          </FlexContainer>
        </ContentContainer>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer color="background">
      <ContentContainer>
        <FlexContainer key={title}>
          <StyledImage src={coverImage.url} alt={title} height={350} width={600} />
          <Content>
            <SectionHeader>{title}</SectionHeader>
            <Text>{description}</Text>
            <Link href={`/work/${slug}`}>
              <BlackButton>Learn more</BlackButton>
            </Link>
          </Content>
        </FlexContainer>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Project;
