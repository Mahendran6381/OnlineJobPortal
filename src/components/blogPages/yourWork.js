import React from "react";
import { useContext } from "react";
import { BlogsContext } from "./Blogs";

const YourWork = (username) => {
  const user = username.username;
  console.log(user);
  console.log(username);
  const [val, setVal] = useContext(BlogsContext);
  const [title, setTitle] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [content, setContent] = React.useState("");
  const hi = val;
  const pri = (e) => {
    console.log(val, setVal);
    e.preventDefault();
    hi.push({
      id: Math.random,
      username: user,
      header: title,
      detail: content,
    });
    setVal(hi);
    setShow(!show);
  };
  console.log(val);
  return (
    <>
      <div className="blog-entry">
        <h3>Add Work</h3>
        <input
          className="title-box"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <h3>Enter YOur Contents</h3>
        <input
          className="content-box"
          onChange={(e) => setContent(e.target.value)}
        ></input>
      </div>
      <div className="post">
        <button onClick={(e) => pri(e)}>Submit</button>
        {show ? <p>Blog submitted</p> : <p>Click the button.To submit </p>}
      </div>
    </>
  );
};

export default YourWork;
