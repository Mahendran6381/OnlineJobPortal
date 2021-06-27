import React, { useState, useEffect } from "react";
import { log } from "util";
import fire from "../../fire";

const SignIn = (props) => {
  const setLoginNeeded = props.setLoginNeeded;
  const loginNeeded = props.loginNeeded;
  const [logErr, setLogErr] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState(true);
  const [username, setUserName] = useState("");
  const cleraUser = () => {
    setUser("");
    setPassword("");
  };

  const handleLogin = (email, password) => {
    const auth = fire.auth();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoginNeeded(!loginNeeded);
      })
      .catch((error) => {
        setLogErr(error.message);
      });
    // setLogErr("");
    // fire
    //   .auth()
    //   .signInWithEmailAndPassword(email, passwrd)
    //   .then(setLoginNeeded(!loginNeeded))
    //   .catch((err) => {
    //
    //   });

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
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .case {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        /* height: 100%; */\n        margin: 7rem;\n    }\n\n    body {\n        background-color: rgb(81, 174, 240);\n    }\n\n    .signin-container {\n\n        min-height: 400px;\n        max-height: 700px;\n        min-width: 300px;\n        max-width: 400px;\n        background: rgba(255, 255, 255, 0.3);\n        padding: 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n        border-radius: 10px;\n\n\n    }\n\n    button {\n        height: 30px;\n        /* margin-top: 7rem; */\n        width: 70px;\n        border: none;\n        background-color: transparent;\n        border: 2px white solid;\n        color: white;\n        border-radius: 10px;\n        transition-duration: 200ms;\n    }\n\n    button:hover {\n        background: white;\n        color: black;\n    }\n\n    input {\n        background: transparent;\n        outline: none;\n        border: none;\n        border-bottom: 2px white solid;\n        padding: 10px;\n\n    }\n",
          }}
        />
        <main>
          <div className="case">
            <div className="signin-container">
              <label>UserName</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isUser ? (
                <>
                  <button onClick={() => handleLogin(user, password)}>
                    Sign In
                  </button>
                  <div className="more">
                    <p>
                      Don't Have an account?{" "}
                      <span onClick={() => setIsUser(!isUser)}>Sign Up</span>
                    </p>
                    <a>{logErr}</a>
                  </div>
                </>
              ) : (
                <>
                  <button onClick={() => handleSignup(user, password)}>
                    Sign Up
                  </button>
                  <div className="more">
                    <p>
                      Already Have an account?{" "}
                      <span onClick={() => setIsUser(!isUser)}>Sign In</span>
                    </p>
                    <a>{logErr}</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default SignIn;
