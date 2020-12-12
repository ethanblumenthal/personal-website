import Link from 'next/link';

import { TagCard } from '../elements/cards';
import { CardHeader, Text } from '../elements/text';
import { BackgroundContainer, ContentContainer, LgGridContainer } from '../elements/containers';

const Tags = ({ allTags }) => (
  <BackgroundContainer>
    <ContentContainer>
      <LgGridContainer>
        {allTags &&
          allTags.map(({ tag, count }) => (
            <Link href={`/tags/${tag}`} key={tag}>
              <TagCard>
                <CardHeader>{tag}</CardHeader>
                <Text>{count} articles</Text>
              </TagCard>
            </Link>
          ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Tags;
