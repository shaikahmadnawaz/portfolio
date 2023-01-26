import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header className="bg-slate-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Nawaz
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            Home
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href="https://shaikahmadnawaz.hashnode.dev/"
            className="mr-5 hover:text-white"
          >
            Blogs
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
