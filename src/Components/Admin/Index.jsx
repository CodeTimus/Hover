import React from 'react'
// import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Admin = () => {
  return (
    <>
      <Sidebar>
        <div style={{ marginLeft: "100px" }}>
          <Outlet />
        </div>
      </Sidebar>
    </>
  )
}

export default Admin