import { request, gql } from 'graphql-request';

const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clfm2rma40rtl01t5ftggari7/master";


export const getPosts = async () => {

  const query = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
    categories {
      name
      slug
    }
    category2S {
      name
      slug
    }
  }
  
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

// export const getCategories2 = async () => {
//   const query = gql`
//     query GetCategories2 {
//       category2S {
//         name
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query);

//   return result.category2S; // Corrected property name
// };

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};


export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 2
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
    `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}

export const submitNewsLetter = async (obj) => {
  const result = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}

export const getNewsLetters = async () => {
  const query = gql`
  query GetNewsletter{
    newsletters{
      email
    }
  }
  `;

  const result = await request(graphqlAPI, query);

  return result.newsLetters;
};


export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

// export const getCategory2Post = async (slug) => {
//   const query = gql`
//     query GetCategory2Post($slug: String!) {
//       postsConnection(where: {category2S_some: {slug: $slug}}) {
//         edges {
//           cursor
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             category2S {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.postsConnection.edges;
// };