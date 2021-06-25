import Link from 'next/link';

import { TagCard } from '../elements/cards';
import { CardHeader, Text } from '../elements/text';
import { BackgroundContainer, ContentContainer, LgGridContainer } from '../elements/containers';

const Tags = ({ allTagsWithCount }) => (
  <BackgroundContainer>
    <ContentContainer>
      <LgGridContainer>
        {Object.keys(allTagsWithCount).map((tag) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <TagCard>
              <CardHeader>{tag}</CardHeader>
              <Text>{allTagsWithCount[tag]} articles</Text>
            </TagCard>
          </Link>
        ))}
      </LgGridContainer>
    </ContentContainer>
  </BackgroundContainer>
);

export default Tags;
