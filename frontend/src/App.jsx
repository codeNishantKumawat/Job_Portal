import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './common/Signup'
import Login from './common/Login'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
