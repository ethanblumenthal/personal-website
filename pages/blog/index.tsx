import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { ThinButton } from '../../elements/buttons';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTags } from '../../api/contentful';

const Header = styled.header`
  text-align: center;
`;

const Blog = ({ allPosts, allTags }) => (
  <Layout>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header>
      <PageHeader>Posts</PageHeader>
      {allTags.map(({ name, slug }) => (
        <Link href={`/tags/${slug}`}>
          <ThinButton>{name}</ThinButton>
        </Link>
      ))}
    </Header>

    <Posts allPosts={allPosts} />
  </Layout>
);
export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  const allTags = (await getAllTags(preview)) ?? [];

  return {
    props: { allPosts, allTags },
  };
}
