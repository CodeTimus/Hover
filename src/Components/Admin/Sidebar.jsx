import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = ({ children }) => {

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
              <Link to="/Admin/AddDoctor">
                <i className="bx bx-plus-medical" />
                <span className="links_name">Add Product</span>
              </Link>
              <span className="tooltip">Add Product</span>
            </li>
            <li>
              <Link to="/Admin/ManageUser">
                <i className="bx bx-user" />
                <span className="links_name">Manage User</span>
              </Link>
              <span className="tooltip">Manage User</span>
            </li>
            <li>
              <Link to="/Admin/ManageDoctor">
              <i class="fa-solid fa-user-doctor"></i>
                <span className="links_name">Manage Doctor</span>
              </Link>
              <span className="tooltip">Manage Doctor</span>
            </li>
            <li className="profile">
              <Link to="/main/Home">
                <i className="bx bx-log-out" id="log_out" />
              </Link>
            </li>
          </ul>
        </div>
        <section className="home-section">
          {children}
        </section>
      </>

    </>
  )
}
{/* <section className="home-section">
    <div className="text">Hello</div>
  </section> */}

export default Sidebar