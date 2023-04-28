import React from "react";
import moment, { months } from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {

  return (
    <div className="bg-darkwhite-0 bg-opacity-40 rounded-md p-0 max-w-screen-mobile lg:p-8 pb-12 mb-8">
       {/* <Link href={`/post/${post.slug}`}> */}
      <div className="relative overflow-hidden shadow-sm pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="featured-img object-fit absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg hover:scale-105 transition ease-in " 
        />
      </div>
      <h2 className="transition duration-200 text-center mb-4 cursor-pointer text-ligthblack-0 hover:text-black text-2xl font-bold post-title">
          {post.title}
      </h2>
      <p className="text-ligthblack-0 text-base text-center post-excerpt">{post.excerpt}</p>


      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="view-btn inline-block bg-black text-white text-lg rounded-sm mt-4 px-6 py-1.5">
          View Guide
          </span>
        </Link> 
      </div>  

      {/* </Link> */}
    </div>
  )
};

export default PostCard