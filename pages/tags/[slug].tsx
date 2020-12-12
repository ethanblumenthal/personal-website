// import Head from 'next/head';
// import styled from 'styled-components';

// import Layout from '../../components/layout';
// import Posts from '../../components/posts';
// import { PageHeader } from '../../elements/text';
// import { getAllPosts } from '../../api/contentful';

// const Header = styled.header`
//   text-align: center;
// `;

// const Tags = ({ allPosts }) => {
//   const taggedPosts = [];
//   allPosts.forEach(({ tags }) => {
//     tags.forEach((tag) => {
//       uniqueTags.add(tag);
//     });
//   });

//   return (
//     <Layout>
//       <Head>
//         <title>Tags</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Header>
//         <PageHeader>
//           {taggedPosts.length} Posts tagged with "{}"
//         </PageHeader>
//       </Header>

//       <Posts allPosts={taggedPosts} />
//     </Layout>
//   );
// };

// export default Tags;

// export async function getStaticProps({ preview = false }) {
//   const allPosts = (await getAllPosts(preview)) ?? [];
//   return {
//     props: { allPosts },
//   };
// }
