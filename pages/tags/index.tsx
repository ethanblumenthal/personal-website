import Head from 'next/head';

import Layout from '../../components/layout';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTags } from '../../api/contentful';
import { CenterContainer } from '../../elements/containers';
import Tags from '../../components/tags';

const Blog = ({ allPosts, allTags }) => (
  <Layout>
    <Head>
      <title>Tags</title>
    </Head>
    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Tags</PageHeader>
    </CenterContainer>

    <Tags allTags={allTags} allPosts={allPosts} />
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
