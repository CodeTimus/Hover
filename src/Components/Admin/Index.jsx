import { useState } from 'react'
import './admin.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Base'
import { Outlet } from 'react-router-dom'

function Main() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} > <Outlet /> </Header>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
      </div>
      
    </div>
  )
}

export default Main
