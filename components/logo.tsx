import Link from 'next/link';
import Image from 'next/image';

import {
  BackgroundContainer,
  ContentContainer,
  FlexEvenlyContainer,
  MainContent,
} from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { LOGO } from '../utils';

const Logo = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexEvenlyContainer>
        <Image src={LOGO.image} alt={'Ethan Blumenthal'} width={400} height={400} />

        <MainContent>
          <PageHeader>{LOGO.title}</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{LOGO.description}</Text>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </MainContent>
      </FlexEvenlyContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Logo;
