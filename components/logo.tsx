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
import { BIO } from '../utils';

const Logo = () => (
  <BackgroundContainer>
    <ContentContainer>
      <FlexEvenlyContainer>
        <Image src={'/logo.svg'} alt={'Ethan Blumenthal'} width={400} height={400} />

        <HeaderContent>
          <PageHeader>Software Engineer</PageHeader>
          <Text style={{ margin: '1rem 0' }}>{BIO.description}</Text>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </HeaderContent>
      </FlexEvenlyContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Logo;
