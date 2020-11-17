import { SmallCard } from '../elements/cards';
import { SectionHeader, Text, SubText } from '../elements/text';
import { BackgroundContainer, LgGridContainer } from '../elements/containers';
import { CERTIFICATIONS } from '../utils';

interface ICertification {
  title: string;
  description: string;
}

const Certifications = () => (
  <BackgroundContainer>
    <SectionHeader>Certifications</SectionHeader>

    <LgGridContainer>
      {CERTIFICATIONS &&
        CERTIFICATIONS.map(({ title, description }: ICertification) => (
          <SmallCard key={title}>
            <SubText>{description}</SubText>
            <Text>{title}</Text>
          </SmallCard>
        ))}
    </LgGridContainer>
  </BackgroundContainer>
);

export default Certifications;
