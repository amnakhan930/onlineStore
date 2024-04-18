import React from 'react'
import {Routes,Route} from"react-router-dom"
import Dashboard from './Components/Dashboard'
import Layout from './Components/Layout'
import { Home } from './Pages/Home'
import Login from './Auth/Login'
import Register from './Auth/Register'



const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/home'element={<Home/>}></Route>
      </Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/register'element={<Register/>}></Route>
    
    
     

      

      </Routes>
    </div>
  )
}

export default App