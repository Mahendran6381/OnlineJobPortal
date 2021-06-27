import React, { useState, Fragment, useEffect } from "react";
import Base from "./components/base";
import SignIn from "./components/SignIn Page/signin";
import fire from "./fire";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  //states for firebase-authetication
  const [logErr, setLogErr] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [hasUser, setHasUser] = useState(false);
  const [hasAccount, setHasAcoount] = useState(false);
  const [email, setEmail] = useState("");
  const [ifUser, setIfUser] = useState(false);
  const [username, setUserName] = useState("");

  //clear the previous details
  const cleraUser = () => {
    setEmail("");
    setPassword("");
    setHasUser(!hasUser);
  };

  const handleLogin = (email, passwrd) => {
    setLogErr("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, passwrd)
      .catch((err) => {
        setLogErr(err.message);
      });
    setIfUser(!ifUser);
    console.log("fuck you log");
  };
  const handleSignup = (email, password) => {
    setLogErr("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        setLogErr(err.message);
      });
  };
  const handleusername = (username) => {
    const us = username.indexOf("@");
    setUserName(username.slice(0, us));
  };

  const handleSignOut = () => {
    fire.auth().signOut();
    setLogErr("");
  };
  const handleuser = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        cleraUser();
        handleusername(user.email);
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    handleuser();
  }, []);

  return (
    <Router>
      <Switch>
        <Fragment>
          {user ? (
            <Route path="/">
              <Base signOut={handleSignOut} username={username}>
                {" "}
              </Base>
            </Route>
          ) : (
            <SignIn
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAcoount={setHasAcoount}
              email={email}
              setEmaile={setEmail}
              logErr={logErr}
            ></SignIn>
          )}
        </Fragment>
      </Switch>
    </Router>
  );
};

export default App;
