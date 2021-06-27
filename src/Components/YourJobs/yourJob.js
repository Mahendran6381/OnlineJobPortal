import React from "react";
import Nav from "./nav";
import MainContent from "./main-content";
const YourJob = (props) => {
  const setLoginNeeded = props.setLoginNeeded;
  const loginNeeded = props.loginNeeded;
  console.log(props);
  return (
    <>
      <Nav loginNeeded={loginNeeded} setLoginNeeded={setLoginNeeded}></Nav>
      <MainContent></MainContent>
    </>
  );
};
export default YourJob;
