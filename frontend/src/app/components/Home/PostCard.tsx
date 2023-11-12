import React from "react";

import Link from "next/link";
import Tilt from 'react-parallax-tilt';

interface Props {
  imgUrl: string;
  desc: string;
  post_id: string;
  title: string;
  tags: string[];
}
const PostCard: React.FC<Props> = ({ imgUrl, desc, post_id, title, tags }) => {
  console.log(tags);
  return (
   

    <Link
      href={`post/${post_id}`}
      className="lg:max-w-[350px] bg-gray-900 rounded-[10px] overflow-hidden 
     "
    >
      <Tilt 
      tiltMaxAngleY = {10} tiltAxis="y"
  
       glareEnable = {true} transitionSpeed={5000} scale={1.04}>
      <img className="w-full h-[225px] border-b-[1px] border-[#e5e5e5]" src={imgUrl} alt="Sunset in the mountains" />
      <div className="px-2 lg:px-6 py-4 bg-white">
        <div className="font-bold  text-black text-xl mb-2 line_clamp_4">{title}</div>
        <p className="text-sm text-black line-clamp-5">{desc}</p>
      </div>

      {/* ------------TAGS--------------- */}
      <div className="px-6 pt-4 pb-2 bg-white">
        {tags.map((tag: string, index) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
      </Tilt>
    </Link>

 

  );
};

export default PostCard;
