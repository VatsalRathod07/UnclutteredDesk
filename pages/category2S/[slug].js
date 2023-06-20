// import React from 'react';
// import { useRouter } from 'next/router';

// import { getCategories2, getCategory2Post } from '../../services';
// import { PostCard, Loader, Tags } from '../../components';

// const Category2Post = ({ posts }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <Loader />;
//   }

//   return (
//     <div className="container mx-auto px-10 mb-8">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//         <div className="col-span-1 lg:col-span-8">
//           {posts.map((post, index) => (
//             <PostCard key={index} post={post.node} />
//           ))}
//         </div>
//         <div className="col-span-1 lg:col-span-4">
//           <div className="relative lg:sticky top-8">
//             <Tags />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Category2Post;

// // Fetch data at build time
// export async function getServerSideProps({ params }) {
//   const posts = await getCategory2Post(params.slug);

//   return {
//     props: { posts },
//   };
// }

// // Specify dynamic routes to pre-render pages based on data.
// // The HTML is generated at build time and will be reused on each request.
// // export async function getStaticPaths() {
// //   const categories = await getCategories();
// //   return {
// //     paths: categories.map(({ slug }) => ({ params: { slug } })),
// //     fallback: true,
// //   };
// // }