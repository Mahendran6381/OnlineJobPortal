import React from "react";

const SignIn = (props) => {
  const {
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAcoount,
    email,
    setEmaile,
    logErr,
  } = props;
  console.log(props.setEmail);

  return (
    <main>
      <div className="sign-in">
        <div className="sign-wrapper">
          <div className="cheo">
            {hasAccount ? <h3>Sign-In</h3> : <h3>Sign-Up</h3>}
            <input
              className="email-in"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmaile(e.target.value)}
            ></input>
            <input
              className="email-in"
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="err-log">
              {" "}
              <p>{logErr}</p>
            </div>
            <div className="Btn">
              {hasAccount ? (
                <>
                  <button
                    className="btn-in"
                    onClick={() => handleLogin(email, password)}
                  >
                    Sign In
                  </button>
                  <p>
                    Do you don't have an account
                    <span onClick={() => setHasAcoount(!hasAccount)}>
                      Sign up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button
                    className="btn-in"
                    onClick={() => handleSignup(email, password)}
                  >
                    Sign Up
                  </button>
                  <p>
                    Do you Already have an account{" "}
                    <span onClick={() => setHasAcoount(!hasAccount)}>
                      Sign in
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
