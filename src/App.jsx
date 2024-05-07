import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from './Components/main/About.jsx'
import "./App.css"
import Signup from './Components/main/Signup.jsx'
import Home from './Components/main/Home.jsx'
import Contact from './Components/main/Contact.jsx'
import Readmore1 from './Components/main/Readmore1.jsx'
import View from './Components/View.jsx'
import Notfound from './Components/Notfound.jsx'
import ManageUser from './Components/Admin/ManageUser.jsx'
import { SnackbarProvider } from 'notistack'
import { UserProvider } from './UserContext.jsx'
import Login from './Components/main/Login.jsx'
import Feedback from './Components/main/Feedback.jsx'
import Location from './Components/main/Location.jsx'
import AddDoctor from './Components/Admin/AddDoctor.jsx'
import DoctorLogin from './Components/main/DoctorLogin.jsx'
import Admin from './Components/Admin/Index.jsx'
import DoctorProfile from './Components/Doctor/DoctorProfile.jsx'
import PushNotificationButton from './Components/PushNotificationButton.jsx'
import ManageDoctor from './Components/Admin/ManageDoctor.jsx'
import Doctor from './Components/Doctor/index.jsx'
import AddContact from './Components/Doctor/Contact.jsx'
import Main from './Components/main/index.jsx'
import DocProfile from './Components/main/DocProfile.jsx'
import AdminDashboard from './Components/Admin/AdminDashboard.jsx'
import ProfileCard from './Components/main/ProfileCard.jsx'
import ForgetPassword from './Components/main/ForgetPassword.jsx'

// import Navbar from './Components/main/Navbar.jsx'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <UserProvider>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Navigate to={"/main/home"} />} />
              <Route path='main' element={<Main />}>
                <Route path="About" element={<About />} />
                <Route path="Login" element={<Login />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Home" element={<Home />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Feedback" element={<Feedback />} />
                <Route path="DoctorLogin" element={<DoctorLogin />} />
                <Route path="Readmore1" element={<Readmore1 />} />
                <Route path="DoctorProfile/:id" element={<DoctorProfile />} />
                <Route path="Location" element={<Location />} />
                <Route path="ProfileCard" element={<ProfileCard />} />
                <Route path="DocProfile/:id" element={<DocProfile />} />
                <Route path="ForgetPassword" element={<ForgetPassword />} />
              </Route>


              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/View" element={<View />} />
              <Route path="/*" element={<Notfound />} />
              <Route path='/PushNotificationButton' element={<PushNotificationButton />} />

              <Route path="/Admin" element={<Admin />} >
                <Route path="AdminDashboard" element={<AdminDashboard />} />
                <Route path="AddDoctor" element={<AddDoctor />} />
                <Route path="ManageUser" element={<ManageUser />} />
                <Route path="ManageDoctor" element={<ManageDoctor />} />

              </Route>

              <Route path="Doctor" element={<Doctor />} >
                <Route path="DoctorProfile" element={<DoctorProfile />} />
                <Route path='contact' element={<AddContact />} />
              </Route>

            </Routes>
          </UserProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App