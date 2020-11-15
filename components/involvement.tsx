import { BaseCard } from '../elements/cards';
import { SectionHeader, CardHeader, Text } from '../elements/text';
import { FlexContainer, OffsetContainer } from '../elements/containers';
import { INVOLVEMENT } from '../utils';

interface IInvolvement {
  title: string;
  description: string;
  link: string;
}

const Involvement = () => (
  <OffsetContainer>
    <SectionHeader>Involvement</SectionHeader>

    <FlexContainer>
      {INVOLVEMENT &&
        INVOLVEMENT.map(({ title, description, link }: IInvolvement) => (
          <a href={link} target="_blank" key={title}>
            <BaseCard>
              <CardHeader>{title}</CardHeader>
              <Text>{description}</Text>
            </BaseCard>
          </a>
        ))}
    </FlexContainer>
  </OffsetContainer>
);

export default Involvement;
