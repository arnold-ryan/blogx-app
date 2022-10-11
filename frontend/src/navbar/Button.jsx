import React from "react";

export const ButtonSignUp = (props) => {
  return (
    <a
      href={props.link}
      aria-label={props.label}
      title={props.title}
      className="inline-flex items-center justify-center h-8 px-4 tracking-wide text-gray-100 transition duration-200 rounded-full shadow-md bg-gray-900 outline outline-offset-2 outline-2 hover:outline-purple-300 hover:text-purple-300 focus:shadow-outline focus:outline-none"
    >
      {props.name}
    </a>
  );
};

export const ButtonSignIn = (props) => {
  return (
    <a
      href={props.link}
      aria-label={props.label}
      title={props.title}
      className="inline-flex items-center justify-center h-10 px-6 tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-gray-900 hover:text-purple-300"
    >
      {props.name}
    </a>
  );
};

export const MenuButton = (props) => {
  return (
    <button
      aria-label="Open Menu"
      title="Open Menu"
      className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
      onClick={props.handleClick}
    >
      <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
        />
        <path
          fill="currentColor"
          d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
        />
        <path
          fill="currentColor"
          d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
        />
      </svg>
    </button>
  );
};

export const MobileButton = (props) => {
  return (
    <button
      aria-label="Close Menu"
      title="Close Menu"
      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-purple-300 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      onClick={props.handleClick}
    >
      <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
        />
      </svg>
    </button>
  );
};
