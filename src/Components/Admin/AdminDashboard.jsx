import React from 'react'
import pan from '../../assets/pan.png'
import { ReactTyped } from "react-typed";
import './AdminDashboard.css'

const AdminDashboard = () => {
  return (
    <div className='src1'>
      <div className='container2'>
        <h1 className='' style={{ fontSize: "70px", fontWeight: "bolder" }}>Welcome to the </h1>
        <ReactTyped style={{ fontSize: "60px", color:"#2ec8a6" }} className=" " strings={["Admin Panel of EMS"]} typeSpeed={100} loop />
      </div>


    </div>
  )
}

export default AdminDashboard