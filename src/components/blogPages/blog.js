import React, { useContext } from "react";
import { BlogsContext } from "./Blogs";

const Blog = () => {
  const [val, setVal] = useContext(BlogsContext);
  console.log("Hello Miles iam blog");
  console.log(val);
  return (
    <div className="blogie">
      {val.map((blog) => {
        return (
          <div className="blog-big" key={blog.id}>
            <h1>{blog.header}</h1>

            <p>
              {blog.detail} - <span>{blog.username}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
