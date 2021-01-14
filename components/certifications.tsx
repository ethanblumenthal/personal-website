import { SmallCard } from '../elements/cards';
import { SectionHeader, Text, SubText } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  HeaderContainer,
  LgGridContainer,
} from '../elements/containers';
import { CERTIFICATIONS } from '../utils';

const Certifications = () => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Certifications</SectionHeader>
      </HeaderContainer>

      <LgGridContainer>
        {CERTIFICATIONS.map(({ title, description, link, icon }) => (
          <a href={link} target="_blank" key={title}>
            <SmallCard>
              {icon}
              <SubText style={{ marginBottom: '0.5rem' }}>{description}</SubText>
              <Text>{title}</Text>
            </SmallCard>
          </a>
        ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Certifications;
