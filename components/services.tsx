import { BaseCard } from '../elements/cards';
import { SectionHeader, CardHeader, Text, SubText } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  GridContainer,
  HeaderContainer,
} from '../elements/containers';
import { SERVICES, IService } from '../utils';

const Services = () => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Services</SectionHeader>
      </HeaderContainer>

      <GridContainer>
        {SERVICES.map(({ cta, subtext, summary, link }: IService) => (
          <a href={link} target="_blank" key={cta}>
            <BaseCard>
              <SubText style={{ marginBottom: '0.5rem' }}>{subtext}</SubText>
              <CardHeader style={{ marginBottom: '1rem' }}>{cta}</CardHeader>
              <Text>{summary}</Text>
            </BaseCard>
          </a>
        ))}
      </GridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Services;
