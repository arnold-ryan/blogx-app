import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import { Post } from "../blogpost/Post";
import axios from "axios";
import { Navbar } from "../navbar/Navbar";
import { useEffect, useState } from "react";

export const VisitorPost = () => {
  // const location = useLocation();
  // const postId = location.pathname.split("/")[2];
  const { postId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    };
    getPost();
  }, [postId]);

  console.log(post);

  return (
    <>
      <Navbar />
      <Post post={post} />
    </>
  );
};
