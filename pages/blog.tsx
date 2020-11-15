import Head from 'next/head';

import Layout from '../components/layout';
import Posts from '../components/posts';
import { getAllPostsForHome } from '../api/contentful';

const Blog = ({ allPosts }) => (
  <Layout>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
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
