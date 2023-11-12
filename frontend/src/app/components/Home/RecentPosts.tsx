"use client";
import React, { useState, useEffect } from "react";

import Article from "./Article";
import Link from "next/link";
import { Michroma } from "next/font/google";
import PostCard from "./PostCard";

import { Post, posts } from "@/static/postsdata";
const michroma = Michroma({ subsets: ["latin", "latin-ext"], weight: ["400"] });

const post_img =
  "https://github-production-user-asset-6210df.s3.amazonaws.com/86356896/282035691-7988448f-bb09-4ad4-bc2e-3482bcefb78f.jpg";


interface SidenavProps {
  imgUrl: string;
  title: string;
  postId: string;
}

const AsideNav: React.FC<SidenavProps> = ({ postId, imgUrl, title }) => {
  return (
    <Link
      href={`post/${postId}`}
      className="flex space-x-4 border-b-[1px] border-white pb-2"
    >
      <img src={imgUrl} alt="" className="w-28" />
      <div>
        <h5 className="line_clamp_3">{title}</h5>
      </div>
    </Link>
  );
};

const RecentPosts = () => {
//   const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // getPosts();
  }, []);

  return (
    <div className="w-full font-space2 flex flex-col justify-center items-center flex-wrap">
      <div className="flex flex-wrap w-full">
        <Article
          title={"Title"}
          metaDesc={"Meta description"}
          imgUrl={"Img url"}
          content={"Content"}
          postId={"Post id"}
        />
      </div>
      <div className="flex  justify-between items-center flex-wrap lg:px-5 my-5 space-y-5  py-5 rounded-md">
        <h2 className={`text-center pb-10 text-2xl w-full ${michroma.className}`}>
          Trending Software Discussions
        </h2>
        {posts.map((blog: Post, index) => 
          (
            <PostCard
              key={index}
              title={blog.title}
              desc={blog.description}
              imgUrl={blog.imgUrl}
              tags={blog.tags}
              post_id={"342"}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RecentPosts;
