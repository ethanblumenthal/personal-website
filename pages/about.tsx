import Head from 'next/head';

import Layout from '../components/layout';
import Involvement from '../components/involvement';
import Skillset from '../components/skillset';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Involvement />
    <Skillset />
  </Layout>
);

export default About;
