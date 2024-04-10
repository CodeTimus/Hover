import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './LoginPAge.css'
import useUserContext from '../Usercontext';


function LoginPAge() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const {setLoggedIn} = useUserContext();

  

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input className='LoginInput' type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input className='LoginInput' type="password" placeholder="Password" />
            </div>
            <button className='btn fs-4'>Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input className='LoginInput' type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto'/>
              <input className='LoginInput' type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
              <input className='LoginInput' type="password" placeholder="Password" />
            </div>
            <button className='btn fs-4'>Sign Up</button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
             
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
              </button>
          </div>
          <img src="image01.png" class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>One of us ?</h3>
            <p className='loginp'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="image02.png" class="image" alt="" />
        </div>
      </div>
    </div>
  )}

  export default LoginPAge


