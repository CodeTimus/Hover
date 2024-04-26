import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './Components/About'
import './App.css'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Contact from './Components/Contact.jsx'
import Readmore1 from './Components/Readmore1.jsx'
import View from './Components/View.jsx'
import Notfound from './Components/Notfound.jsx'
import ManageUser from './Components/ManageUser.jsx'
import { SnackbarProvider } from 'notistack'
import { UserProvider } from './UserContext.jsx'
import Login from './Components/Login.jsx'
import Feedback from './Components/Feedback.jsx'
import Location from './Components/Location.jsx'
import AddDoctor from './Components/AddDoctor.jsx'
import DoctorLogin from './Components/DoctorLogin.jsx'
import ProfileCard from './Components/ProfileCard.jsx'
import Base from './Components/Admin/Base.jsx'
import Header from './Components/Admin/Header.jsx'
import Sidebar from './Components/Admin/Sidebar.jsx'  
import Main from './Components/Admin/Index.jsx'
import DoctorProfile from './Components/DoctorProfile.jsx'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/About" element={<About />} />
           
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Readmore1" element={<Readmore1 />} />
            <Route path="/View" element={<View />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/*" element={<Notfound />} />
            <Route path="/ManageUser" element={<ManageUser />} />
            <Route path="/DoctorProfile/:id" element={<DoctorProfile />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/AddDoctor" element={<AddDoctor />} />
            <Route path="/DoctorLogin" element={<DoctorLogin />} />
            <Route path="/ProfileCard" element={<ProfileCard />} />
            <Route path="/Admin" element={<Main/>} />
            <Route path="Base" element={<Base />} />
            <Route path="Header" element={<Header />} />
            <Route path="Sidebar" element={<Sidebar />} />
          
          </Routes>
          </UserProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App