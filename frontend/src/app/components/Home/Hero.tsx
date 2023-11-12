import React from "react";
import Link from "next/link";
import "./home.styles.css";
import { michroma } from "@/app/layout";

const Hero = () => {
  return (
    <div className={`w-full flex justify-start h-[90vh]`}>
      <div className="basis-1/2 my-5 h-[60vh] space-y-5 flex flex-col justify-center ">
        <h1 className={`text-xl lg:text-2xl font-space ${michroma.className}`}>
          Mastering the art of seamless development
        </h1>
        <h3 className={`text-xl`}>
          Stay Ahead of the Curve with the Latest Software Trends and Tools
        </h3>
        <p className="text-justify hidden lg:flex text-md">
          By keeping up with the latest software trends and tools, you can
          ensure that your development process is optimized for efficiency,
          reliability, and scalability. Our tech blog is dedicated to bringing
          you in-depth reviews and tutorials on the most innovative and
          cutting-edge solutions.
        </p>
        <div className="space-x-1 lg:space-x-5 text-sm">
          <Link
            href="/blogs"
            className="bg-[#ffd700] px-3 lg:px-5 py-1 rounded-xl shadow-lg text-[#7d0000]"
          >
            Start reading
          </Link>
          <button className="bg-[#ffd700] px-3 lg:px-5 py-1 rounded-xl shadow-lg text-[#7d0000] ">
            Join the community
          </button>
        </div>
      </div>
      <div className="basis-1/2">

      </div>
    </div>
  );
};

export default Hero;
