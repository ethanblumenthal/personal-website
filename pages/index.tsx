import Services from '../components/services';
import Layout from '../components/layout';
import Header from '../components/logo';
import RecentPosts from '../components/recent-posts';
import { getAllPosts } from '../utils/api';

const Home = ({ allPosts }) => (
  <Layout pageTitle="Home" description="Home">
    <Header />
    <Services />
    <RecentPosts allPosts={allPosts} />
  </Layout>
);

export default Home;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPosts(preview)) ?? [];
  return {
    props: { allPosts },
  };
}
