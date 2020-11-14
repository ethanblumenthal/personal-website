import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { CardHeader, Text, SubText } from '../../elements/text';
import { SectionContainer } from '../../elements/containers';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../api/contentful';
import { IPost } from '../../utils';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  height: 20rem;
  width: 23rem;
  padding: 1rem 2rem;
  transition: ${({ theme }) => theme.transitions.ease};
  cursor: pointer;
  top: 0;

  &:hover {
    box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.1);
    top: -0.5rem;
  }
`;

const Posts = ({ posts }) => (
  <SectionContainer>
    <CardContainer>
      {posts &&
        posts.map(({ fields }: IPost) => (
          <Link href={`/${fields.slug}`}>
            <Card key={fields.title}>
              <img
                src={`https:${fields.image.fields.file.url}`}
                alt={fields.title}
                width={300}
                height={200}
              />
              <SubText>{fields.date}</SubText>
              <CardHeader>{fields.title}</CardHeader>
              <Text>{fields.description}</Text>
            </Card>
          </Link>
        ))}
    </CardContainer>
  </SectionContainer>
);

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
