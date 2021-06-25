import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, ArrowRight } from 'react-feather';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { PageHeader } from '../../elements/text';
import { getPostsByTag, getAllTagsWithCount } from '../../utils/api';
import { ArrowButtonLeft, ArrowButtonRight } from '../../elements/buttons';
import { CenterContainer, FlexCenterContainer } from '../../elements/containers';

export default function Tags({ taggedPosts }) {
  const router = useRouter();

  return (
    <Layout pageTitle={'Tags'} description={'Tags'}>
      <CenterContainer>
        <PageHeader style={{ margin: '2rem' }}>
          {taggedPosts?.length} Posts tagged with "{router.query.slug}"
        </PageHeader>

        <FlexCenterContainer>
          <Link href="/blog">
            <ArrowButtonLeft style={{ marginRight: '1rem' }}>
              <ArrowLeft />
              See all articles
            </ArrowButtonLeft>
          </Link>
          <Link href="/tags">
            <ArrowButtonRight>
              Browse all tags
              <ArrowRight />
            </ArrowButtonRight>
          </Link>
        </FlexCenterContainer>
      </CenterContainer>

      <Posts allPosts={taggedPosts} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const taggedPosts = await getPostsByTag(params.slug);
  return {
    props: { taggedPosts },
  };
}

export async function getStaticPaths() {
  const allTagsWithCount = await getAllTagsWithCount();
  const allTags = Object.keys(allTagsWithCount) || [];
  return {
    paths: allTags?.map((tag) => `/tags/${tag}`) ?? [],
    fallback: true,
  };
}
