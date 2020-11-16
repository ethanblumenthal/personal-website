import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { ThinButton } from '../../elements/buttons';
import { PageHeader } from '../../elements/text';
import { getAllPosts } from '../../api/contentful';

const TAGS = ['TypeScript', 'GraphQL', 'Serverless', 'DevOps', 'Vue'];

const Header = styled.header``;

const Blog = ({ allPosts }) => (
  <Layout>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header>
      <PageHeader>Articles</PageHeader>
      {TAGS && TAGS.map((tag) => <ThinButton key={tag}>{tag}</ThinButton>)}
    </Header>

    <Posts allPosts={allPosts} />
  </Layout>
);

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  return {
    props: { allPosts },
  };
}
