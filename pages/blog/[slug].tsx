import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { ArrowUp } from 'react-feather';
import moment from 'moment';

import Layout from '../../components/layout';
import { getPostBySlug, getPostSlugs, getAllPosts } from '../../utils/api';
import { ScrollButton } from '../../elements/buttons';
import { PageHeader, Text, SubText } from '../../elements/text';
import {
  BlogContainer,
  FlexEvenlyContainer,
  BackgroundContainer,
  MainContent,
} from '../../elements/containers';
import RecentPosts from '../../components/recent-posts';
import { RoundImage } from '../../elements/images';

export default ({ post, allPosts }) => {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout pageTitle={post?.title} description={post?.excerpt}>
      <BackgroundContainer color="card">
        <FlexEvenlyContainer>
          <MainContent>
            <SubText>{moment(post?.date).format('MMMM D, YYYY')}</SubText>
            <PageHeader style={{ marginBottom: '0.5rem' }}>{post?.title}</PageHeader>
            <Text style={{ marginBottom: '0.5rem' }}>{post?.excerpt}</Text>
            <SubText>{post?.tags.join(' • ')}</SubText>
          </MainContent>

          {/* {post ? (
            <RoundImage src={post?.coverImage.url} alt={title} height={300} width={400} />
          ) : null} */}
        </FlexEvenlyContainer>
      </BackgroundContainer>

      <BlogContainer>{post?.content}</BlogContainer>
      <RecentPosts allPosts={allPosts} />
      <ScrollButton onClick={() => window.scrollTo(0, 0)}>
        <ArrowUp />
      </ScrollButton>
    </Layout>
  );
};

export async function getStaticProps({ params, onlyMetadata = false }) {
  const post = (await getPostBySlug(params.slug, onlyMetadata)) ?? [];
  const allPosts = (await getAllPosts(onlyMetadata)) ?? [];

  return {
    props: { post, allPosts },
  };
}

export async function getStaticPaths() {
  const allSlugs = await getPostSlugs();
  return {
    paths: allSlugs?.map((slug) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}
