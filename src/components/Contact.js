import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto sm:flex-nowrap flex-wrap justify-center">
        <div className=" bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center sm:flex-nowrap relative"></div>
        <form
          netlify
          name="contact"
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">Stay Connected</p>
          <div className="relative mb-4">
            <div className="flex">
              <a
                href="https://www.github.com/shaikahmadnawaz"
                className="text-blue-500 mr-6"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com/shaikahmadnawaz"
                className="text-blue-500 mr-6"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/shaik-ahmad-nawaz-894425239/"
                className="text-blue-500 mr-6"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/shaikahmadnawaz"
                className="text-blue-500 mr-6"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
