
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Sheared/Navbar/NavBar'
import { ToastContainer } from 'react-toastify'
import Footer from '../pages/Sheared/Footer/Footer'
import { InfinitySpin } from 'react-loader-spinner'

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  window.onload = () => {
    setIsLoading(false);
  }

  return (
    <>
      {
        !isLoading ?
          < div className='container' >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
          </div >
          :
          <div className='w-full h-screen flex justify-center items-center'>
            <InfinitySpin
              width='300'
              color="#4fa94d"
            />
          </div>
      }
    </>
  )
}

export default Main
