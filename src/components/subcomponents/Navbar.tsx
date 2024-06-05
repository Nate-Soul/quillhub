"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const currentUrl = usePathname();

  const navLinks = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Blog",
        url: "/blog"
    },
    {
        text: "About",
        url: "/#aboutUs"
    },
    {
        text: "Community",
        url: "/community"
    }
  ];

  return (
    <nav className="bg-primary-900 text-white py-4">
      <div className="container flex items-center justify-between gap-x-3">
        <Logo/>
        <ul className="flex items-center gap-x-5 text-lg text-light-300">
            {navLinks?.map((navLink, navLinkIndex) => (
                <li>
                    <Link href={navLink.url} key={navLinkIndex} className={`${currentUrl === navLink.url ? 'text-white border-b-[3px] border-primary-500 hover:text-primary-300' : 'hover:text-white'}`}>{navLink.text}</Link>
                </li>
            ))}
        </ul>
        <div className="flex items-center gap-x-14 text-lg text-light-300">
          <ul className="flex items-center gap-x-5">
            <li>
              <span className="bi-search"></span>
            </li>
            <li>
              <span className="bi-bell"></span>
            </li>
          </ul>
          <div className="flex items-center gap-x-4 border-[0.5px] rounded-2xl h-max">
            <Link href="/login" className="btn bg-transparent text-white py-1 px-4 rounded-2xl">
              Login
            </Link>
            <Link href="/signup" className="btn btn-primary-500 font-medium py-1 px-4 rounded-2xl">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
