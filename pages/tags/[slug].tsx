import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTagsBySlug } from '../../api/contentful';
import { ArrowButtonLeft, ArrowButtonRight } from '../../elements/buttons';
import Link from 'next/link';

const Header = styled.header`
  text-align: center;
`;

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <PageHeader>
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
      </Header>

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
