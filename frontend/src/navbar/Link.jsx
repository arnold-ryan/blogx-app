import React from "react";

export const NavLink = (props) => {
  return (
    <a
      href={props.link}
      aria-label={props.label}
      title={props.title}
      className="text-sm tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-300"
    >
      {props.name}
    </a>
  );
};

export const LogoLink = () => {
  return (
    <a
      href="/"
      aria-label="Company"
      title="Company"
      className="inline-flex items-center mr-8"
    >
      <span className="text-xl tracking-wide text-gray-100 uppercase font-bold">
        BlogX
      </span>
    </a>
  );
};

export const MobileLogo = () => {
  return (
    <a
      href="/"
      aria-label="BlogX"
      title="BlogX"
      className="inline-flex items-center"
    >
      <span className="text-xl tracking-wide text-gray-100 uppercase font-bold">
        BlogX
      </span>
    </a>
  );
};

export const MobileSignUp = () => {
  return (
    <a
      href="/"
      className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-gray-100 transition duration-200 rounded shadow-md outline hover:text-purple-300 focus:shadow-outline focus:outline-none"
      aria-label="Sign up"
      title="Sign up"
    >
      Sign up
    </a>
  );
};

export const MobileSignIn = () => {
  return (
    <a
      href="/"
      aria-label="Sign in"
      title="Sign in"
      className="tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-300"
    >
      Sign in
    </a>
  );
};

export const SearchLink = () => {
  return (
    <div className="hidden relative lg:block">
      <label className="sr-only" htmlFor="search">
        {" "}
        Search{" "}
      </label>

      <input
        className="w-full h-10 pl-4 pr-10 text-sm bg-gray-100 border-none rounded-full shadow-sm sm:w-56"
        id="search"
        type="search"
        placeholder="Search blog..."
      />

      <button
        className="absolute p-2 text-gray-900 transition -translate-y-1/2 rounded-full hover:text-purple-300 bg-gray-50 top-1/2 right-1"
        type="button"
        aria-label="Submit Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export const AvatarLink = () => {
  return (
    <a href="/" aria-label="User" className="inline-block mr-8">
      <img
        alt="avatar"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="object-cover w-10 h-10 rounded-full shadow-sm"
      />
    </a>
  );
};
