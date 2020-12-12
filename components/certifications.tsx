import { SmallCard } from '../elements/cards';
import { SectionHeader, Text, SubText } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  LgGridContainer,
} from '../elements/containers';
import { CERTIFICATIONS } from '../utils';

interface ICertification {
  title: string;
  description: string;
}

const Certifications = () => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Certifications</SectionHeader>
      </HeaderContainer>

      <LgGridContainer>
        {CERTIFICATIONS &&
          CERTIFICATIONS.map(({ title, description }: ICertification) => (
            <SmallCard key={title}>
              <SubText>{description}</SubText>
              <Text>{title}</Text>
            </SmallCard>
          ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Certifications;
