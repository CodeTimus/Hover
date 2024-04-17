import React from 'react'
import {Link} from 'react-router-dom'
import useUserContext from '../UserContext'

const Navbar = () => {
  const{loggedIn,logout} = useUserContext()
  console.log(loggedIn)
  const showLoggedIn = () => {
    if(loggedIn){
      return (
        <Link className="nav-link active" aria-current="page" onClick={logout}>
          Logout
        </Link>
      );
    } else {
      return (
        <Link className="nav-link active" aria-current="page" to="/Login">
          Login
        </Link>
      )
    }
  }
  return (

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-success" to="/">
      EMS
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/Home">
          Home
        </Link>
        {showLoggedIn()}
        <Link className="nav-link" to="/Contact">
          Contact Us
        </Link>
        <Link className="nav-link" to="/Feedback">
          Feedback
        </Link>
        <Link className="nav-link" to="/DoctorProfile">
        DoctorProfile
        </Link>
        
        
        {/* <Link
          className="nav-link disabled"
          to="#"
          tabIndex={-1}
          aria-disabled="true"
        >
          Disabled
        </Link> */}
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar