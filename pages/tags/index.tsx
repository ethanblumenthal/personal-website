import Layout from '../../components/layout';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTags } from '../../utils/api';
import { CenterContainer } from '../../elements/containers';
import Tags from '../../components/tags';

export default ({ allPosts, allTags }) => (
  <Layout pageTitle={'Tags'} description={'Tags'}>
    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Tags</PageHeader>
    </CenterContainer>

    <Tags allTags={allTags} />
  </Layout>
);

export async function getStaticProps({ onlyMetadata = false }) {
  const allPosts = (await getAllPosts(onlyMetadata)) ?? [];
  const allTags = (await getAllTags()) ?? [];

  return {
    props: { allPosts, allTags },
  };
}
