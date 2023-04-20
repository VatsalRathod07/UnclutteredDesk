import React from "react";
import moment, { months } from "moment";
import Link from "next/link";
import { slice } from "lodash";

const PostCard = ({ post }) => {

  return (
    <div className="bg-darkwhite-0 bg-opacity-40 rounded-md p-0 max-w-screen-mobile lg:p-8 pb-12 mb-8">
       {/* <Link href={`/post/${post.slug}`}> */}
      <div className="relative overflow-hidden shadow-sm pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="featured-img object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg hover:scale-105 transition ease-in " 
        />
      </div>
      <h2 className="transition duration-200 text-center mb-4 cursor-pointer text-ligthblack-0 hover:text-black text-2xl font-bold">
        {/* <Link href={`/post/${post.slug}`}> */}
          {post.title}
        {/* </Link> */}
      </h2>
      {/* <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
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
      </div> */}
      <p className="text-ligthblack-0 text-base text-center">{post.excerpt}</p>


      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="view-btn inline-block bg-black text-white text-lg rounded-sm mt-4 px-6 py-1.5">
          View Guide
          </span>
        </Link>
      </div>  

      {/* </Link> */}
    </div>

    // <div className="container mx-auto px-10">
    //   <Link href={`/post/${post.slug}`}>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-7">
    //         <div key={post.id} className="rounded-lg shadow-sm overflow-hidden">
    //           <img src={post.featuredImage.url} alt={post.title} className=" cursor-pointer" />
    //           <div className="p-4">
    //           <p className="text-2xl font-bold mb-2">{post.title}</p>
    //           <p className="text-ligthblack-0 text-base">{post.excerpt.slice(0, 100)}...</p>
    //         </div>
    //         </div>
    //     </div>
    //   </Link>
    // </div>

  )
};

export default PostCard