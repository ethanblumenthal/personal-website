import { SmallCard } from '../elements/cards';
import { SectionHeader, Text, SubText } from '../elements/text';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { CERTIFICATIONS } from '../utils';

interface ICertification {
  title: string;
  description: string;
}

const Certifications = () => (
  <BackgroundContainer>
    <SectionHeader>Certifications</SectionHeader>

    <FlexContainer>
      {CERTIFICATIONS &&
        CERTIFICATIONS.map(({ title, description }: ICertification) => (
          <SmallCard key={title}>
            <SubText>{description}</SubText>
            <Text>{title}</Text>
          </SmallCard>
        ))}
    </FlexContainer>
  </BackgroundContainer>
);

export default Certifications;
