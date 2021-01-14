import Link from 'next/link';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArrowLeft } from 'react-feather';

import Layout from '../../components/layout';
import { getAllProjectsBySlug, getProjectBySlug, getAllProjects } from '../../api/contentful';
import { PageHeader, SubText } from '../../elements/text';
import { BlogContainer, CenterContainer } from '../../elements/containers';
import { ArrowButtonLeft } from '../../elements/buttons';

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <CenterContainer style={{ marginTop: '2rem' }}>
        <SubText>{project?.subtitle}</SubText>
        <PageHeader style={{ margin: '1rem 0' }}>{project?.title}</PageHeader>

        <Link href="/work">
          <ArrowButtonLeft>
            <ArrowLeft />
            See all projects
          </ArrowButtonLeft>
        </Link>
      </CenterContainer>

      <BlogContainer>{documentToReactComponents(project?.content?.json)}</BlogContainer>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectBySlug(params.slug, preview);
  const allProjects = (await getAllProjects(preview)) ?? [];

  return {
    props: {
      project: data?.project ?? null,
      allProjects,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsBySlug();
  return {
    paths: allProjects?.map(({ slug }) => `/work/${slug}`) ?? [],
    fallback: true,
  };
}
