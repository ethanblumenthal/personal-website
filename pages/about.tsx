import Head from 'next/head';

import Layout from '../components/layout';
import Bio from '../components/bio';
import Experience from '../components/experience';
import Skillset from '../components/skillset';
import Certifications from '../components/certifications';

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
    </Head>

    <Bio />
    <Experience />
    <Certifications />
    <Skillset />
  </Layout>
);

export default About;
