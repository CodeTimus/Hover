import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {

  return (
    <>
   
   <>
  <div className="sidebar">
   
    <ul className="nav-list">
        <li>
        <Link to="/Admin/AdminDashboard">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Admin Dashboard</span>
        </Link>
        <span className="tooltip">Admin Dashboard</span>
      </li>
      <li>
        <Link to="/Admin/ManageUser">
          <i className="bx bx-user" />
          <span className="links_name">Manage User</span>
        </Link>
        <span className="tooltip">Manage User</span>
      </li>
      <li>
        <Link to="/Admin/AddDoctor">
        <i class='bx bx-plus-medical'></i>
          <span className="links_name">Add Doctor</span>
        </Link>
        <span className="tooltip">Add Doctor</span>
      </li>
      <li>
        <Link to="/Admin/ManageDoctor">
        <i class="fa-solid fa-user-doctor"></i>
          <span className="links_name">Manage Doctor</span>
        </Link>
        <span className="tooltip">Manage Doctor</span>
      </li>

      <li>
        <Link to="/Admin/ManageOrder">
          <i className="bx bx-cart-alt" />
          <span className="links_name">Manage Order</span>
        </Link>
        <span className="tooltip">Manage Order</span>
      </li>
   
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="links_name">Setting</span>
        </a>
        <span className="tooltip">Setting</span>
      </li>
      <li className="profile">
        <div className="profile-details">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="profileImg"
          />
          <div className="name_job">
            <div className="name">Stella Army</div>
            <div className="job">Web designer</div>
          </div>
        </div>
        
        <Link to="/" ><i className="bx bx-log-out" id="log_out" /></Link>
      </li>
    </ul>
  </div>
  {/* <section className="home-section">
    <div className="text">Hello</div>
  </section> */}
</>

  </>
  
  )
}

export default Sidebar