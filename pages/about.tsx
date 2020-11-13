import Head from 'next/head';

import Layout from '../components/layout';
import Involvement from '../components/involvement';
import Skillset from '../components/skillset';
import Certifications from '../components/certifications';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Involvement />
    <Certifications />
    <Skillset />
  </Layout>
);

export default About;
