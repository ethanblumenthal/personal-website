import Image from 'next/image';

import { BackgroundContainer, FlexEvenlyContainer, MainContent } from '../elements/containers';
import { PageHeader, SectionHeader, Text } from '../elements/text';
import { HEADER } from '../utils';
import Subscribe from './subscribe';

const Header = () => (
  <BackgroundContainer>
    <FlexEvenlyContainer>
      <Image src={HEADER.image} alt={HEADER.title} width={400} height={400} />

      <MainContent>
        <PageHeader>{HEADER.title}</PageHeader>
        <Text style={{ margin: '1rem 0' }}>{HEADER.summary}</Text>
        <SectionHeader>{HEADER.subtitle}</SectionHeader>
        <Text style={{ margin: '1rem 0' }}>{HEADER.substack}</Text>
        <Subscribe isOutline={false} />
      </MainContent>
    </FlexEvenlyContainer>
  </BackgroundContainer>
);

export default Header;
