import React, { createContext, useState } from "react";
import Blog from "./blog";

export const BlogsContext = createContext();

export const Blogs = (props) => {
  const [Blogs, setBlogs] = useState([
    {
      id: 1,
      username: "Miles",
      header: "Free Course from microsoft",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
    {
      id: 2,
      username: "Miles",
      header: "Free Course from microsoft",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
    {
      id: 3,
      username: "Miles",
      header: "Free Course from microsoft",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
    {
      id: 4,
      header: "Free Course from microsoft",
      username: "Miles",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
    {
      id: 5,
      username: "Miles",
      header: "Free Course from microsoft",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
    {
      id: 6,
      username: "Miles",
      header: "Free Course from microsoft",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi sem, cursus non pulvinar ac, finibus in mi. Orci varius natoque penatibus et magnis dis.",
    },
  ]);
  return (
    <BlogsContext.Provider value={[Blogs, setBlogs]}>
      {props.children}
    </BlogsContext.Provider>
  );
};
