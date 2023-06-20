import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  const isNewPost = (post) => {
    const postDate = moment(post.publishedAt);
    const currentDate = moment();
    const daysSincePublication = currentDate.diff(postDate, 'days');
    return daysSincePublication <= 3 && daysSincePublication >= 0; // Consider posts published within the last 3 days as new
  };

  const sortPosts = (posts) => {
    // Sort posts by published date in descending order (newest first)
    posts.sort((a, b) => moment(b.publishedAt).diff(moment(a.publishedAt)));

    return posts.map((post) => ({
      ...post,
      isNew: isNewPost(post),
    }));
  };

  const sortedPosts = sortPosts(relatedPosts);

  return (
    <div className="bg-darkwhite-0 bg-opacity-30 rounded-lg p-8 mb-3">
      <h3 className="text-base mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {sortedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none relative">
            <img src={post.featuredImage.url} alt={post.title} height="60px" width="60px" className="align-middle rounded-sm" />
            {post.isNew && (
              <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-ligthblack-0 text-white font-signature text-xs font-normal px-2 py-1 rounded-full">
                New
              </div>
            )}
          </div>
          <div className="flex-grow ml-4">
            <Link href={`/post/${post.slug}`} className="text-ligthblack-0 hover:text-black text-sm font-medium">
              {post.title.slice(0, 50)}...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
