import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout';
import Posts from '../components/posts';
import { ThinButton } from '../elements/buttons';
import { PageHeader } from '../elements/text';
import { getAllPostsForHome } from '../api/contentful';

const TAGS = ['TypeScript', 'GraphQL', 'Serverless', 'DevOps', 'Vue'];

const Header = styled.div`
  text-align: center;
`;

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

    <Posts posts={allPosts} />
  </Layout>
);

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
