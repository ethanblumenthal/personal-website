import Layout from '../components/layout';
import Bio from '../components/bio';
import Experience from '../components/experience';
import Skillset from '../components/skillset';
import Certifications from '../components/certifications';

export default () => (
  <Layout pageTitle="About" description="About">
    <Bio />
    <Experience />
    <Certifications />
    <Skillset />
  </Layout>
);
