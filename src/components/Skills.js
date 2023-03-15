import React from "react";
import skills from "../utils/skills";

export default function Skills() {
  return (
    <section
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="skills"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">My Skills</span>
          </span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-black mx-auto sm:w-24 sm:h-24">
              <i className={skill.icon} aria-hidden="true"></i>
            </div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">
              {skill.title}
            </h6>
            {skill.skills.map((item, index) => (
              <p
                key={index}
                className="max-w-md mb-3 text-sm text-white mx-auto"
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
