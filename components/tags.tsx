import Link from 'next/link';

import { TagCard } from '../elements/cards';
import { CardHeader, Text } from '../elements/text';
import { BackgroundContainer, ContentContainer, LgGridContainer } from '../elements/containers';

const Tags = ({ allTags, allPosts }) => {
  const renderCount = (tagSlug) => {
    let count = 0;

    allPosts?.forEach((post) => {
      post.tagsCollection.items.forEach(({ slug }) => {
        if (slug === tagSlug) {
          count++;
        }
      });
    });

    return count;
  };

  return (
    <BackgroundContainer>
      <ContentContainer>
        <LgGridContainer>
          {allTags.map(({ name, slug }) => (
            <Link href={`/tags/${slug}`} key={name}>
              <TagCard>
                <CardHeader>{name}</CardHeader>
                <Text>{renderCount(slug)} articles</Text>
              </TagCard>
            </Link>
          ))}
        </LgGridContainer>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Tags;
