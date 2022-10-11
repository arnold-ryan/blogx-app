import React from "react";

export const RecomPost = (props) => {
  return (
    <div className="flex">
      <div className="pt-1 mr-6 text-center">
        <div className="px-2 pb-1 mb-1 border-b border-gray-400">
          <p className="text-sm text-blue-gray-700">{props.month}</p>
        </div>
        <div className="px-2">
          <p className="text-lg font-bold">{props.day}</p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          <a
            href="/"
            className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
            title="Delevopment"
          >
            {props.tag}
          </a>
        </div>
        <div className="mb-2">
          <a
            href="/"
            aria-label="Article"
            className="inline-block text-xl font-bold leading-6 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {props.title}
          </a>
        </div>
        <div className="mb-5 text-gray-700 overflow-hidden text-ellipsis line-clamp-3">
          {props.text}
        </div>
        <div className="flex items-center">
          <a href="/" aria-label="Author" title="Author" className="mr-3">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {props.name}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
