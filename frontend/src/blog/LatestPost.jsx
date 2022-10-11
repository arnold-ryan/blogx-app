import React from "react";

export const LatestPost = (props) => {
  return (
    <div className="grid py-8 sm:grid-cols-4">
      <div className="mb-4 sm:mb-0">
        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <a
            href={props.link}
            className="transition-colors duration-200 text-purple-500 hover:text-purple-400"
            aria-label={props.category}
          >
            {props.category}
          </a>
          <p className="text-gray-600">{props.date}</p>
        </div>
      </div>
      <div className="sm:col-span-3 lg:col-span-2">
        <div className="mb-3">
          <a
            href={props.link}
            aria-label="Article"
            className="inline-block text-gray-900 transition-colors duration-200 hover:text-gray-800"
          >
            <h2 className="text-3xl text-gray-90 font-extrabold leading-none sm:text-4xl xl:text-4xl">
              {props.title}
            </h2>
          </a>
        </div>
        <div className="text-gray-700 overflow-hidden text-ellipsis line-clamp-2">
          {props.text}
        </div>
      </div>
    </div>
  );
};
