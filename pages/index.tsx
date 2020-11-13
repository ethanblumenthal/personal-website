import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';
import RecentPosts from '../components/recent-posts';

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <RecentPosts />
  </Layout>
);

export default Home;
