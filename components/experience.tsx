import { BaseCard } from '../elements/cards';
import { SectionHeader, CardHeader, Text } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  GridContainer,
  HeaderContainer,
} from '../elements/containers';
import { EXPERIENCE } from '../utils';

interface IExperience {
  title: string;
  description: string;
  link: string;
}

const Experience = () => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Experience</SectionHeader>
      </HeaderContainer>

      <GridContainer>
        {EXPERIENCE.map(({ title, description, link }: IExperience) => (
          <a href={link} target="_blank" key={title}>
            <BaseCard>
              <CardHeader style={{ marginBottom: '1rem' }}>{title}</CardHeader>
              <Text>{description}</Text>
            </BaseCard>
          </a>
        ))}
      </GridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Experience;
