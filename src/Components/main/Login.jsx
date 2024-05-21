import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import './LoginPAge.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import useUserContext from '../../UserContext';
import image02 from '../../assets/image02.png'
import image01 from '../../assets/image01.png'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
})

const LoginSchema = Yup.object().shape({

email: Yup.string().email('Invalid email').required('Required'),
password: Yup
  .string()
  .required('Please Enter your password')
  .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
})

function Login() {

  const navigate = useNavigate()
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const SignupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:3000/user/add", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      // navigate('/')

      if (res.status === 200) {
        enqueueSnackbar('Signup Successfull', { variant: 'success' })
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' })
      }
    },
    validationSchema: SignupSchema,
  });

  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:3000/user/authenticate", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Login Successfully', { variant: 'success' })
        setLoggedIn(true)
        const data = await res.json();
        sessionStorage.setItem('isloggedin', true);
        if (data.role === 'admin') {
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/Admin/AdminDashboard');
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/');
        }
      } else if (res.status === 400) {
        enqueueSnackbar('Invalid email or password', { variant: 'error' })
      }

    },
    validationSchema: LoginSchema,
  })

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const { setLoggedIn } = useUserContext();



  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm" onSubmit={SignupForm.handleSubmit} >
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
              <input className='LoginInput' type="text" placeholder="Username" id='name'
                onChange={SignupForm.handleChange}
                value={SignupForm.values.name} />
            </div>
                {
                  SignupForm.errors.name
                }
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
              <input className='LoginInput' type="email" placeholder="Email" id='email'
                onChange={SignupForm.handleChange}
                value={SignupForm.values.email} />
            </div>
                {
                  SignupForm.errors.email
                }
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
              <input className='LoginInput' type="password" placeholder="Password" id='password'
                onChange={SignupForm.handleChange}
                value={SignupForm.values.password} />
            </div>
                {
                  SignupForm.errors.password
                }
            <button type='submit' className='log-btn fs-4'>Sign up</button>

            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">

              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto' />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form loginForm" onSubmit={LoginForm.handleSubmit}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
              <input className='LoginInput' type="email" placeholder="Email" name='email'
                onChange={LoginForm.handleChange}
                value={LoginForm.values.email} />
            </div>
            {
                  LoginForm.errors.email
                }
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
              <input className='LoginInput' type="password" placeholder="Password" name='password'
                onChange={LoginForm.handleChange}
                value={LoginForm.values.password} />
            </div>
            {
                  LoginForm.errors.password
                }
            <div>
              <Link to="/main/ForgetPassword" className="text-body" >
                Forgot Password
              </Link>
            </div>
            <button className='log-btn fs-4'>Sign In</button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">

              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto' />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className='loginh3'>Already have an account?</h3>
            
            <p className='loginp'>
             
            </p>
            <button className="log-btn transparent" onClick={handleSignUpClick}>
              Sign In
            </button>
          </div>
          <img src={image01} class="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className='loginh3'>Create An Account!</h3>
            <p className='loginp'>
            Join us now to access unlimited features and
seamless user experience.
            </p>
            <button onClick={handleSignInClick} className="log-btn transparent" id="sign-in-btn">
              Sign Up
            </button>
          </div>
          <img src={image02} class="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login


