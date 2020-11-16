import Image from 'next/image';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../api/contentful';
import { PageHeader, Text, SubText } from '../../elements/text';
import { BlogContainer, FlexContainer, OffsetContainer } from '../../elements/containers';

export default function Post({ post, morePosts, preview }) {
  const { date, title, excerpt, coverImage, content } = post;

  const router = useRouter();
  console.log(post);

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const Content = styled.div`
    max-width: 35rem;
  `;

  return (
    <Layout>
      <OffsetContainer>
        <FlexContainer>
          <Content>
            <FlexContainer>
              <SubText>JavaScript - React - Theming</SubText>
              <SubText>{date}</SubText>
              <SubText>9 Min Read</SubText>
            </FlexContainer>
            <PageHeader>{title}</PageHeader>
            <Text>{excerpt}</Text>
          </Content>

          <Image src={coverImage.url} alt={title} height={300} width={400} />
        </FlexContainer>
      </OffsetContainer>

      <BlogContainer>{documentToReactComponents(content.json)}</BlogContainer>
    </Layout>
  );
}

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
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}
