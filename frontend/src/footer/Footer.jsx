import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-purple-300 lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 BlogX Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link to="/signin">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Write
              </a>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Sign in
              </a>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Sign up
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
