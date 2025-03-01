import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center text-white px-4">
      <div className="logo text-white text-2xl font-bold">
        <Link href="/">ShortURL</Link>
      </div>
      <ul className="flex justify-center items-center gap-4 text-lg">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shortner</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="border rounded-lg px-3 bg-purple-500 shadow-lg py-1 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="border rounded-lg px-3 bg-purple-500 shadow-lg py-1 font-bold">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
