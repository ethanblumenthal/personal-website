import { BaseCard } from '../elements/cards';
import { SectionHeader, CardHeader, Text } from '../elements/text';
import {
  BackgroundContainer,
  ContentContainer,
  GridContainer,
  HeaderContainer,
} from '../elements/containers';
import { INVOLVEMENT } from '../utils';

interface IInvolvement {
  title: string;
  description: string;
  link: string;
}

const Involvement = () => (
  <BackgroundContainer>
    <ContentContainer>
      <HeaderContainer>
        <SectionHeader>Involvement</SectionHeader>
      </HeaderContainer>

      <GridContainer>
        {INVOLVEMENT.map(({ title, description, link }: IInvolvement) => (
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

export default Involvement;
