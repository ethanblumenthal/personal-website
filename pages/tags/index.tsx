import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/layout';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTags } from '../../api/contentful';
import Tags from '../../components/tags';

const Header = styled.header`
  text-align: center;
`;

const Blog = ({ allPosts, allTags }) => (
  <Layout>
    <Head>
      <title>Tags</title>
    </Head>
    <Header>
      <PageHeader>Tags</PageHeader>
    </Header>

    <Tags allTags={allTags} />
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
