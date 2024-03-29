import React from "react";
import { handleScroll } from "../utils/handleScroll";

const Home = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex md:justify-around px-10 py-20 lg:mt-16 lg:flex-row flex-col items-center">
        <div className="justify-self-center md:w-1/2 lg:w-1/3 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there, I'm{" "}
            <span className="inline-block text-yellow-300">Nawaz</span>
          </h2>
          <p className="text-white mb-8 text-base md:text-lg">
            I'm a Full Stack Web Developer.
          </p>
          <div className="flex justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/drive/folders/1A6pzD7WIt99v-vbEtiJ7Iul3KuqSvTDv?usp=share_link"
              className="inline-flex items-center h-14 px-6 py-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-300"
            >
              My Resume
            </a>
            <a
              href="#projects"
              onClick={handleScroll}
              className="ml-4 inline-flex items-center h-14 px-6 py-3 font-medium tracking-wide transition duration-200 shadow-md text-gray-400 bg-gray-800 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="justify-self-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="myicon.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
