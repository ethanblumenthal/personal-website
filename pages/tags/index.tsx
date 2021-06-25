import Layout from '../../components/layout';
import { PageHeader } from '../../elements/text';
import { getAllTagsWithCount } from '../../utils/api';
import { CenterContainer } from '../../elements/containers';
import Tags from '../../components/tags';

export default ({ allTagsWithCount }) => (
  <Layout pageTitle={'Tags'} description={'Tags'}>
    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Tags</PageHeader>
    </CenterContainer>

    <Tags allTagsWithCount={allTagsWithCount} />
  </Layout>
);

export async function getStaticProps() {
  const allTagsWithCount = await getAllTagsWithCount();
  return {
    props: { allTagsWithCount },
  };
}
