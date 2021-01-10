import Link from 'next/link';
import Image from 'next/image';

import {
  BackgroundContainer,
  ContentContainer,
  FlexEvenlyContainer,
  HeaderContent,
} from '../elements/containers';
import { PageHeader, Text } from '../elements/text';
import { Button } from '../elements/buttons';
import { LOGO } from '../utils';

const Logo = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexEvenlyContainer>
        <Image src={LOGO.image} alt={'Ethan Blumenthal'} width={400} height={400} />

        <HeaderContent>
          <PageHeader>{LOGO.title}</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{LOGO.description}</Text>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </HeaderContent>
      </FlexEvenlyContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Logo;
