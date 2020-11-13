import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
  </Layout>
);

export default Home;
