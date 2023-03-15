import React from "react";
import projects from "../utils/projectsList";

const Projects = () => {
  return (
    <section id="projects" className=" bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            Projects
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md"
            >
              <img
                src={project.image}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 flex flex-col bg-black flex-1">
                <h1 className="inline-block mb-3 text-2xl font-bold leading-5">
                  {project.title}
                </h1>
                <h2 className="inline-block text-white mb-3 text-xl font-bold leading-5">
                  {project.subTitle}
                </h2>
                <p className="mb-2 text-white">{project.description}</p>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <h2 className="inline-block text-white mb-3 text-xl font-bold leading-5">
                    Technologies:
                  </h2>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex px-4 py-2 items-center transform font-semibold border transition duration-300 hover:scale-105 shadow hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex bg-yellow-400 hover:bg-yellow-300 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-black"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
