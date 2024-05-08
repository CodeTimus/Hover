import React from 'react'
import {Link} from 'react-router-dom'
import useUserContext from '../../UserContext'


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
        <Link className="nav-link active" aria-current="page" to="/main/Login">
          Register
        </Link>
      )
    }
  }
  return (

    <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand" href="#">Web Zone</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar