import Link from 'next/link';
import styled from 'styled-components';

import { BackgroundContainer, ContentContainer, FlexCenterContainer } from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { BIO, devices } from '../utils';
import { RoundImage } from '../elements/images';

const Content = styled.div`
  margin: 2rem 0 0 0;

  @media ${devices.tablet} {
    max-width: 35rem;
    margin: 0 0 0 3rem;
  }
`;

const Header = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexCenterContainer>
        <Content>
          <PageHeader>{BIO.title}</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{BIO.description}</Text>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </Content>

        <RoundImage src={BIO.image} alt={BIO.title} width={400} height={400} />
      </FlexCenterContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Header;
