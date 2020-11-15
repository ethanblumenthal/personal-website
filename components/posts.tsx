import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { ImageCard } from '../elements/cards';
import { CardHeader, Text, SubText } from '../elements/text';
import { BackgroundContainer, FlexContainer } from '../elements/containers';
import { IPost } from '../utils';

const ImageContainer = styled.div`
  max-height: 10rem;
  width: 23rem;
`;

const Posts = ({ posts }) => (
  <BackgroundContainer>
    <FlexContainer>
      {posts &&
        posts.map(({ date, title, excerpt, coverImage, slug }: IPost) => (
          <Link href={`/${slug}`} key={slug}>
            <ImageCard key={title}>
              <ImageContainer>
                <Image src={coverImage.url} alt={title} height={200} width={350} />
              </ImageContainer>
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
