import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Button } from '../elements/buttons';
import { BackgroundContainer, FlexContainer, OffsetContainer } from '../elements/containers';
import { SectionHeader, SubText, Text } from '../elements/text';
import { IProject } from '../utils';

const Content = styled.div`
  max-width: 32rem;
`;

const StyledImage = styled(Image)`
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const Project = ({ title, description, tags, coverImage, slug, index }) => {
  if (index % 2 === 0) {
    return (
      <OffsetContainer>
        <FlexContainer key={title}>
          <Content>
            {/* <SubText>{tags.join(', ')}</SubText> */}
            <SectionHeader>{title}</SectionHeader>
            <Text>{description}</Text>
            <Link href={`/work/${slug}`}>
              <Button>Learn more</Button>
            </Link>
          </Content>
          <StyledImage src={coverImage.url} alt={title} height={350} width={600} />
        </FlexContainer>
      </OffsetContainer>
    );
  }

  return (
    <BackgroundContainer>
      <FlexContainer key={title}>
        <StyledImage src={coverImage.url} alt={title} height={350} width={600} />
        <Content>
          <SectionHeader>{title}</SectionHeader>
          <Text>{description}</Text>
          <Link href={`/work/${slug}`}>
            <Button>Learn more</Button>
          </Link>
        </Content>
      </FlexContainer>
    </BackgroundContainer>
  );
};

export default Project;
