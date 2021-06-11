import Link from 'next/link';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { ThinButton } from '../../elements/buttons';
import { PageHeader } from '../../elements/text';
import { CenterContainer, FlexCenterContainer } from '../../elements/containers';
import { getAllPosts, getAllTags } from '../../utils/api';

export default ({ allPosts, allTags }) => (
  <Layout pageTitle={'Blog'} description={'Blog'}>
    <CenterContainer>
      <PageHeader style={{ margin: '2rem' }}>Blog</PageHeader>
      <FlexCenterContainer style={{ width: '10rem' }}>
        {allTags.map((tag) => (
          <Link href={`/tags/${tag}`} key={tag}>
            <ThinButton>{tag}</ThinButton>
          </Link>
        ))}
      </FlexCenterContainer>
    </CenterContainer>

    <Posts allPosts={allPosts} />
  </Layout>
);

export async function getStaticProps({ onlyMetadata = true }) {
  const allPosts = (await getAllPosts(onlyMetadata)) ?? [];
  const allTags = (await getAllTags()) ?? [];

  return {
    props: { allPosts, allTags },
  };
}
