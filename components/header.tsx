import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { BackgroundContainer, ContentContainer, FlexContainer } from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { BIO, devices } from '../utils';

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const Content = styled.div`
  @media ${devices.desktop} {
    max-width: 30rem;
    margin-left: 3rem;
  }
`;

const Header = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexContainer>
        <StyledImage src={BIO.image} alt={BIO.title} width={400} height={400} />

        <Content>
          <PageHeader>{BIO.title}</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{BIO.description}</Text>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </Content>
      </FlexContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Header;
