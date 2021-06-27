import React, { useState } from "react";
import fire from "../../fire";

const Nav = (props) => {
  const setLoginNeeded = props.setLoginNeeded;
  const loginNeeded = props.loginNeeded;
  console.log(setLoginNeeded, loginNeeded);
  const handleSignOut = () => {
    fire.auth().signOut();
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      aria-label="Fifth navbar example"
      style={{ boxShadow: "10px 10px 10px #c4c4c2" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Your Application
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown05"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FeedBack
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bug
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={() => handleSignOut()}
              className="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>
          </form>
          <button
            className="btn btn-outline-primary ml-1"
            id="ml-1"
            type="submit"
            onClick={() => setLoginNeeded(!loginNeeded)}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
