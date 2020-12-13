import Link from 'next/link';

import { TagCard } from '../elements/cards';
import { CardHeader, Text } from '../elements/text';
import { BackgroundContainer, ContentContainer, LgGridContainer } from '../elements/containers';

const Tags = ({ allTags }) => (
  <BackgroundContainer>
    <ContentContainer>
      <LgGridContainer>
        {allTags.map(({ name, slug }) => (
          <Link href={`/tags/${slug}`} key={name}>
            <TagCard>
              <CardHeader>{name}</CardHeader>
              <Text>X articles</Text>
            </TagCard>
          </Link>
        ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Tags;
