import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        {CERTIFICATIONS &&
          CERTIFICATIONS.map(({ title, description, icon }) => (
            <SmallCard key={title}>
              <FontAwesomeIcon
                icon={icon}
                size="lg"
                style={{ marginBottom: '1rem', color: ' #E6594C' }}
              />
              <SubText style={{ marginBottom: '0.5rem' }}>{description}</SubText>
              <Text>{title}</Text>
            </SmallCard>
          ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Certifications;
