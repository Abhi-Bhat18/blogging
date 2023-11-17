"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  title: string;
  metaDesc: string;
  imgUrl: string;
  content: string;
  postId: string;
}
import blog_url from "../../../../public/dan-lefebvre-RfUy0XMCkhQ-unsplash.jpg";
import { useRouter } from "next/navigation";

const img =
  "https://unsplash.com/photos/black-computer-keyboard-on-brown-wooden-desk-RfUy0XMCkhQ";

const Article: React.FC<Props> = ({
  title,
  metaDesc,
  imgUrl,
  content,
  postId,
}) => {

  const router = useRouter();

  return (
    <article
      className={`flex flex-col lg:flex-row bg-black ${dm.className} text-white`}
    >
      <div className="p-5 text-left lg:flex-[0.5] space-y-5">
        <h2 className="text-2xl" onClick={() => router.push("/blogs")}>
          The Ultimate Guide on How to Become a Software Developer
        </h2>
        <p className="mb-3 font-light leading-7 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left text-base">
          Embark on a rewarding journey to become a software developer with our
          comprehensive guide. Discover essential steps, key skills, and
          valuable insights to kickstart your career in programming. Explore the
          world of coding and unlock the door to exciting opportunities in the
          tech industry.
        </p>
        <img
          src={blog_url.src}
          alt="matrix image"
          className="shadow-md rounded-md w-full object-cover"
        />
      </div>
      <div className="p-5 lg:flex-[0.5] space-y-3 text-justify">
        <div className="font-light line_clamp_25 text-md space-y-2 leading-7 indent-16">
          <p>
            Once you've laid the groundwork, it's time to choose your path
            within the vast landscape of software development. Whether it's web
            development, mobile app creation, or diving into data science,
            identify your passion and align your learning with your career
            aspirations. Each specialization comes with its unique set of skills
            and knowledge requirements.
          </p>
          <br />
          <p>
            Mastery of programming languages is at the core of software
            development. Begin with versatile languages like Python, JavaScript,
            or Java. Platforms such as Codecademy and Coursera provide excellent
            resources to hone your coding skills. Building a strong foundation
            involves practical experience — start with small projects and
            gradually increase their complexity. Building a portfolio showcasing
            your projects will serve as a tangible representation of your skills
            when seeking employment opportunities.
          </p>
          <br />
          <p>
            Engaging with the community is a crucial aspect of professional
            growth. Join coding communities, participate in forums, and attend
            meetups to connect with fellow developers. Networking provides
            valuable insights, mentorship opportunities, and potential job
            leads. Platforms like GitHub and Stack Overflow are excellent spaces
            to showcase your skills and learn from others. As the tech industry
            is in a constant state of evolution, staying updated about the
            latest trends, tools, and frameworks is essential. Follow industry
            blogs, participate in online forums, and subscribe to newsletters to
            stay informed.
          </p>
        </div>
        <br />
        <div>
          <Link
            href={`post/${postId}`}
            className="bg-[#ffffff] px-5 py-2 font-bold  rounded-full shadow-lg text-[#7d0000]"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
