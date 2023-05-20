
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Sheared/Navbar/NavBar'
import { ToastContainer } from 'react-toastify'
import Footer from '../pages/Sheared/Footer/Footer'

function Main() {
  return (
    <div className='container'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
        <Footer></Footer>
    </div>
  )
}

export default Main
