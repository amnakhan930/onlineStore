import React from 'react'
import{Outlet}from "react-router-dom"
import Navbar from './Navbar'
const Layout = () => {
  return (
    <div>
       <Navbar/>
      <div className='flex'>
      <div className='min-h-screen bg-slate-500 w-20'> Sidebar </div>
       
      </div>
        
        <div> Section </div>
        <div><Outlet/></div>
    </div>
  )
}

export default Layout