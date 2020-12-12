import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { ThinButton } from '../../elements/buttons';
import { PageHeader } from '../../elements/text';
import { CenterContainer } from '../../elements/containers';
import { getAllPosts, getAllTags } from '../../api/contentful';

const Blog = ({ allPosts, allTags }) => (
  <Layout>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Posts</PageHeader>
      {allTags.map(({ name, slug }) => (
        <Link href={`/tags/${slug}`} key={slug}>
          <ThinButton>{name}</ThinButton>
        </Link>
      ))}
    </CenterContainer>

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
