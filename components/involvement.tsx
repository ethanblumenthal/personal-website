import { BaseCard } from '../elements/cards';
import { SectionHeader, CardHeader, Text } from '../elements/text';
import { BackgroundContainer, ContentContainer, GridContainer } from '../elements/containers';
import { INVOLVEMENT } from '../utils';

interface IInvolvement {
  title: string;
  description: string;
  link: string;
}

const Involvement = () => (
  <BackgroundContainer color="offset">
    <ContentContainer>
      <SectionHeader>Involvement</SectionHeader>

      <GridContainer>
        {INVOLVEMENT &&
          INVOLVEMENT.map(({ title, description, link }: IInvolvement) => (
            <a href={link} target="_blank" key={title}>
              <BaseCard>
                <CardHeader>{title}</CardHeader>
                <Text>{description}</Text>
              </BaseCard>
            </a>
          ))}
      </GridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Involvement;
