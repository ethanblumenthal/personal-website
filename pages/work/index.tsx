import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../../components/layout';
import Project from '../../components/project';
import { PageHeader } from '../../elements/text';
import { getAllProjects } from '../../api/contentful';

const Header = styled.header`
  text-align: center;
`;

const Work = ({ allProjects }) => (
  <Layout>
    <Head>
      <title>Work</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header>
      <PageHeader>Work</PageHeader>
    </Header>

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
