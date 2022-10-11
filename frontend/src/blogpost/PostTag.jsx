import React from "react";

export const PostTag = (props) => {
  return (
    <a
      className="text-gray-900 bg-purple-100 badge hover:bg-purple-200"
      href="/"
    >
      {props.name}
    </a>
  );
};
