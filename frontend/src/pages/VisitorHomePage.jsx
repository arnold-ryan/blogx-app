import React from "react";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { Visitor } from "../visitor/Visitor";
import { VisitorPost } from "../visitor/VisitorPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../blogpost/Post";

export const VisitorHomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Visitor posts={posts} />} />
        <Route path="/write" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
