import React, { useState } from "react";
import YourJob from "./Components/YourJobs/yourJob";
import SignIn from "./Components/SignIn/sign-in";

const App = () => {
  const [loginNeeded, setLoginNeeded] = useState(true);
  console.log(YourJob);
  return (
    <>
      {loginNeeded ? (
        <YourJob
          loginNeeded={loginNeeded}
          setLoginNeeded={setLoginNeeded}
        ></YourJob>
      ) : (
        <SignIn
          loginNeeded={loginNeeded}
          setLoginNeeded={setLoginNeeded}
        ></SignIn>
      )}
    </>
  );
};

export default App;
