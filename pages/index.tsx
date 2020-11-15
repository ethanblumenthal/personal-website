import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';
import RecentPosts from '../components/recent-posts';
import { getAllPostsForHome } from '../api/contentful';

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RecentPosts posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
