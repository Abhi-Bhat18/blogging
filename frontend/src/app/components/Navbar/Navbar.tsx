import React from "react";
import NavLink from "./Navlink";
import { michroma } from "@/app/layout";

const Navbar = () => {
  return (
    <nav
      className={`max-w-7xl sticky top-0 z-50 bg-[#0B0c10] mx-auto py-5 flex w-full justify-between ${michroma.className}`}
    >
      <div>Logo</div>

      <div className="flex space-x-5 items-center">
        <ul className="flex space-x-5 text-lg">
          <NavLink href="/" navigation="home" />
          <NavLink href="/blogs" navigation="blogs" />
          <NavLink href="/about" navigation="about" />
          <NavLink href="/contact" navigation="contact" />
        </ul>
        <div className="">
          <button className="px-2 py-1 text-[#0B0c10] rounded-md bg-[#66fcf1]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
