import Link from 'next/link';
import Image from 'next/image';

import { ImageCard } from '../elements/cards';
import { CardHeader, Text, SubText } from '../elements/text';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { IPost } from '../utils';

const Posts = ({ posts }) => (
  <BackgroundContainer>
    <FlexContainer>
      {posts &&
        posts.map(({ date, title, excerpt, coverImage, slug }: IPost) => (
          <Link href={`/${slug}`} key={slug}>
            <ImageCard key={title}>
              <Image src={coverImage.url} alt={title} width={300} height={200} />
              <SubText>{date}</SubText>
              <CardHeader>{title}</CardHeader>
              <Text>{excerpt}</Text>
            </ImageCard>
          </Link>
        ))}
    </FlexContainer>
  </BackgroundContainer>
);

export default Posts;
