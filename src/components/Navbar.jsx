import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="w-full min-h-[80px] flex items-center px-48 py-2">
      <h1 className="flex items-center">
        Victor <span className="ml-2">Ojedeji</span>.
      </h1>

      <ul className={`lg:flex lg:items-center lg:ml-auto lg:gap-8 lg:capitalize ${isNavOpen ? 'hidden' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      <div className="flex items-center">
        <RxHamburgerMenu
          className="text-3xl lg:hidden cursor-pointer"
          onClick={toggleNav}
        />
      </div>

      {isNavOpen && (
        <nav
          className="bg-white w-[300px] h-[100vh] fixed left-0 top-0 p-4 block lg:hidden"
          style={{ zIndex: 100 }}
        >
          <div className="h-full relative flex items-center justify-center">
            <AiOutlineClose
              className="absolute top-4 right-4 text-3xl cursor-pointer"
              onClick={closeNav}
            />
            <ul className="capitalize">
              <li className="mb-2 text-3xl">Home</li>
              <li className="mb-2 text-3xl">About</li>
              <li className="mb-2 text-3xl">Portfolio</li>
              <li className="mb-2 text-3xl">Skills</li>
              <li className="mb-2 text-3xl">Contact</li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
