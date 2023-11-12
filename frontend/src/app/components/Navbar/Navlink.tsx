import React from "react";
import "./navbar.styles.css";
import Link from "next/link";
interface Props {
  navigation: string;
  href: string;
}

const NavLink: React.FC<Props> = ({ navigation, href }) => {

  return (
    <Link href={href} className={`nav-link cursor-pointer capitalize`}>
      {navigation}
    </Link>
  );
};

export default NavLink;
