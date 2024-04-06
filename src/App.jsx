import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPAge from './Components/LoginPAge.jsx'
import About from './Components/About'
import './App.css'
import './Components/Contact.css'
import './Components/Home.css'
import './Components/LoginPAge.css'
import './Components/Feedback.css'
import './Components/Readmore1.css'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Contact from './Components/Contact.jsx'
import Feedback from './Components/Feedback.jsx'
import Readmore1 from './Components/Readmore1.jsx'
import View from './Components/View.jsx'
import Notfound from './Components/Notfound.jsx'
// import LoginPAge from './Components/LoginPAge'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<LoginPAge />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Feedback" element={<Feedback/>}/>
            <Route path="/Readmore1" element={<Readmore1/>}/>
            <Route path="/View" element={<View/>}/>
            <Route path="/*" element={<Notfound/>}/>

            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App