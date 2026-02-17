import React from 'react'
import Navbar from './DashBorad/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default App