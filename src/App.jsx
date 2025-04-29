import React from 'react'
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact";
import Courses from "./pages/Courses";
import Login from "./pages/login";
import "./App.css"

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/Courses"}>courses</NavLink>
            <NavLink to={"/login"}>login</NavLink>
            </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App
