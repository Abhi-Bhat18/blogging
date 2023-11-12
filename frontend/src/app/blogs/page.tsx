"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
});

import { posts, Post } from "@/static/postsdata";
interface PostCardProps {
  imgUrl: string;
  metaDesc: string;
  title: string;
  postId: string;
}
const PostCards: React.FC<PostCardProps> = ({
  imgUrl,
  metaDesc,
  title,
  postId,
}) => {
  return (
    <Link
      href={""}
      className="flex m-5 bg-gray-900 justify-center rounded-md"
    >
      <div className="basis-[40%]">
        <img
          className="object-cover w-full h-[250px] rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="basis-[60%] flex flex-col justify-between leading-normal p-5">
        <h5 className="text-lg font-bold tracking-tight dark:text-white">
          {title}
        </h5>
        <p className=" font-normal dark:text-gray-400 line-clamp-5">
          {metaDesc}
        </p>
        <Link
          href={`../post/${postId}`}
          className="bg-[#ffd700] my-5 lg:my-0 w-32 px-5 py-1  rounded-sm shadow-lg text-[#7d0000] hover:animate-bounce "
        >
          Read More
        </Link>
      </div>
    </Link>
  );
};

const Blogs = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="text-white max-w-7xl space-y-10 lg:space-y-0 mx-auto my-10 py-5">
      <div className="flex space-x-5 py-10">
        <section className="basis-3/4">
          <h2
            className={`w-full ${michroma.className} text-center text-3xl underline font-bold font-space`}
          >
            Catch our latest blogs
          </h2>
          {posts.map((blog: Post, index) => {
            return (
              <PostCards
                key={index}
                imgUrl={blog.imgUrl}
                metaDesc={blog.description}
                title={blog.title}
                postId={"e23"}
              />
            );
          })}
        </section>
        <section className="basis-1/4">
          <div>Recommendation</div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
