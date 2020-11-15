import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';
import RecentPosts from '../components/recent-posts';
import { getAllPostsForHome } from '../api/contentful';

const Home = ({ allPosts }) => {
  console.log(allPosts);
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RecentPosts posts={allPosts} />
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
