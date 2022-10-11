import React from "react";
import { Post } from "../blogpost/Post";
import { Sidebar } from "../sidebar/Sidebar";

export const BlogPostPage = () => {
  return (
    <section className="inline-flex">
      <Sidebar />
      <Post />
    </section>
  );
};
