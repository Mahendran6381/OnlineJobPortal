import React, { useState } from "react";
import "./../sass/main.css";
import AddWork from "./blogPages/yourWork";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./blogPages/blog";
import { Blogs } from "./blogPages/Blogs";

const Base = (props) => {
  const [show, setShow] = useState(true);
  const signout = props.signOut;
  const username = props.username;
  return (
    <Router>
      <main>
        <div className="glass ni">
          <div className="nav-pos">
            <div className="wrapper">
              <div className="nav">
                <div className="nav-item btn-cls">
                  <a href="#">
                    <div className="btn red" />
                  </a>
                  <a href="#">
                    <div className="btn yel" />
                  </a>
                  <a href="#">
                    <div className="btn green" />
                  </a>
                </div>
                <div className="nav-item lis">
                  <li className="cls" onClick={() => setShow(!show)}>
                    Blogs
                  </li>
                  <li className="cls" onClick={() => setShow(!show)}>
                    Your Work
                  </li>
                </div>
                <div className="nav-item serch">
                  <input type="text" placeholder="Search" />
                </div>
                <div className="btn-logout">
                  <p className="Logout-btn" onClick={() => signout()}>
                    Log out
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="base">
            <Route path="/blog"></Route>
            <div>blog</div>
            <Blogs>
              {show ? (
                <AddWork username={username}></AddWork>
              ) : (
                <div>
                  <Blog username={username}></Blog>
                </div>
              )}
            </Blogs>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default Base;
