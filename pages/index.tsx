import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/logo';
import RecentPosts from '../components/recent-posts';
import { getAllPosts } from '../api/contentful';

const Home = ({ allPosts }) => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <RecentPosts allPosts={allPosts} />
  </Layout>
);

export default Home;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  return {
    props: { allPosts },
  };
}
