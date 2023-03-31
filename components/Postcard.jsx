import React from "react";
import moment, { months } from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-darkwhite-0 bg-opacity-50 rounded-md p-0 max-w-screen-mobile lg:p-8 pb-12 mb-8">
       <Link href={`/post/${post.slug}`}>
      <div className="relative overflow-hidden shadow-sm pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" 
        />
      </div>
      <h2 className="transition duration-200 text-center mb-8 cursor-pointer text-ligthblack-0 hover:text-black text-2xl font-extrabold">
        {/* <Link href={`/post/${post.slug}`}> */}
          {post.title}
        {/* </Link> */}
      </h2>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <img 
            src={post.author.photo.url} 
            alt={post.author.name} 
            height="35px"
            width="35px"
            className="align-middle rounded-full"
          />
        <div className="text-start">
        <p className="inline align-middle text-ligthblack-0 text-sm font-signature font-semibold ml-2">{post.author.name}</p>
        <p className="text-sm font-signature text-ligthblack-0 ml-2">
          {moment(post.createdAt).format('MMM DD, YYYY')} 
        </p>
          </div>
        </div> 
      </div>
      <p className="text-center text-base text-ligthblack-0 font-normal px-4 lg:px-20">
        {post.excerpt}
      </p>

      {/* <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <--- Read More Button ---> 
          <span className="transition duration-200 transform hover:translate-y-1 inline-block bg-ligthblack-0 text-white text-lg rounded-md font-semibold mt-3 px-7 py-2">
            Read More 
          </span>
        </Link>
      </div> */} 
      
      </Link>
    </div>
  )
};

export default PostCard