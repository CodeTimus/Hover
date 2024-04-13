import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About'
import './App.css'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Contact from './Components/Contact.jsx'
import Readmore1 from './Components/Readmore1.jsx'
import View from './Components/View.jsx'
import Notfound from './Components/Notfound.jsx'
import ManageUser from './Components/ManageUser.jsx'
import './App.css'
import DoctorProfile from './Components/DoctorProfile.jsx'
import LoginPage from './Components/LoginPage.jsx'
import { SnackbarProvider } from 'notistack'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/LoginPage" element={<LoginPage />} />
           
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact/>}/>
            {/* <Route path="/Feedback" element={<Feedback/>}/> */}
            <Route path="/Readmore1" element={<Readmore1/>}/>
            <Route path="/View" element={<View/>}/>
            <Route path="/*" element={<Notfound/>}/>
            <Route path="/ManageUser" element={<ManageUser/>}/>
            <Route path="/DoctorProfile" element={<DoctorProfile/>}/>



            </Routes>
            </BrowserRouter>
            </SnackbarProvider>
    </div>
  )
}

export default App