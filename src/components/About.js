import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-purple-500">ERIK CORREA</span>.
            <br className="hidden lg:inline-block" />software engineer
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello! I'm Erik Correa, a Chicago based software engineer (willing to relocate). I am experienced in full stack development. My skills allow me to tackle complex programming problems presented on the job. My love for programming stems from my passion to know how things work, how to build them, and how to fix them. Contact me to get started working together!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}