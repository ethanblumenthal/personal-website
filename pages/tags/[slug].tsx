import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import { PageHeader } from '../../elements/text';
import { getAllPosts, getAllTagsBySlug } from '../../api/contentful';

const Header = styled.header`
  text-align: center;
`;

const Tags = ({ allPosts }) => {
  const router = useRouter();

  console.log(allPosts);

  const { slug } = router.query;

  const taggedPosts = allPosts?.filter((post) => {
    post.tags.includes(slug);
  });

  return (
    <Layout>
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <PageHeader>
          {taggedPosts?.length} Posts tagged with "{}"
        </PageHeader>
      </Header>

      <Posts allPosts={taggedPosts} />
    </Layout>
  );
};

export default Tags;

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
