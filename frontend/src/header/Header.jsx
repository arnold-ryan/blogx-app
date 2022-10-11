import React from "react";
import { Link } from "react-router-dom";
import { ButtonSignUp } from "../navbar/Button";

export const Header = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative text-center max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl">
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-gray-100 sm:leading-none">
            Keeping you <br className="hidden md:block" />
            up to date{" "}
          </h2>
          <p className="mb-8 text-base font-light tracking-wide text-gray-100 md:text-lg">
            All the latest stories, news articles, blog pieces in one place.
            Helping you stay abreast with the latest blogs.
          </p>
          <Link to="/SignUp">
            <ButtonSignUp
              name="Get Started"
              link="#"
              label="get started"
              title="get started"
            />
          </Link>
          <a
            href="#recommended"
            aria-label="Scroll down"
            className="flex items-center justify-center mt-24 w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full animate-bounce hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
