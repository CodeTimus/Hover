import React from 'react'
import {Link} from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Admin Dashboard</title>
  {/* Open Sans Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Material Icons */}
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    rel="stylesheet"
  />
  {/* Bootstrap Icons */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
  />
  {/* Custom CSS */}
  <link rel="stylesheet" href="css/styles.css" />
  <div className="grid-container">
    {/* Header */}
    <header className="header">
      <div className="menu-icon" onclick="openSidebar()">
        <span className="material-icons-outlined">menu</span>
      </div>
      <div className="header-left">
        <span className="material-icons-outlined">search</span>
      </div>
      <div className="header-right">
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>
    </header>
    {/* End Header */}
    {/* Sidebar */}
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span className="material-icons-outlined">mood</span> LOGO
        </div>
        <span className="material-icons-outlined" onclick="closeSidebar()">
          close
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/admin/AdminDashboard">
            <span className="material-icons-outlined">dashboard</span> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin/AddDoctor">
            <span className="material-icons-outlined">Add Doctor</span>{" "}
            LAdd Doctor
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">forum</span> Forum
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">phone</span> Support
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">email</span> Messages
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">poll</span> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <span className="material-icons-outlined">settings</span> Settings
          </a>
        </li>
      </ul>
    </aside>
    {/* End Sidebar */}
    
  </div>
  {/* Scripts */}
  {/* Custom JS */}
</>

    </div>
  )
}

export default Sidebar
