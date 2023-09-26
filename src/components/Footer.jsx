import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { HashLink as HLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="px-8 md:px-48 w-full relative flex flex-col items-center justify-center py-8">
      <h2 className="font-bold mb-2">Victor Ojedeji</h2>
      <ul className="flex items-center gap-8 capitalize">
        <HLink to="#hero">
          <li>Home</li>
        </HLink>
        <HLink to='#about_me'>
          <li>About</li>
        </HLink>
        <HLink to='#portfolio'>
          <li>Portfolio</li>
        </HLink>
      </ul>

      <HLink to="#hero">
        <BiSolidUpArrow className="absolute bottom-8 right-8 lg:right-48" />
      </HLink>
    </footer>
  );
}
