import Image from 'next/image';
import styled from 'styled-components';

import { BackgroundContainer, ContentContainer, FlexCenterContainer } from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { BIO, devices } from '../utils';

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
          <a
            href="https://ethanblumenthal.s3.us-east-2.amazonaws.com/ethan_blumenthal_resume.pdf"
            target="_blank"
          >
            <Button>View resume</Button>
          </a>
        </Content>

        <Image src={'/logo.svg'} alt={'Ethan Blumenthal'} width={400} height={400} />
      </FlexCenterContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Header;
