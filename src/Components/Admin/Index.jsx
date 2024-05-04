import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
   
      <Sidebar />
   
     <div style={{marginLeft:"100px"}}>
    <Outlet />   </div>                  
    </>
  )
}

export default Admin