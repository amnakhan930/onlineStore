import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <nav className="md:ml-auto flex flex-wrap items-center text-base">
    <Link to="/Login" className="mr-5 hover:text-gray-900">Login</Link>
    <Link to="/Register" className="mr-5 hover:text-gray-900">Register</Link>
      
    </nav>
  </div>
</header>

  )
}

export default Navbar