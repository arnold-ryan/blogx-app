import React from "react";
import { PostTag } from "./PostTag";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Post = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    };
    getPost();
  }, [postId]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <article className="px-4 py-4 ml-20 mx-auto lg:max-w-7xl">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4">
        {/*w-full mx-auto md:w-3/4 lg:w-1/2 */}
        {post.photo && (
          <img
            src={post.photo}
            className="object-cover w-full h-64 bg-center rounded-lg"
            alt=""
          />
        )}
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          {post.categories[0]}
        </p>
        <div className="flex justify-between">
          <h1
            className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            {post.title}
          </h1>
          <div className="flex items-center space-x-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex mb-6 space-x-2">
          {post.categories.map((category) => (
            <PostTag name={category.name} />
          ))}
        </div>
        <a className="flex items-center text-gray-700" href="/">
          <div className="avatar">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt={post.username}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">
              {post.username}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toDateString()}
            </p>
          </div>
        </a>
      </div>

      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">{post.description}</div>
    </article>
  );
};
