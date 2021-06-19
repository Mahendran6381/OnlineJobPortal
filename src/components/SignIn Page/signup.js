import React, { useState } from 'react';
import Navbar from '../header';

const SignUp = () => {
    return(
        <main>
          <div className = "glass ni">
              <div  className = "nav-wrapper">
                   <Navbar></Navbar> 
              </div> 
              <div className="sign-in">
                  <div className="sign-wrapper">
                      <div className ="cheo">
                          <h3>Sign-Up</h3>
                          <input className='username' type='text' placeholder ='Username'></input>                            
                          <input className='email' type='email' placeholder ='Email'></input>
                          <input className='password' type='Password' placeholder ='Password'></input>
                          <input className='pass-rety' type='PasswordRe' placeholder ='re-type Password'></input>
                          <button className="btn-in">SignUp</button>
                          <div className ="btns">
                          <button className="btn-g">Google</button>
                          <button className="btn-g">Facebook</button>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
        </main>
    )
}

export default SignUp