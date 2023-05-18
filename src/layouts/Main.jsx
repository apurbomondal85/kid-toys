
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Sheared/Navbar/NavBar'

function Main() {
  return (
    <div className='container'>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Main