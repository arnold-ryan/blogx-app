import React from "react";
import { LatestBlogs } from "../blog/LatestBlogs";
import { RecomBlog } from "../blog/RecomBlog";
import { Sidebar } from "../sidebar/Sidebar";

export const User = () => {
  return (
    <>
      <Sidebar />
      <section className="ml-20">
        <RecomBlog />
        <LatestBlogs />
      </section>
    </>
  );
};
