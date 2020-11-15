import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../api/contentful';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  console.log(post);

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div>Post</div>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}
