import Head from 'next/head';

import Layout from '../components/layout';
import { getAllPostsForHome } from '../api/contentful';
import Posts from '../components/posts';

const Blog = ({ preview, allPosts }) => {
  console.log(allPosts);

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Posts posts={allPosts} /> */}
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
