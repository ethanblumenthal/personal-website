import Head from 'next/head';

import Layout from '../../components/layout';
import Project from '../../components/project';
import { PageHeader } from '../../elements/text';
import { CenterContainer } from '../../elements/containers';
import { getAllProjects } from '../../api/contentful';

const Work = ({ allProjects }) => (
  <Layout>
    <Head>
      <title>Work</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Work</PageHeader>
    </CenterContainer>

    {allProjects &&
      allProjects.map((project, index) => <Project key={index} index={index} {...project} />)}
  </Layout>
);

export default Work;

export async function getStaticProps({ preview = false }) {
  const allProjects = (await getAllProjects(preview)) ?? [];
  return {
    props: { allProjects },
  };
}
