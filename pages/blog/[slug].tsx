import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import Layout from '../../components/layout';
import { getAllPostsBySlug, getPostBySlug, getAllPosts } from '../../api/contentful';
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

export default function Post({ post, allPosts }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  const fetchTags = () => {
    let tags = [];
    post?.tagsCollection.items.forEach(({ name }) => {
      tags.push(name);
    });
    return tags.join(' • ');
  };

  return (
    <Layout>
      <BackgroundContainer color="card">
        <FlexEvenlyContainer>
          <MainContent>
            <SubText>{moment(post?.date).format('MMMM D, YYYY')}</SubText>
            <PageHeader style={{ marginBottom: '0.5rem' }}>{post?.title}</PageHeader>
            <Text style={{ marginBottom: '0.5rem' }}>{post?.excerpt}</Text>
            <SubText>{fetchTags()}</SubText>
          </MainContent>

          {post ? (
            <RoundImage src={post?.coverImage.url} alt={post?.title} height={300} width={400} />
          ) : null}
        </FlexEvenlyContainer>
      </BackgroundContainer>

      <BlogContainer>{documentToReactComponents(post?.content?.json)}</BlogContainer>
      <RecentPosts allPosts={allPosts} />
      <ScrollButton onClick={() => window.scrollTo(0, 0)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </ScrollButton>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlug(params.slug, preview);
  const allPosts = (await getAllPosts(preview)) ?? [];

  return {
    props: {
      post: data?.post ?? null,
      allPosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsBySlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}
