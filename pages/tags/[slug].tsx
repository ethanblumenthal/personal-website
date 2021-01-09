import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTagsBySlug } from '../../api/contentful';
import { ArrowButtonLeft, ArrowButtonRight } from '../../elements/buttons';
import { CenterContainer } from '../../elements/containers';

export default function Tags({ allPosts }) {
  const router = useRouter();
  const taggedPosts = [];

  allPosts?.forEach((post) => {
    post.tagsCollection.items.forEach(({ slug }) => {
      if (slug === router.query.slug) {
        taggedPosts.push(post);
      }
    });
  });

  return (
    <Layout>
      <Head>
        <title>Tags</title>
      </Head>

      <CenterContainer>
        <PageHeader style={{ margin: '2rem' }}>
          {taggedPosts.length} Posts tagged with "{router.query.slug}"
        </PageHeader>
        <Link href="/blog">
          <ArrowButtonLeft>
            <FontAwesomeIcon icon={faArrowLeft} />
            See all articles
          </ArrowButtonLeft>
        </Link>
        <Link href="/tags">
          <ArrowButtonRight>
            Browse all tags
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowButtonRight>
        </Link>
      </CenterContainer>

      <Posts allPosts={taggedPosts} />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];

  return {
    props: { allPosts },
  };
}

export async function getStaticPaths() {
  const allTags = await getAllTagsBySlug();
  return {
    paths: allTags?.map(({ slug }) => `/tags/${slug}`) ?? [],
    fallback: true,
  };
}
