import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "../user/User";
import { BlogPostPage } from "./BlogPostPage";
import { NotFound } from "./NotFound";
import { SettingsPage } from "./SettingsPage";
import { WritePage } from "./WritePage";

export const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/posts/:postId" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
