import Head from 'next/head';

import Layout from '../components/layout';
import Involvement from '../components/involvement';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Involvement />
  </Layout>
);

export default About;
