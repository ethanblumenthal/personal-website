import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/layout';
import { PageHeader } from '../../elements/text';
import { getAllPosts } from '../../api/contentful';
import Tags from '../../components/tags';

const Header = styled.header`
  text-align: center;
`;

const Blog = ({ allPosts }) => {
  let allTags = {};
  allPosts.forEach(({ tags }) => {
    tags.forEach((tag) => {
      allTags[tag] = allTags[tag] ? allTags[tag] + 1 : 1;
    });
  });

  const orderedTags = [];
  for (let tag in allTags) {
    orderedTags.push({ tag, count: allTags[tag] });
  }

  return (
    <Layout>
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <PageHeader>Tags</PageHeader>
      </Header>

      <Tags allTags={orderedTags} />
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  return {
    props: { allPosts },
  };
}
